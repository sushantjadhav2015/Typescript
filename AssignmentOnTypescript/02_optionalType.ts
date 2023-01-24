//  take 3 rd argument is optional by using optional type
console.log(`-----Optional type------`);

function bank(name: string, accountNumber: number, location ?: string) {
  console.log("name :", name);
  console.log("account number", accountNumber);
  if (location != undefined) {
    console.log("Location :", location);
  }
}
bank("Sbi bank", 33897022111)