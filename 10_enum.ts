//! sentex of enum is 
// ! enum Name {}
//  in that after enum write name with first letter is capital an use { } backet 

enum Gender {
    Other=2,// 2
    Male=0,// 0
    Female=1 // 1
}

console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);

// TODO .. By using enum we can cerate week, month, blood group etc

// example of enum 
enum userLoging {
    Email=0,
    social=1,
    asGuest=2 
}

console.log(userLoging[0]);
console.log(userLoging[1]);
console.log(userLoging[2]);





