// Block Scope
{ { { } } }
for (var i = 0; i <= 10; i++) { }
console.log(i)

for (let x = 0; x <= 10; x++) { }
console.log(x) // it will throw error as let prevents  block scope fault.

// Function scope doesn't let access outside its body


// Scalar values - immutable
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects - the position where its pointed is immutable but the values are mutable. 
const numbers = [2, 4, 6];
const person = {
    firstName: 'John',
    lastName: 'Doe',
};