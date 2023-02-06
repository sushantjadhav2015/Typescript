"use strict";
// var x : string;
// x="code mind"
// console.log(x);
exports.__esModule = true;
exports.isPalindrome = void 0;
// // TODO : Type casting
// let leet;
// leet=`1337`;
// const number = leet as number;
// console.log(number===1337);//false
// console.log(number);//`1337
// // Later
// leet = '1337';
// // Use as number
// const numbers = +leet;
// console.log(numbers === 1337); // true
// console.log(numbers); // '1337'
// TODO : Module
// true if the input string is a palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
