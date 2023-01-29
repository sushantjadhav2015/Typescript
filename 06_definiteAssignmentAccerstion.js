// definite assignment accerstion (!)
var dise;
function rollDise() {
  dise = Math.round(Math.random() * 6) + 1;
}
rollDise();
console.log("current number is", dise);
