//  function / method overloading same name with diffrent parametres or arguments

function doubleMe(x: number);
function doubleMe(x: string);
function doubleMe(x: string[]);

function doubleMe(x: any) {
  if (x && typeof x === `number`) {
    console.log(x * 2);
  } else if (x && typeof x === `string`) {
    console.log(x + " " + x);
  } else if (Array.isArray(x)) {
    return x.map((name) => console.log(name));// istant of map we can use for of loop also to iterat array
  }
}
doubleMe(2); // o/p 2
doubleMe("Jack"); // jack jack
doubleMe(["a"]); // a
