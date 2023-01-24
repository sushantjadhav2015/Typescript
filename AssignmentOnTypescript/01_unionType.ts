// concat string by using union type
console.log(`------union type------`);

type Test = number | string;
function display(input: Test) {
  {
    if (typeof input === "number")
      console.log("The given value is of type number.");
    else if (typeof input === "string")
      console.log("The given value is of type string.");
  }
}

display(123);
display("ABC");


let arrayType :number[]|string[];

let arrNum = [1,4,6,8,7,2]
for (const iterator of arrNum) {
    console.log(iterator);
}


// class parameter properties
console.log(`------class parameter properties----------`);

class BankDetails {
  constructor(
    public name: string,
    public accountNumber: number,
    public location: string
  ) {}
}

const SBIBank = new BankDetails(`Sbi bank`, 338970221111, `kolhapur`);
console.log(SBIBank.name, SBIBank.location, SBIBank.accountNumber);
