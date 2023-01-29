interface IExterior {
  color: string;
  numOfDoor: number;
}

interface IInterior {
  seats: number;
  powerTransmissionAuto: boolean;
  musicSystem: boolean;
}

interface ICar extends IExterior, IInterior {
  make: string;
  model: string;
  year: number;
}

var myCar: ICar = {
  make: "TATA",
  model: "Altose",
  year: 2020,
  color: "black",
  numOfDoor: 4,
  seats: 5,
  powerTransmissionAuto: false,
  musicSystem: false,
};

console.log(myCar.year);
