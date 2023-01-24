var maths = Number(prompt("Please enter maths marks"));
var physics = Number(prompt("Please enter physics marks"));
var chemistry = Number(prompt("Please enter chemistry marks"));
console.log("Maths marks : ".concat(maths));
console.log("Physics marks : ".concat(physics));
console.log("Chemistry marks : ".concat(chemistry));
var average = (maths + physics + chemistry) / 3;
console.log("Average of three subject is : ".concat(average.toFixed(2), " "));
if (average >= 70 && average <= 90) {
    console.log("Congratulation..Your grade is B");
}
else {
    if (average <= 70) {
        console.log("Your grade is c");
    }
    if (average >= 90) {
        console.log("Congratulation ..Your grade is A");
    }
}
