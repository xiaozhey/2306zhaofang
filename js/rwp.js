var telephone = document.querySelector('#telephone');
var verificationButton = document.getElementById('verificationButton');
var telephoneJudge = false;
var tishi1 = document.getElementsByClassName('tishi1')[0];
var tel = JSON.parse(localStorage.getItem('tel'));
console.log(tel);
telephone.onblur = function () {
    var reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    if (this.value == '') {
        tishi1.style.color = 'red';
        tishi1.innerHTML = '手机号不能为空，请重新输入';
        telephoneJudge = false;
    } else if (reg.test(this.value) == false) {
        tishi1.style.color = 'red';
        tishi1.innerHTML = '手机号有误，请重新输入';
        telephoneJudge = false;
    } else if (this.value != tel) {
        tishi1.style.color = 'red';
        tishi1.innerHTML = '该账号还未注册';
        telephoneJudge = false;
    } else {
        tishi1.style.color = 'skyblue';
        tishi1.innerHTML = '验证成功'
        telephoneJudge = true;
        verificationButton.disabled = false;
    }
}
// 短信验证码发送
var verificationButton = document.getElementById('verificationButton');

var num = 60;
var timer;
var randoms = 0;
touch.on(verificationButton, 'tap', function () {
    if (telephoneJudge == true && !telephone.value == '') {
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            verificationButton.value = `${num}秒后重新发送`;
            verificationButton.innerHTML = `${num}秒后重新发送`
            verificationButton.style.fontSize = '1rem'
            verificationButton.disabled = true;
            if (num == 55) {
                randoms = parseInt(Math.random() * 10000);
                randoms = randoms < 1000 ? randoms + 1000 : randoms;
                alert(randoms)
            }
            if (num < 1) {
                clearInterval(timer);
                verificationButton.value = '获取验证码'
                verificationButton.innerHTML = `发送验证码`
                verificationButton.style.fontSize = '1.4rem'
                verificationButton.disabled = false;
                num = 60;
            }
        }, 1000)
    } else if (telephone.value == '') {
        this.disabled = true;
        tishi1.innerHTML = '手机号不能为空，请重新输入';
        tishi1.style.color = 'red';
    }
})

// 验证短信验证码
var verificationCode = document.getElementById('verificationCode');
var verificationCodeJudge = false;
var tishi2 = document.getElementsByClassName('tishi2')[0];
verificationCode.onblur = function () {
    if (this.value == '') {
        tishi2.style.color = 'red';
        tishi2.innerHTML = '验证码输入不能为空，请重新输入';
        verificationCodeJudge = false;
    } else if (this.value == randoms) {
        tishi2.style.color = 'skyblue';
        tishi2.innerHTML = '验证成功';
        verificationCodeJudge = true;
    } else {
        tishi2.style.color = 'red';
        tishi2.innerHTML = '验证失败，请核对验证码是否正确';
        verificationCodeJudge = false;
    }
}
// 密码
var password_ = document.getElementById('password');
var repassword = document.getElementById('repassword');
var passwordJudge = false;
var tishi3 = document.getElementsByClassName('tishi3')[0];
password_.onblur = function () {
    if (this.value == '') {
        tishi3.style.color = 'red';
        tishi3.innerHTML = '密码不能为空，请重新输入';
        passwordJudge = false;
    } else if (this.value.length < 8) {
        tishi3.style.color = 'red';
        tishi3.innerHTML = '密码不能不能小于8位，请重新输入';
        passwordJudge = false;
    } else {
        tishi3.style.color = 'skyblue';
        tishi3.innerHTML = '密码验证成功';
        passwordJudge = true;
    }
}
var repasswordJudge = false;
var tishi4 = document.getElementsByClassName('tishi4')[0];
repassword.onblur = function () {
    if (this.value != password_.value) {
        tishi4.style.color = 'red';
        tishi4.innerHTML = '两次密码输入不一致'
        repasswordJudge = false;
    } else if (this.value == '' && password_.value == '') {
        tishi4.style.color = 'red';
        tishi4.innerHTML = '确认密码不能为空'
        repasswordJudge = false;
    } else if (this.value == password_.value) {
        tishi4.style.color = 'skyblue';
        tishi4.innerHTML = '验证成功'
        repasswordJudge = true;
    }
}
var password = localStorage.getItem('password');
var register = document.getElementsByClassName('register')[0];
register.onclick = function () {
    var tishi = document.getElementsByClassName('tishi');
    if (telephone.value == '') {
        tishi1.style.color = 'red'
        tishi1.innerHTML = '手机号不能为空'
        telephoneJudge = false;
    } else if (verificationCode.value == '') {
        tishi2.style.color = 'red'
        tishi2.innerHTML = '验证码不能为空'
        verificationCodeJudge = false;
    } else if (password.value == '') {
        tishi3.style.color = 'red';
        tishi3.innerHTML = '密码不能为空'
        passwordJudge = false;
    } else if (repassword.value = '') {
        tishi4.style.color = 'red';
        tishi4.innerHTML = '确认密码不能为空'
        repasswordJudge = false;
    }

    else if (telephoneJudge == true && verificationCodeJudge == true && passwordJudge == true) {
        alert('修改成功')
        localStorage.setItem('tel', telephone.value);
        localStorage.setItem('password', password_.value);
        localStorage.setItem('login', 'false');
        verificationCode.value = '';
        telephone.value = '';
        password_.value = '';
        for (var i = 0; i < tishi.length; i++) {
            tishi[i].style.color = '#fff'
        }
        location.href = ("./login.html")
    }
}