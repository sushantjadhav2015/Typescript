interface IComman {
  price: number;
  getTotalSeats: number;
  color: string;
}

interface ICarExtraFacility {
  wheel: number;
  checkAc: boolean;
  callFacility: boolean;
  GPSFacility: string;
}

interface ICar extends IComman, ICarExtraFacility {
  make: string;
}

// for toyota car
var myCarA: ICar = {
  make: "Toyota",
  price: 1000000,
  getTotalSeats: 5,
  color: "white",
  wheel: 4,
  checkAc: true,
  callFacility: false,
  GPSFacility: "GPS is not supported",
};
console.log(`In Toyota car`, myCarA.GPSFacility);

var myCarB: ICar = {
  make: "Hyundai",
  price: 900000,
  getTotalSeats: 7,
  color: "Black",
  wheel: 4,
  checkAc: true,
  callFacility: true,
  GPSFacility: "GPS is supported",
};
console.log(`In Hyundai car`, myCarB.GPSFacility);
