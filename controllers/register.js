document.querySelector("#btnSignUp").onclick = function () {
    let user = new User();
    user.email = document.querySelector("#txtEmail").value;
    user.name = document.querySelector("#txtName").value;
    user.password = document.querySelector("#txtPassword").value;
    user.phone = document.querySelector("#txtPhone").value;
    user.gender = document.querySelector("input[name='rdGender']:checked").value;
    let passConfirm = document.querySelector("#txtConfirm").value;

    let valid = true;

    valid &= checkEmpty(user.email, "#chkEmail", "Email ") & checkEmpty(user.name, "#chkName", "Tên ") & checkEmpty(user.password, "#chkPassword", "Mật khẩu ") & checkEmpty(user.phone, "#chkPhone", "Số điện thoại ") & checkEmpty(passConfirm, "#chkConfirm", "Xác nhận mật khẩu ") & checkEmail(user.email, "#chkEmail", "Email ") & checkHoTen(user.name, "#chkName", "Tên ") & checkPassword(user.password, "#chkPassword", "Mật khẩu ") & checkPhone(user.phone, "#chkPhone", "Số điện thoại ") & checkConfirmPassword(passConfirm, user.password, "#chkConfirm", "Xác nhận mật khẩu ");

    if (!valid) {
        return;
    }

    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user
    })

    promise.then(function (result) {
        alert("Đăng ký thành công");
        console.log(result.data);
    });

    promise.catch(function (err) {
        alert("Đăng ký không thành công");
        console.log(err.response.data)
    });



};
