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