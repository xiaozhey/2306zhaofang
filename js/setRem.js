// 动态配置rem 
// 默认1rem  10px
function setRem() {
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.querySelector('html');
    clientWidth = clientWidth < 375 ? 375 : clientWidth;
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px';
}

window.onresize = setRem;
window.onload = setRem;