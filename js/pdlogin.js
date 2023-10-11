var a = document.getElementById('zb');
var login = JSON.parse(localStorage.getItem('login'));
var tel = JSON.parse(localStorage.getItem('tel'));
console.log(a);
a.onclick = function () {
    if (login) {
        location.href = ("./my2.html")
    } else {
        location.href = ("./my.html")
    }
}