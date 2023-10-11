//获取导航条nav 
var nav = document.querySelector('.nav ');
var navTab = nav.children;
//获取下拉菜单
var course = document.querySelectorAll('.course');
//蒙版
var hide = document.querySelector('.hide');

//遍历navTab
for (var i = 0; i < navTab.length; i++) {
    navTab[i].setAttribute('ind', i);
    navTab[i].onclick = function (e) {
        window.e ? e.cancelBubble = true : e.stopPropagation();
        // nav.classList.remove('active');
        nav.classList.add('navActive');
        var ind = this.getAttribute('ind');
        hide.style.display = 'block';
        for (var j = 0; j < course.length; j++) {
            course[j].style.transform = 'scale(0)';
            navTab[j].firstElementChild.classList.remove('sanjiao');
            navTab[j].style.color = '#666666';
        }
        course[ind].style.transform = 'scale(1)';
        navTab[ind].firstElementChild.classList.add('sanjiao');
        navTab[ind].style.color = '#ff8a00';
        // console.log(navTab[ind].firstElementChild);
    }
}
//点击空白页面消失
document.onclick = function () {
    for (var j = 0; j < course.length; j++) {
        course[j].style.transform = 'scale(0)';
        hide.style.display = 'none';
        nav.classList.remove('navActive');
        navTab[j].firstElementChild.classList.remove('sanjiao');
        navTab[j].style.color = '#666666';
    }
}
//阻止冒泡
for (var k = 0; k < course.length; k++) {
    course[k].onclick = function (e) {
        window.e ? e.cancelBubble = true : e.stopPropagation();
    }
}
