// just interview quastion
class Person {
  private _age: number;
  constructor(age: number) {
    this._age = age;
  }

  growOld = () => {
    this._age++;
  }; //TODO growOld is method which is converted into property by using arrow fuction because by using normal method as growOld() it cant access at output.

  age() {
    return this._age;
  }
}

const objPerson1 = new Person(0); // object

// If we call groOld method without arrow function it cant incremant age its write 0 in console.
//objPerson1.growOld();

const growOldss = objPerson1.growOld; //in this line we are accessing property not method and stoare into a veriable

growOldss();
console.log("age", objPerson1.age());
