//PRIMITIVE TYPES
//Creating a copy of the value
//numbers, strings, booleans

const number = 1;
const num2 = number;

console.log(num2); //1

//REFERENCE TYPES
//Objects and Arrays are REFERENCE TYPES
const person = {
    name: 'Jane'
};

const secondPerson = person;
console.log(secondPerson);
//[object Object] {
// name: "Jane"
// }

// secondPerson prints the same value BUT does not make a copy
// The "person" object is stored in memory and the const "person" is stored as a pointer to that place in memory
// so, when we assign "person" to the const "secondPerson," the pointer will be copied

person.name = 'John';
console.log(secondPerson);
//[object Object] {
// name: "John"
// }


//COPY AN OBJECT IN AN IMMUTABLE WAY
const thePerson = {
    name: 'Jane'
};

//spread operator (copies the properties and not the entire object
const theSecondPerson = {
    ...person
};

thePerson.name = 'John';
console.log(secondPerson);
//const thePerson = {
//     name: 'Jane'
// };


//ARRAY FUNCTIONS
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]