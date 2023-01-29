// for toyota car
var myCarA = {
    make: "Toyota",
    price: 1000000,
    getTotalSeats: 5,
    color: "white",
    wheel: 4,
    checkAc: true,
    callFacility: false,
    GPSFacility: "GPS is not supported"
};
console.log("In Toyota car", myCarA.GPSFacility);
var myCarB = {
    make: "Hyundai",
    price: 900000,
    getTotalSeats: 7,
    color: "Black",
    wheel: 4,
    checkAc: true,
    callFacility: true,
    GPSFacility: "GPS is supported"
};
console.log("In Hyundai car", myCarB.GPSFacility);
