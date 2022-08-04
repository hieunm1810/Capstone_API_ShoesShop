
function getProduct() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=1',
        method: 'GET',
        ResponseType: JSON
    });
    // xu ly thanh cong 
    promise.then(function (result) {
        renderName(result.data.content);
        renderDescription(result.data.content);
        renderImg(result.data.content);
        renderPrice(result.data.content);
        renderSize(result.data.content);
    });
    // xu ly that bai 
    promise.catch(function (err) {
        console.log('result', err.response.data.content);

    });

};





function renderName(data) {
    var html = `
    <h2>${data.name}</h2>
    `
    document.querySelector('.giay_title').innerHTML = html
}

function renderDescription(data) {
    var html = `
    <p>${data.description}</p>
    `
    document.querySelector('.giay_lorem').innerHTML = html
}


function renderImg(data) {
    var html = ` <img style ="width:335px ; height:355px; background-color: #F8F8F8;padding:30px" class="image" src="${data.image}" alt="">`;

    document.querySelector('.Info_giay_img').innerHTML = html;

}

function renderPrice(data) {
    var html = ` <span style="color: red;  width: 50px;height: 50px;  ">${data.price}$</span>`;
    document.querySelector('.giay_span').innerHTML = html
}

function renderSize(data) {
    var html = '';
    for (var i = 0; i < data.size.length; i++) {
        var coGiay = data.size[i];
        console.log(coGiay)
        html += `<div class="giay_size_1" style="width: 50px; height: 50px; font-size: 24px; text-align: center;padding-top: 5px; font-weight:600" >${coGiay}</div>`;

    }

    document.querySelector('.giay_size').innerHTML = html
};


//  call api cho phan san pham goi y 
function getProductGoiY() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON
    });
    // xu ly thanh cong 
    promise.then(function (result) {
        renderImg_anh(result.data.content);
        // renderImg_anh2(result.data.content);
        // renderImg_anh3(result.data.content)
        // renderImg_anh4(result.data.content)
        // renderImg_anh5(result.data.content)
        // renderImg_anh6(result.data.content)
    });
    // xu ly that bai 
    promise.catch(function (err) {
        console.log('result', err.response.data.content);

    });

};

function renderImg_anh(data) {
    html = '';
    for (var i = 0; i < data.length; i++) {
        var product_Img = data[i];

        html += ` <div class="col">
               <div style="width:335px"  class="card">
                  <img style ="width:335px ; height:355px; background-color: #F8F8F8;padding:30px" class="image" src="${product_Img.image}" alt="">
                  <div class="card-body">
                    <h5 style="font-weight: 300 ;" class="card-title">${product_Img.name}</h5>
                    <p style = "color:gray" class="card_mota">${product_Img.alias}</p> 
                     <div class="p4-footer">
                        <div style="font-weight:200 ; font-size:24px" class="p4-footer_buynow">
                          <div class= "buynow">Buy Now</div>
                        </div>
                        <div style="font-weight:600 ; font-size:24px" class="p4-footer_price">
                        <div class= "price">${product_Img.price}$</div>
                        </div>
                     </div>
                   </div>
                </div>
                </div>

`;
    }
    console.log(product_Img)
    document.querySelector('.anh').innerHTML = html

}

window.onload = function () {
    getProduct();
    getProductGoiY()
};
