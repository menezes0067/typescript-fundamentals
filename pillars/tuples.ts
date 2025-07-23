// Tuples is a typed array

// define our Tuple
let ourTuple: [string, number, boolean] // pre-defined types in tuple
ourTuple = ["Hello world!", 5, false]
// ourTuple = ["Hello world!", false, 5] <-- Error

// new value
ourTuple.push("new word!")
console.log(ourTuple)

// readonly tuples 
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
console.log(ourReadonlyTuple)

// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
