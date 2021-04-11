//Classes, Properties, Methods

//Initializing properties and methods

//ES6
// Properties
constructor() {
    this.myProperty = 'value';
}

//Methods (like functions attached to classes/object)
myMethod() {
    //code here
}


//ES7
// Properties
myProperty = 'value';

//Methods (like functions attached to classes/object)
myMethodES7 = () => {
    //code here
}


class Human {
    gender = 'female';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
        name = 'Elvira';
        gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const elvira = new Person()
elvira.printMyName();
elvira.printGender();


//SPREAD & REST OPERATORS IS ...

//SPREAD-Used to split up array elements OR object properties

//Ex:
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 }; //pulls out all properties of oldObject to be in newObject (our newProp takes precedence)

//Array Example
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

//Object Example
const aPerson = {
    firstName: 'Elvira'
};

const newPerson = {
    ...aPerson,
    lastName: 'Valadez'
}

console.log(newPerson);
// {
// firstname: 'Elvira',
//     lastName: 'Valadez'
// }


//REST-Used to merge a list of function arguments into an array
//Used in a function

//Ex:
function sortArgs(...args) {
    return args.sort();
}

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)); //[1]


//DESTRUCTURING
//Extract array elements or object properties and store them in variables

//ARRAY DESTRUCTURING
[a, b] = ['Hello', 'Elvira'];
console.log(a); //Hello
console.log(b); //Elvira


const nums = [1, 2, 3];
//Get the numbers one and two
[num1, num2] = nums;
console.log(num1, num2);
//1
//2

//Get numbers 1 and 3
[num1, ,num3] = nums;
console.log(num1, num3);
//1
//3


// OBJECT DESTRUCTURING
{name} = {name: 'Elvira', city: 'San Antonio'};
console.log(name); //Elvira
console.log(city); // undefined b/c we're not pulling this info out on line 104