//  function / method overloading same name with diffrent parametres or arguments
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
    }
}
doubleMe(2); // o/p 2
doubleMe("Jack"); // jack jack
doubleMe(["a"]); // a
