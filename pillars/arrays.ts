// array type string declaration
const names: string[] = [];
names.push("Testing")
console.log(names)

// readonly
const fruits: readonly string[] = ["Orange"];
console.log(fruits)

// readonly.push("Second name in array") <-- Error, immutable array 

// type inference
const numbers = [1, 2, 3]; // inferenge type number
numbers.push(4) // no error

// numbers.push("2") // --> Error : argument type "string"

// head == numbers[0] --> 1 
let head: number = numbers[0];
console.log(head)
