//  Take data from user
const maths = Number(prompt("Please enter maths marks"));
const physics = Number(prompt("Please enter physics marks"));
const chemistry = Number(prompt("Please enter chemistry marks"));

console.log(`Maths marks : ${maths}`);
console.log(`Physics marks : ${physics}`);
console.log(`Chemistry marks : ${chemistry}`);

// avreage of subjects
let average = (maths + physics + chemistry) / 3;
console.log(`Average of three subject is : ${average.toFixed(2)} `);

// grade of student
if (average >= 70 && average <= 90) {
  console.log(`Congratulation..Your grade is B`);
} else {
  if (average <= 70) {
    console.log(`Your grade is c`);
  }
  if (average >= 90) {
    console.log(`Congratulation ..Your grade is A`);
  }
}
