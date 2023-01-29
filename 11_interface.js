// ! ...interface sentax is interface I {}
var objProduct = {
    id: 101,
    name: "sushant",
    description: "its awesome",
    price: 10000,
    display: function () {
        throw new Error("method");
    }
};
// abstract class ad interface
// interface is an contract between two or more object or class
// abstarct class have abstract method or non abstract method
// example of interface
console.log("----------------------------");
var EXCEL = /** @class */ (function () {
    function EXCEL() {
    }
    EXCEL.prototype.print = function () {
        console.log("excel");
    };
    return EXCEL;
}());
var DOC = /** @class */ (function () {
    function DOC() {
    }
    DOC.prototype.print = function () {
        console.log("DOC");
    };
    return DOC;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log("PDF");
    };
    return PDF;
}());
var objEXCEL = new EXCEL();
objEXCEL.print();
var objPFD = new PDF();
objPFD.print();
