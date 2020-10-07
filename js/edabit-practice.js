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
