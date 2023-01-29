var captcha;
setInterval(function () {
    function refreshButtan() {
        captcha = Math.floor(Math.random() * 9000) + 1000;
    }
    refreshButtan();
    console.log("current value", captcha);
}, 1000);
