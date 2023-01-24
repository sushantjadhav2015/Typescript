// concat string by using union type
console.log("------union type------");
function empName(input) {
    var line = "";
    if (typeof input === "string") {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(" ");
    }
    return line;
}
console.log(empName(["sushant ", "sambhaji ", "jadhav "]));
// class parameter properties
console.log("------class parameter properties----------");
var BankDetails = /** @class */ (function () {
    function BankDetails(name, accountNumber, location) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.location = location;
    }
    return BankDetails;
}());
var SBIBank = new BankDetails("Sbi bank", 338970221111, "kolhapur");
console.log(SBIBank.name, SBIBank.location, SBIBank.accountNumber);
