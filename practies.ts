// let captcha!: number;
// setInterval(() => {
//   function refreshButtan() {
//     captcha = Math.floor(Math.random() * 9000) + 1000;
//   }
//   refreshButtan();
//   console.log(`current value`, captcha);
// }, 1000);
type test = string | string[];
function formatComnad(input: test) {
  let line = "";
  if (typeof input === `string`) {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join(" ");
  }
  return line;
}

console.log(formatComnad(" sushant   "));

console.log(formatComnad(["sushant", "jadhav"]));
