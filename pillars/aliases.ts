// Type aliases defined custom name
type CarYear = number
type CarType = string
type CarModel = string

type car = {
   year : CarYear,
   type : CarType,
   model : CarModel
}

// Alliases in TS
const CarYear: CarYear = 2001
const CarType: CarType = "Toyota"
const CarModel: CarModel = "Corolla"

// console.log(type)
console.log(CarType)
console.log(CarModel)
console.log(CarYear)
