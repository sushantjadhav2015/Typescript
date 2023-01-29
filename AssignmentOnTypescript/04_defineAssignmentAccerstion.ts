// cerate 4 digit captcha number it refresh at every 1 sec.
let captcha!: number;
setInterval(() => {
  function refreshButtan() {
    captcha = Math.floor(Math.random() * 9000) + 1000;
  }
  refreshButtan();
  console.log(`current value`, captcha);
}, 1000);
