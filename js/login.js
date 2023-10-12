var tab = document.getElementsByClassName('tab')
var as = document.getElementsByClassName('a');
for (var i = 0; i < as.length; i++) {
    as[i].setAttribute('index', i);
    as[i].onclick = function () {
        var index = this.getAttribute('index');
        for (var j = 0; j < as.length; j++) {
            as[j].className = 'a';
            as[index].className = 'a active'

        }
        for (var k = 0; k < tab.length; k++) {
            tab[k].className = 'tab';
            tab[index].className = 'tab cc'
        }
    };
}
var loginTelephone = document.getElementById('logintelephone');
var loginPassword = document.getElementById('loginpassword');

var tel = JSON.parse(localStorage.getItem('tel'));
var password = localStorage.getItem('password');
var tishi1 = document.getElementsByClassName('tishi1')[0];
var tishi2 = document.getElementsByClassName('tishi2')[0];
var tishi3 = document.getElementsByClassName('tishi3')[0];
var yanzm = document.getElementsByClassName('yanzm');
var telephone = document.getElementById('telephone');
var loginButton = document.getElementById('login');
var num = 60;
var timer;
var randoms = 0;
var yanzm = document.getElementById('yanzm');
touch.on(yanzm, 'tap', function () {
    if (telephone.value == tel) {
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            yanzm.value = `${num}秒后重新发送`;
            yanzm.innerHTML = `${num}秒后重新发送`
            yanzm.style.fontSize = '.6rem'
            yanzm.disabled = true;
            if (num == 55) {
                randoms = parseInt(Math.random() * 10000);
                randoms = randoms < 1000 ? randoms + 1000 : randoms;
                alert(randoms)
            }
            if (num < 1) {
                clearInterval(timer);
                yanzm.value = '获取验证码'
                yanzm.innerHTML = `发送验证码`
                yanzm.style.fontSize = '1.4rem'
                yanzm.disabled = false;
                num = 60;
            }
        }, 1000)
    } else {
        this.disabled = true;
        tishi3.innerHTML = '手机号未注册';
        tishi3.style.color = 'red';
    }
});
// 验证短信验证码
var code = document.getElementById('code');
var verificationCodeJudge = false;
var tishi4 = document.getElementsByClassName('tishi4')[0];
code.onblur = function () {
    if (this.value == '') {
        tishi4.style.color = 'red';
        tishi4.innerHTML = '验证码输入不能为空，请重新输入';
        verificationCodeJudge = false;
    } else if (this.value == randoms) {
        tishi4.style.color = 'skyblue';
        tishi4.innerHTML = '验证成功';
        verificationCodeJudge = true;
    } else {
        tishi4.style.color = 'red';
        tishi4.innerHTML = '验证失败，请核对验证码是否正确';
        verificationCodeJudge = false;
    }
}
var loginTelephoneJudge = false;
loginTelephone.onblur = function () {
    if (loginTelephone.value == '') {
        tishi1.style.color = 'red'
        tishi1.innerHTML = '输入不能为空';
        loginTelephoneJudge = false;
    } else if (loginTelephone.value != tel) {
        tishi1.style.color = 'red'
        tishi1.innerHTML = '该账号未注册';
        loginTelephoneJudge = false;
    } else {
        tishi1.style.color = 'skyblue'
        tishi1.innerHTML = '验证成功';
        loginTelephoneJudge = true;
    }
}
var loginPasswordJudge = false;
loginPassword.onblur = function () {
    if (loginPassword.value == '') {
        tishi2.style.color = 'red'
        tishi2.innerHTML = '输入不能为空';
        loginPasswordJudge = false;
    } else if (loginPassword.value != password) {
        tishi2.style.color = 'red'
        tishi2.innerHTML = '密码错误';
        loginPasswordJudge = false;
    } else {
        tishi2.style.color = 'skyblue'
        tishi2.innerHTML = '密码正确';
        loginPasswordJudge = true;
    }
}
var telephoneJudge = false;
telephone.onblur = function () {
    if (this.value == '') {
        tishi3.style.color = 'red'
        tishi3.innerHTML = '输入不能为空';
        telephoneJudge = false;
    } else if (this.value != tel) {
        tishi3.style.color = 'red'
        tishi3.innerHTML = '该账号未注册';
        telephoneJudge = false;
    } else {
        tishi3.style.color = 'skyblue'
        tishi3.innerHTML = '验证成功';
        telephoneJudge = true;
    }
}
touch.on(loginButton, 'tap', function () {
    if ((loginTelephoneJudge == true && loginPasswordJudge == true) || (verificationCodeJudge == true && telephoneJudge == true)) {
        alert('登录成功');
        telephone.value = '';
        code.value = ''
        localStorage.setItem('login', 'true');
        location.href = ("./my2.html")
    }
});


