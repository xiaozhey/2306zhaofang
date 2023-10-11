var login = JSON.parse(localStorage.getItem('login'));
var tel = JSON.parse(localStorage.getItem('tel'));
var account = document.getElementsByClassName('account')[0];
if (login) {
    account.innerHTML = `你好, ${tel}`;
    account.style.fontSize = '1.2rem';
    account.href = 'javaScript: ;'
}