var productArray = [];
let liPagination = null;

let renderCarousel = (productArr) => {
  let html = ``;
  for (let index in productArr) {
    if (index > 2) {
      break;
    }
    if (index == 0) {
      html += `
        <div class="carousel-item active">
          <div class="carousel-item__wrap">
            <div class="carousel__item-img">
              <img src="${productArr[index].image}">
            </div>
            <div class="carousel__item-detail">
              <h1>${productArr[index].name}</h1>
              <p>${productArr[index].description}</p>
              <button class="carousel__btn">
                <a href="./detail.html?id=${productArr[index].id}">Buy now</a>
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="carousel-item">
          <div class="carousel-item__wrap">
            <div class="carousel__item-img">
              <img src="${productArr[index].image}">
            </div>
            <div class="carousel__item-detail">
              <h1>${productArr[index].name}</h1>
              <p>${productArr[index].description}</p>
              <button class="carousel__btn">
                <a href="./detail.html?id=${productArr[index].id}">Buy now</a>
              </button>
            </div>
           </div>
        </div>
      `;
    }
  }
  document.querySelector(".carousel-inner").innerHTML = html;
};

let renderProduct = (productArr, paginationIndex) => {
  let html = ``;
  let count = 0;
  while (count < 6 && paginationIndex < productArr.length) {
    html += `
      <div class="col-4">
        <div class="card">
          <img src="${productArr[paginationIndex].image}" alt="" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${productArr[paginationIndex].name}<h5>
            <p class="card-subtitle">${productArr[paginationIndex].alias}</p>
          </div>
          <div class="card__button">
            <button class="card__buy">
              <a href="./detail.html?id=${productArr[paginationIndex].id}">Buy now</a>
            </button>
            <div class="card__price">${productArr[paginationIndex].price}$</div>
          </div>
        </div>
      </div>
    `;
    ++count;
    ++paginationIndex;
  }
  document.querySelector(".product__feature .row").innerHTML = html;
};

let renderPagination = (productArr) => {
  let html = ``;
  let paginationIndex = 0;
  let loop = (productArr.length - (productArr.length % 6)) / 6;
  if (productArr.length % 6 != 0) {
    ++loop;
  }
  for (let index = 0; index < loop; ++index) {
    if (index == 0) {
      html += `
        <li class="page-item active"><a class="page-link" onclick="changePage(this,${paginationIndex})">${
        index + 1
      }</a></li>
      `;
    } else {
      html += `
        <li class="page-item"><a class="page-link" onclick="changePage(this,${(paginationIndex += 6)})">${
        index + 1
      }</a></li>
      `;
    }
  }
  document.querySelector(".pagination").innerHTML = html;
  liPagination = document.querySelectorAll(".page-item")[0];
};

let changePage = (selector, paginationIndex) => {
  renderProduct(productArray, paginationIndex);
  liPagination.classList.remove("active");
  let liNew = selector.closest(".page-item");
  liNew.classList.add("active");
  liPagination = liNew;
};

let getProduct = () => {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (result) {
    renderCarousel(result.data.content);
    renderProduct(result.data.content, 0);
    renderPagination(result.data.content);
    productArray = result.data.content;
  });

  promise.catch(function (err) {
    console.log("result", err.respone.data);
  });
};

window.addEventListener("load", function () {
  getProduct();
});
