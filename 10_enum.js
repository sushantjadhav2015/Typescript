//! sentex of enum is 
// ! enum Name {}
//  in that after enum write name with first letter is capital an use { } backet 
var Gender;
(function (Gender) {
    Gender[Gender["Other"] = 2] = "Other";
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female"; // 1
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
console.log(Gender[2]);
// TODO .. By using enum we can cerate week, month, blood group etc
// example of enum 
var userLoging;
(function (userLoging) {
    userLoging[userLoging["Email"] = 0] = "Email";
    userLoging[userLoging["social"] = 1] = "social";
    userLoging[userLoging["asGuest"] = 2] = "asGuest";
})(userLoging || (userLoging = {}));
console.log(userLoging[0]);
console.log(userLoging[1]);
console.log(userLoging[2]);
