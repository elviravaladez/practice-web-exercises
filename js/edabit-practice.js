"use strict";

//return sum of two numbers
function addition(a, b) {
    return a + b;
}

//convert minutes into seconds
function convert(minutes) {
    return minutes * 60;
}

//return next number from the integer passed
function plusOne(num) {
    return num + 1;
}

//Create a function that takes voltage
// and current and returns the calculated power.
function circuitPower(voltage, current) {
    return voltage * current;
}

//Area of a Triangle
function triArea(base, height) {
    return (base * height) / 2;
}

//Convert Hours into Seconds
function howManySeconds(hours) {
    return hours * 3600;
}

//Write a function that returns the string "something"
// joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return "something" + " " + a;
}


//Create a function that finds the maximum range of a triangle's
// third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}


//Find the Perimeter of a Rectangle:
// Create a function that takes length and width
//  and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
    return (2 * length) + (2 * width);
}


//Return the Remainder from Two Numbers:
//There is a single operator in JavaScript, capable of
// providing the remainder of a division operation.
// Two numbers are passed as parameters.
//The first parameter divided by the second parameter
// will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
    return x % y;
}


//Is the Number Less than or Equal to Zero?

//Create a function that takes a number as its
// only argument and returns true if it's less than
// or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    return num <= 0;
}


//Write a function echo that also returns the passed parameter.
// echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
function echo(input){
    return input;
}

var greta = echo('Greta');
var co2 = echo('CO2');



//Write a function greet having one parameter and returning 'Hello <parameter>!'.
function greet(parameter) {
    return 'Hello ' + parameter + '!';
}

var helloElvira = greet('Elvira');



//Write a function log that logs 'Hello Console!'.
function log() {
    console.log('Hello Console!');
}



//Write a function log, that takes a parameter and logs this parameter.
function log(parameter) {
    console.log(parameter);
}


//Write a function shout that takes a string and returns this
// string duplicated. In addition, the return should be logged.

// Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.
function shout(str) {
    console.log(str + str);
    return str + str;
}


//Write a function length that takes a string and returns the number of characters of the string.
function length(str) {
    return str.length;
}



//Write a function toCase that takes a string and returns
// that string in lowercase and uppercase with - as delimiter.

// Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

function toCase(str) {
    return str.toLowerCase() + "-" + str.toUpperCase();
}



//String: charAt()

/*
NOTE: To get a character from a string at a specified index, use the charAt(index) method:

var char0 = 'Frantz'.charAt(0);
var char1 = 'Frantz'.charAt(1);
var char9 = 'Frantz'.charAt(9);

The first character has the index 0. So char0 has the value 'F' and char1 has the value 'r'.
If the index is larger than the index of the last character, the empty string is returned.
So char9 has the value ''.
 */


//Write a function shortcut that takes two strings and returns the initial letters of theses strings.

// Example: shortcut('Amnesty', 'International') should return 'AI'.

function shortcut(str1, str2) {
    return str1.charAt(0) + str2.charAt(0);
}


//Write a function firstChar, which returns the first character that is not a space when a string is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(name) {
    var trimName = name.trim();
    return trimName.charAt(0);
}


//String: indexOf()

/*
NOTE: To determine the first occurrence of a string within another string, use the indexOf method:

var n1 = 'bit'.indexOf('it');
var n2 = 'bit'.indexOf('js');
var n3 = 'bit'.indexOf('IT');

n1 is 1, because the starting position of 'it' in 'bit' is 1. As usual, counting starts at 0.
indexOf returns -1 if the search string does not occur in the calling string.
Thus n2 is -1. The indexOf method is case sensitive. So n3 is also -1.
 */



//Write a function indexOfIgnoreCase taking two strings and
// determining the first occurrence of the second string in the first string.
// The function should be case insensitive.

// Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.
function indexOfIgnoreCase(str1, str2) {
    var stringOne = str1.toLowerCase();
    var stringTwo = str2.toLowerCase();
    return stringOne.indexOf(stringTwo);
}


//Return the First Element in an Array
function getFirstValue(arr) {
    return arr.shift();
}

//Are the Numbers Equal?
//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    if(num1 === num2) {
        return true;
    } else {
        return false;
    }
}


//Is the String Odd or Even?
//Given a string, return true if its length is even or false if the length is odd.
function oddOrEven(s) {
    if(s.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


//Compare Strings by Count of Characters
//
//Create a function that takes two strings as arguments and return either true or false
// depending on whether the total number of characters in the first string is equal to
// the total number of characters in the second string.
function comp(str1, str2) {
    if(str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}


//Multiple of 100
//Create a function that takes an integer and return true if it's divisible by 100,
// otherwise return false.
function divisible(num) {
    if(num % 100 === 0) {
        return true;
    } else {
        return false;
    }
}


//Drinks Allowed?

//A bartender is writing a simple program to determine whether he should serve drinks to someone.
// He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age, onBreak) {
    if(age >= 18 && onBreak === false) {
        return true;
    } else {
        return false;
    }
}


//Profitable Gamble
//Create a function that takes three arguments prob, prize, pay and returns true
// if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
    if(prob * prize > pay) {
        return true;
    } else {
        return false;
    }
}

//Minimal I: If Boolean Then Boolean

//In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:
//
// Keep your code clean and readable.
// While not violating the first principle: get rid of everything superfluous.


//In order to achieve this you should:
//
// Deepen your knowledge of logics.
// Deepen your understanding of the particular language you're coding with.
// I would also add: observe and learn from the pros. Make a habit of checking the
// Solutions tab after solving a challenge on Edabit.
// There is absolutely nothing wrong in assimilating features of someone else's coding style,
// especially if yours is not yet fully developed.

//YOUR GOAL is to submit a function as minimalist as possible.


//Write a function that returns true if the given integer is even, and false if it's odd.

//TIP: Using an if statement in order to return boolean or to set a variable to a boolean is redundant.
function isEven(n) {
    return n % 2 === 0;
}

//Minimal IV: if-else if-else Inferno

//Write a function that returns the boolean true if the given number is zero,
// the string "positive" if the number is greater than zero or the string "negative"
// if it's smaller than zero.
function equilibrium (x) {
    if (x > 0) {
        return "positive";
    } else if (x < 0) {
        return "negative";
    } else {
        return true;
    }
}


//Minimal II: Boolean Redundancy

//Write a function that returns the string "even" if the given integer is even,
// and the string "odd" if it's odd.
function parity(n) {
    if(n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

//Flip the Boolean

//Create a function that returns the opposite of the given boolean, as a number.

//Due to a programming concept known as truthiness, certain values can be evaluated to
// (i.e. take the place of) booleans. For example, 1 (or any number other than 0)
// is often equivalent to true, and 0 is often equivalent to false.
function flipBool(b) {
    if(b === true || b > 0) {
        return 0;
    } else {
        return 1;
    }
}

//Another way!
function flipBoolTwo(b) {
    return (!b)*1;
}


//Movie Theatre Admittance

//Write a function that checks whether a person can watch an MA15+ rated movie.
// One of the following two conditions is required for admittance:
//
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised) {
    return (age >= 15) || (isSupervised === true);
}


//Using Ternary Operators

//Ternary operators are often more compact than multi-line if statements,
// and are useful for simple conditional tests.

//SYNTAX:
//       condition ? result_if_true : result_if_false;


//Write a function that uses the ternary operator to return "yeah"
// if b is true, and "nope" otherwise.

function yeah_nope(bool) {
    return bool ? "yeah" : "nope";
}

//Is the Last Character an N?

// Create a function that takes a string (a random name). If the last character of
// the name is an "n", return true, otherwise return false.
function isLastCharacterN(word) {
    return word.endsWith("n");
}



//AND, OR, NOT
//You will need to write three unfinished logic gates. Continue to write the
// three logic gates: AND, OR, and NOT.

//Examples:
//AND(1, 1) ➞ 1
// AND(0, 0) ➞ 0
//
// OR(1, 0) ➞ 1
// OR(1, 1) ➞ 1
//
// NOT(0) ➞ 1
// NOT(1) ➞ 0

function NOT(n) {
    if(!n) {
        return 1;
    } else {
        return 0;
    }
}

function AND(a, b) {
    return a && b;
}

function OR(a, b) {
    return a || b;
}


//Find the Bug: Returning the Container

function getContainer(product) {
    let container;
    switch (product) {
        case "Bread":
            container = "bag";
            break;
        case "Beer":
            container = "bottle";
            break;
        case "Milk":
            container = "bottle";
            break;
        case "Cereals":
            container = "box"
            break;
        case "Eggs":
            container = "carton";
            break;
        case "Candy":
            container = "plastic";
            break;
        default:
            container = null;
    }
}


//Is the Number Even or Odd?

//Create a function that takes a number as an argument and returns "even" for
// even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
    if(num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

//Another Solution Using Ternary Operators
function isEvenOrOddTwo(num) {
    return num % 2 === 0 ? "even" : "odd";
}



//Find the Index (Part 1)
//Create a function that finds the index of a given item.
//example:
//search([9, 8, 3], 3) ➞ 2

function search(arr, item) {
    return arr.indexOf(item);
}


//Solution to above with a for loop in the function
// function search(arr, item) {
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i] == item) return i;
//     }
//     return -1;
// }




//Triangle and Parallelogram Area Finder

//Write a function that accepts base (decimal), height
// (decimal) and shape ("triangle", "parallelogram")
// as input and calculates the area of that shape.


//EXAMPLES:
//areaShape(2, 3, "triangle") ➞ 3
//
// areaShape(8, 6, "parallelogram") ➞ 48
//
// areaShape(2.9, 1.3, "parallelogram") ➞ 3.77

//NOTES:
//Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

function areaShape(base, height, shape) {
    if(shape === "triangle") {
        return 0.5 * base * height;
    } else if(shape === "parallelogram") {
        return base * height;
    } else {
        return shape + " is not a valid shape."
    }
}

// console.log(areaShape(3, 6, "cat"));
// console.log(areaShape(3, 6, "triangle"));
// console.log(areaShape(5, 15, "parallelogram"));




//Inches to Feet

//Create a function that accepts a measurement value in inches and
// returns the equivalent of the measurement value in feet.
//If inches are under 12, return 0.

//EXAMPLES:
//inchesToFeet(324) ➞ 27
// inchesToFeet(12) ➞ 1
// inchesToFeet(36) ➞ 3

function inchesToFeet(inches) {
    if(inches < 12) {
        return 0;
    }

    return inches / 12;
}

// console.log(inchesToFeet(360));




//How Much Corn Is There?
//For every km there is five corn. Create a function that takes
// an integer num and return the amount of corn.

//EXAMPLES
//corn(5) ➞ 25
// corn(7) ➞ 35
// corn(8) ➞ 40
function corn(num) {
    return num * 5;
}

// console.log(corn(4));



//Among Us Imposter Formula

//Create a function that calculates the chance of being an imposter.
// The formula for the chances of being an imposter is 100 × (i / p)
// where i is the imposter count and p is the player count.
// Make sure to round the value to the nearest integer and
// return the value as a percentage.

// The player limit is 10 and the imposter count can only go up to 3.

// EXAMPLES:
//imposterFormula(1, 10) ➞ "10%"
// imposterFormula(2, 5) ➞ "40%"
// imposterFormula(1, 8) ➞ "13%"

function imposterFormula(i, p) {
    var percentage = 100 * (i / p);
    return (Math.round(percentage) + "%");
}




//Correct the Mistakes

//Fix the code in the code tab to pass this challenge
// (only syntax errors). Look at the examples below to
// get an idea of what the function should do.

function squared(a) {
    return a * a;
}




//Convert Age to Days

//Create a function that takes the age and return the age in days.

//NOTES:
//Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

//EXAMPLES:
//calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

function calcAge(age) {
    return age * 365;
}




//Frames Per Second

//Create a function that returns the number of frames shown in
// a given number of minutes for a certain FPS.

//EXAMPLES:
//frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

function frames(minutes, fps) {
    return (minutes * fps) * 60;
}




//Luke, I Am Your ...

//Luke Skywalker has family and friends. Help him remind
// them who is who. Given a string with a name, return
// the relation of that person to Luke.

//EXAMPLE:
//relationToLuke("Darth Vader") ➞ "Luke, I am your father."
// relationToLuke("Leia") ➞ "Luke, I am your sister."
// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke(name) {
    if(name === "Darth Vader") {
        return "Luke, I am your father.";
    } else if(name === "Leia") {
        return "Luke, I am your sister.";
    } else if(name === "Han") {
        return "Luke, I am your brother in law.";
    } else if(name === "R2D2") {
        return "Luke, I am your droid.";
    } else {
        return "Luke, I am not related to you"
    }
}



//Return a String as an Integer
//Create a function that takes a string and returns it as an integer.

function stringInt(str) {
    return parseInt(str);
}





//Check if an Integer is Divisible By Five

//Create a function that returns true if an integer is
// evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
    return n % 5 === 0;
}



//Divides Evenly

//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
    return a % b === 0;
}



//Recursion: Length of a String

//Write a function that returns the length of a string. Make your function recursive.

function length(str) {
    return str.length;
}



//Pair Management

//Given two arguments, return an array which contains these two arguments.
//EXAMPLES:
//makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
    var arr = [];
    arr.push(num1);
    arr.push(num2);
    return arr;
}





//Recreating the abs() Function

//NOTES:
//The Math.abs() function returns the absolute value of a number. This means
// that it returns a number's positive value. You can think of it as the
// distance away from zero.

//EXERCISE:
// Create a function that recreates this functionality.

//EXAMPLES:
//absolute(-5) ➞ 5
// absolute(-3.14) ➞ 3.14
// absolute(250) ➞ 250

function absolute(n) {
    if(n < 0) {
        return n * -1;
    }

    return n;
}





//Concatenate First and Last Name into One String

//Given two strings, firstName and lastName, return a single string in the format "last, first".

//EXAMPLES:
// concatName("First", "Last") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"

function concatName(firstName, lastName) {
    return lastName + ", " + firstName;
}




//Hello; Hello World; World

//Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

//EXAMPLE:
//helloWorld(3) ➞ "Hello"
// helloWorld(5) ➞ "World"
// helloWorld(15) ➞ "Hello World"

function helloWorld(num) {
    if(num % 15 === 0) {
        return "Hello World";
    } else if(num % 3 === 0) {
        return "Hello";
    } else if(num % 5 === 0) {
        return "World";
    }
}



//Reverse an Array
//Write a function to reverse an array.
function reverse(arr) {
    return arr.reverse();
}



//The Farm Problem

//In this challenge, a farmer is asking you to tell him how
// many legs can be counted among all his animals.
// The farmer breeds three species:

//chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

//The farmer has counted his animals and he gives you a subtotal
// for each species. You have to implement a function that returns
// the total number of legs of all the animals.

//EXAMPLES:
//animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50
function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}


//Find the Index
//Create a function that takes an array and a string as arguments and return the index of the string.
//EXAMPLES:
//findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex(arr, str) {
    return arr.indexOf(str);
}



//Solve the Equation
//Create a function that takes an equation (e.g. "1+1"), and returns the answer.
//EXAMPLES:
//equation("1+1") ➞ 2
// equation("7*4-2") ➞ 26
// equation("1+1+1+1+1") ➞ 5
function equation(s) {
    return eval(s);
}




//Upvotes vs Downvotes
//Given an object containing counts of both upvotes and downvotes,
// return what vote count should be displayed. This is calculated
// by subtracting the number of downvotes from upvotes.
//EXAMPLES:
//getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}



//Return the Last Element in an Array
//Create a function that accepts an array and returns the last item in the array.
//EXAMPLES:
//getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true
function getLastItem(arr) {
    return arr.pop();
}




//Recreating the String.length Property
//Create a function which returns the length of a string, WITHOUT using String.length property.

function length(s) {
    var total = 0;
    for(var indexPoint = 0; s.charAt(indexPoint) !== "" ; indexPoint++) {
        total++;
    }
    return total;
}








//Volume of a Box

//Create a function that takes an object argument sizes
// (contains width, length, height keys) and returns the
// volume of the box.

//EXAMPLES:
//volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

function volumeOfBox(sizes) {
    return sizes.width * sizes.height * sizes.length;
}












//Extract City Facts
//Create a function that takes an object as an argument and returns
//a string with facts about the city. The city facts will need
// to be extracted from the object's three properties:
//name
// population
// continent
//The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).


//EXAMPLES:
//cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//
// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

function cityFacts(city) {
    return city.name  + " has a population of " + city.population + " and is situated in " + city.continent;
}


//Return array turned to array with NO spaces
function arrayToString(arr) {
    return arr.join("");
}


//Does the Object Contain a Given Key?
//Write a function that returns true if a hash contains the specified key, and false otherwise.
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
}

//Another Solution
function hasKey(obj, key) {
    return key in obj;
}



//Check if Number is within a Given Range
//Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).
function isInRange(num, range) {
    return ((num >= range.min) && (num <= range.max )) ;
}



//Is the Object Empty?
//Write a function that returns true if an object is empty, and false otherwise.
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


//Is the String Empty?
//Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    return s === "";
}


//Sum of the Odd Numbers

//Create a function which returns the total of all odd numbers
// up to and including n. n will be given as an odd number.
function addOddToN(n) {
    var odd = 0;
    for(var i = 0; i <= n; i++) {
        if(i % 2 === 1) {
            odd = odd + i;
        }
    }
    return odd;
}


