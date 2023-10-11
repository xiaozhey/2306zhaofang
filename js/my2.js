var login = JSON.parse(localStorage.getItem('login'));
var tel = JSON.parse(localStorage.getItem('tel'));
var account = document.getElementsByClassName('account')[0];
if (login) {
    account.innerHTML = `你好, ${tel}`;
    account.style.fontSize = '1.6rem';
    account.href = 'javaScript: ;'
    account.style.color = 'white'
}
var tuichu = document.getElementsByClassName('tuichu')[0];
tuichu.onclick = function () {
    if (login) {
        localStorage.setItem('login', false)
        location.href = ("./my.html")
    }
}