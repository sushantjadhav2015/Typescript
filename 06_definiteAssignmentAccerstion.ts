// definite assignment accerstion (!)
let dise!:number;

function rollDise() {
    dise = (Math.round(Math.random()*6)+1);
}
rollDise();
 console.log(`current number is`, dise);
 

// Math floor or round is static method always round down and return the largest integer 
// less than or equal to given number (6)
// 
console.log(Math.floor(5));

// 5
// Math.random() returns a random number between 0 to 1 for example 0.125487,0.12587,0.4587,0.58741 etc 

