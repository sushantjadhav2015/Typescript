var sn: string | number;

sn = "codemind";
sn = 100;

//  Union type = ti uses to assign many data type as follows
type Test = string | string[];

function formatCommandLine(input: Test) {
  let line = "";
  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join(" ");
  }
  return line;
}

console.log(formatCommandLine("hello ")); // hello
console.log(formatCommandLine(["hello ", "world "])); // helloword
// console.log(formatCommandLine(123457));


// class parameter properties to reduce code complasity 
class Person1 {
  // public fname: string;
  // public age: number;

  // parameterised constructor .
  // constructor(fname: string, age: number) {
  //     this.fname = fname;
  //     this.age = age;}
  constructor(public fname: string, public age: number) {}
}

const jack = new Person1("Jack", 30);
console.log(jack.fname, jack.age);

