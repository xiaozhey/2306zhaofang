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
    touch.on(navTab[i], 'tap', function (e) {
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
    })
    // navTab[i].onclick = 
}
//点击空白页面消失
touch.on(document, 'tap', function (e) {
    for (var j = 0; j < course.length; j++) {
        course[j].style.transform = 'scale(0)';
        hide.style.display = 'none';
        nav.classList.remove('navActive');
        navTab[j].firstElementChild.classList.remove('sanjiao');
        navTab[j].style.color = '#666666';
    }
})

//阻止冒泡
for (var k = 0; k < course.length; k++) {
    touch.on(course[k], 'tap', function (e) {
        window.e ? e.cancelBubble = true : e.stopPropagation();
    })
}
touch.on(nav, 'tap', function (e) {
    window.e ? e.cancelBubble = true : e.stopPropagation();
})
//获取对号ok
var noOk = document.getElementsByClassName('noOk');
for (var l = 0; l < noOk.length; l++) {
    noOk[l].setAttribute('ind', l);
    touch.on(noOk[l], 'tap', function () {
        var ind = this.getAttribute('ind');
        for (var i = 0; i < noOk.length; i++) {
            noOk[i].classList.remove('ok');
        }
        noOk[ind].classList.add('ok');
    })
}
//获取标题courTit
var courTit = document.getElementById('courTit');
var h3 = courTit.children;
for (var h = 0; h < h3.length; h++) {
    h3[h].setAttribute('ind', h);
    touch.on(h3[h], 'tap', function () {
        var ind = this.getAttribute('ind');
        for (var i = 0; i < h3.length; i++) {
            h3[i].classList.remove('courH');
        }
        h3[ind].classList.add('courH');
    })
}
