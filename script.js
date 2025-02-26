function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    alert("Đăng nhập thành công!");
    window.location.href = "Contents/gioithieu.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
  }
}
