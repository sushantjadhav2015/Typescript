// ! ...interface sentax is interface I {}

interface IProduct {
    id: number;
    name: string;
    description:string;
    price:number;
    display():number // only declaration

}

var objProduct : IProduct ={
    id:101,
    name:"sushant",
    description: "its awesome",
    price:10000,
    display():number{
        throw new Error("method");
        
    }
}


// abstract class ad interface

// interface is an contract between two or more object or class
// abstarct class have abstract method or non abstract method


// example of interface

console.log(`----------------------------`);


interface IPrint{
    print():void;
}

class EXCEL implements IPrint {
    print(): void {
        console.log("excel");
        
    }
}

class DOC implements IPrint{
    print(): void {
        console.log("DOC");
        
    }
}

class PDF implements IPrint{
    print(): void {
        console.log("PDF");
        
    }
}

let objEXCEL = new  EXCEL();
objEXCEL.print()

let objPFD = new PDF();
objPFD.print()