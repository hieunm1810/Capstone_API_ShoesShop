function checkEmpty(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    if (value.trim() === "") {
        selector.style.display = "block";
        selector.innerHTML = name + " không được để trống!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra tai khoan 4-6 ky so
function checkTaiKhoan(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    var regex = /^(nv)\d{2,4}$/;
    if (!regex.test(value.trim())) {
        selector.style.display = "block";
        selector.innerHTML = name + " bao gồm 4-6 ký số theo format(nv123,..)!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra tai khoan co ton tai hay chua
function checkTaiKhoanExist(value, arr, querySelector) {
    var selector = document.querySelector(querySelector);
    if (arr.findIndex(function (element) {
        return element.taiKhoan === value;
    }) != -1) {
        selector.style.display = "block";
        selector.innerHTML = value + " đã tồn tại!";
        return false;
    }
    return true;
}

//kiem tra ho ten phai la chu
function checkHoTen(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    var regex = /^[a-zA-Z ]+$/;
    if (!regex.test(value.trim())) {
        selector.style.display = "block";
        selector.innerHTML = name + " chỉ bao gồm chữ!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra email
function checkEmail(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(value.trim())) {
        selector.style.display = "block";
        selector.innerHTML = name + " không đúng định dạng!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra password
function checkPassword(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (!regex.test(value.trim())) {
        selector.style.display = "block";
        selector.innerHTML = name + " phải chứa các loại ký tự thường, hoa, số, đặc biệt!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}
// kiem tra password confirm
function checkConfirmPassword(value, password, querySelector, name) {
    var selector = document.querySelector(querySelector);
    if (value !== password) {
        selector.style.display = "block";
        selector.innerHTML = name + " không khớp!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra ngay lam
function checkDate(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    var regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if (!regex.test(value.trim())) {
        selector.style.display = "block";
        selector.innerHTML = name + " phải có định dạng mm/dd/yyyy!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra so dien thoai
function checkPhone(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    var regex = /^\d{10}$/;
    if (!regex.test(value.trim())) {
        selector.style.display = "block";
        selector.innerHTML = name + " phải có 10 chữ số!";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra luong co ban
function checkSalary(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    if (Number(value.trim()) < 1000000 || Number(value.trim()) > 20000000) {
        selector.style.display = "block";
        selector.innerHTML = name + " phải trong khoảng 1,000,000 đến 20,000,000";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra chuc vu
function checkChucVu(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    if (value.trim() === "Chọn chức vụ") {
        selector.style.display = "block";
        selector.innerHTML = name + " chưa được chọn";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}

//kiem tra gio lam
function checkGioLam(value, querySelector, name) {
    var selector = document.querySelector(querySelector);
    if (Number(value.trim()) < 80 || Number(value.trim()) > 200) {
        selector.style.display = "block";
        selector.innerHTML = name + " phải trong khoảng 80 đến 200";
        return false;
    }
    selector.innerHTML = "";
    selector.style.display = "none";
    return true;
}
