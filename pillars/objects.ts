const car: {type : string, model: string, year: number} = {
  type: "Ferrari",
  model: "Puro sangue",
  year: 2005
};


const newCar = {
  type: "Toyota"
};

newCar.type = "Ford"; 
console.log(newCar)

// car.type = 2; Error: Type 'number' is not assignable to type 'string'

// ? --> is opcional 
const otherCar: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
otherCar.mileage = 2000
console.log(otherCar)
