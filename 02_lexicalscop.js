// just interview quastion
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        }; // growOld is method which is converted into property by using arrow fuction because by using normal method as growOld() it cant access at output.
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson1 = new Person(0); // object
//objPerson1.growOld();
var growOldss = objPerson1.growOld; //in this line we are accessing property not method and stoare into a veriable 
growOldss();
console.log("age", objPerson1.age());
