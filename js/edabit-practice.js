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


//Convert Hours and Minutes into Seconds

//Write a function that takes two integers (hours, minutes),
// converts them to seconds, and adds them.
//EXAMPLES
//convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0

function convert(hours, minutes) {
    return ((hours * 3600) + (minutes * 60));
}



//Find the Smallest and Biggest Numbers

//Create a function that takes an array of numbers and
// return both the minimum and maximum numbers, in that order.

//EXAMPLES
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
function minMax(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var newArr = [];
    newArr.push(min);
    newArr.push(max);
    return newArr;
}



//Burglary Series (19): Prevent Changes

//The police sends you an electronic statement for you to sign.
// As you begin to sign, an error pops up. Apparently, they
// sent you a protected document.
//
// This challenge is a bit different as the function you are
// given already contains some code that you should not change
// or remove. Also, don't do a return statement, it is already
// included. Your task is, given an object, prevent changes to that object.

//EXAMPLES

//const obj = { noChanges: true }
// preventChanges(obj) {
//   // Write your code here, don't use a return statement
//   obj.noChanges = false;
//   obj.signature = "whatever"
//   return obj;
// }  ➞ { noChanges: true }
const obj = { noChanges: true }

preventChanges(obj) {
    // Write your code here, don't use a return statement

    obj.noChanges = false;
    obj.signature = "whatever"
    return obj;

}  ➞ { noChanges: true }




//Sort by String Length

//Create a function that returns an array of strings sorted by length in ascending order.

//EXAMPLES
//sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []
function sortByLength(arr) {
    if(arr.length === 0) {
        return arr = [];
    }
    return arr.sort(function(a, b) {
        return a.length - b.length;
    });
}


//Buggy Code
//The challenge is to try and fix this buggy code,
// given the inputs true and false. See the examples
// below for the expected output.

//EXAMPLES:
//has_bugs(true) ➞ "sad days"
// has_bugs(false) ➞ "it's a good day"
function has_bugs(buggy_code) {
    if(buggy_code === true) {
        return "sad days";
    }
    return "it's a good day";
}



//Add up the Numbers from a Single Number

//Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed
// to the function. For example, if the input is 4 then
// your function should return 10 because 1 + 2 + 3 + 4 = 10.

//EXAMPLES:
//addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300
function addUp(num) {
    var total = 0;
    for(var i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}



//Adding Functions
function add2(x) {
    return x + 2;
}

function add3(x) {
    return x + 3;
}

function add5(x) {
    return x + 5;
}

function add7(x) {
    return x + 7;
}

function add11(x) {
    return x + 11;
}




//Convert a Number to Base-2
//Create a function that returns a base-2 (binary) representation
// of a base-10 (decimal) string number. To convert is simple: ((2)
// means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
//
// Going from right to left, the value of the most right bit is
// 1, now from that every bit to the left will be x2 the value,
// value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

//EXAMPLES
//binary(1) ➞ "1"
// // 1*1 = 1
// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5
// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10
function binary(decimal) {
    return decimal.toString(2);
}


//NOTES:
// The Number object overrides the toString() method of the Object object.
// (It does not inherit Object.prototype.toString()). For Number
// objects, the toString() method returns a string representation
// of the object in the specified radix.

// The toString() method parses its first argument, and
// attempts to return a string representation in the specified radix (base).

//OUTCOMES FROM TEST
// Test.assertEquals(binary(100), "1100100")
// Test.assertEquals(binary(1), "1")
// Test.assertEquals(binary(0), "0")
// Test.assertEquals(binary(69), "1000101")
// Test.assertEquals(binary(1023), "1111111111")
// Test.assertEquals(binary(511), "111111111")
// Test.assertEquals(binary(666), "1010011010")
// Test.assertEquals(binary(123), "1111011")


//Test Passed: Value == '1100100'
// Test Passed: Value == '1'
// Test Passed: Value == '0'
// Test Passed: Value == '1000101'
// Test Passed: Value == '1111111111'
// Test Passed: Value == '111111111'
// Test Passed: Value == '1010011010'
// Test Passed: Value == '1111011'






//Concatenating Two Integer Arrays
//Create a function to concatenate two integer arrays.
//EXAMPLE:
//concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}


//Evaluate an Equation
//Create a function that evaluates an equation.

//EXAMPLES
///eq("1+2") ➞ 3
// eq("6/(9-7)") ➞ 3
// eq("3+2-4") ➞ 1
function eq(evaluate) {
    return eval(evaluate);
}


//Stack the Boxes
//Write a function that takes a number n and returns the number
// of stacked boxes in a model n levels high, visible and invisible.
//EXAMPLES:
//stackBoxes(1) ➞ 1
// stackBoxes(2) ➞ 4
// stackBoxes(0) ➞ 0
function stackBoxes(n) {
    return Math.pow(n, 2);
}




//Word Numbers!
//Create a function that returns a number, based on the string provided.
//All numbers will be 1 digit and they will always exist, also all numbers
// will be in ℕ ℕo(don't have decimal places, and they are positive, including 0).

//EXAMPLES
//word("one") ➞ 1
// word("two") ➞ 2
// word("nine") ➞ 9

function word(s) {
    switch(s) {
        case "zero":
            return 0;
            break;
        case "one":
            return 1;
            break;
        case "two":
            return 2;
            break;
        case "three":
            return 3;
            break;
        case "four":
            return 4;
            break;
        case "five":
            return 5;
            break;
        case "six":
            return 6;
            break;
        case "seven":
            return 7;
            break;
        case "eight":
            return 8;
            break;
        case "nine":
            return 9;
            break;
        default:
            return "Not a valid number";
    }
}


//Refactored word function
function word(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words.indexOf(s)
}


//Add a Consecutive List of Numbers

//Write a function that takes the last number of a consecutive list of
// numbers and returns the total of all numbers up to and including it.



//EXAMPLES

//addUpTo(3) ➞ 6
// // 1 + 2 + 3 = 6

// addUpTo(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55

// addUpTo(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28
function addUpTo(n) {
    total = 0;
    for(var i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}




//Word without First Character
//Create a function that takes a word and returns the new word without including the first character.
//EXAMPLES
//newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"
function newWord(str) {
    return str.substring(1);
}



//Summing the Squares
///Create a function that takes a number n and returns the sum of all square numbers up to and including n.

//EXAMPLES
//squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14



//squaresSum(3) ➞ 14
// squaresSum(12) ➞ 650
// squaresSum(13) ➞ 819

function squaresSum(n) {
    var total = 0;
    for(var numBeforeN = 0; numBeforeN <= n; numBeforeN++) {
        total = total + numBeforeN * numBeforeN;
    }
    return total;
}


//refactored squareSum function
function squaresSum(n) {
    var total=0;
    for(var i = 1;i <= n;i++) {
        total += Math.pow(i,2);
    }
    return total;
}





//Repeat the Same Item Multiple Times
//Create a function that takes two arguments (item, times). The
// first argument (item) is the item that needs repeating while the second
// argument (times) is the number of times the item is to be repeated.
// Return the result in an array.

//EXAMPLES
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
// repeat("7", 2) ➞ ["7", "7"]
// repeat(0, 0) ➞ []

function repeat(item, times) {
    var arr = [];
    for (var i = 0; i < times; i++) {
        arr.push(item);
    }
    return arr;
}



//Fix the Error: Check Whether a Given Number Is Odd
//Éowyn has written the function isOdd() to check if a given number
// is odd or not. Unfortunately, the function does not return the
// correct result for all the inputs. Help her fix the error.
//function isOdd(num){
//   ret n % 19 += 123;
// }

//EXAMPLES
//isOdd(-5) ➞ true
// isOdd(25) ➞ true
// isOdd(0) ➞ false

function isOdd(num) {
    return num % 2 === 1 || num % 2 === -1;
}


//Find the Index (Part #2)
//Create a function that searches for the index of a given
// item in an array. If the item is present, it should return
// the index, otherwise, it should return -1.


//EXAMPLES:

//search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1
function search(arr, item) {
    return arr.indexOf(item);
}


//Check String for Spaces
//Create a function that returns true if a string contains any spaces.
//An empty string does not contain any spaces.

//EXAMPLES

//hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true
// hasSpaces(" ") ➞ true
// hasSpaces("") ➞ false
// hasSpaces(",./!@#") ➞ false
function hasSpaces(str) {
    return str.includes(" ");
}

//Number of Stickers
//Given a Rubik's Cube with a side length of n, return the number of
// individual stickers that are needed to cover the whole cube.
//Keep in mind there are 6 faces to keep track of.

//The Rubik's cube of side length 1 has 6 stickers.
// The Rubik's cube of side length 2 has 24 stickers.
// The Rubik's cube of side length 3 has 54 stickers.

//EXAMPLES
//howManyStickers(1) ➞ 6
// howManyStickers(2) ➞ 24
// howManyStickers(3) ➞ 54
function howManyStickers(n) {
    return Math.pow(n, 2) * 6;
}


//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.

//EXAMPLES
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
function tuckIn(arr1, arr2) {
    var lastNum = arr1.pop();
    var concat = arr1.concat(arr2);
    concat.push(lastNum);
    return concat;
}




//Stack the Boxes
// Write a function that takes a number n and returns the number of stacked boxes
// in a model n levels high, visible and invisible.


//EXAMPLES
//stackBoxes(1) ➞ 1
// stackBoxes(2) ➞ 4
// stackBoxes(0) ➞ 0

function stackBoxes(n) {
    return Math.pow(n, 2);
}





//How Many Beans Has Joker Persona 5 Eaten?
//Beans make Joker Persona 5 fart a lot. You can determine how hard he farts by
// how many beans he has eaten. The strength of the fart is equal to twice the
// square of the bean count plus 5 times the bean count, plus 3.

//EXAMPLES
//fart(3) ➞ 36
// fart(0) ➞ 3
// fart(6) ➞ 105

function fart(beans) {
    return Math.pow(beans, 2) * 2 + (beans * 5) + 3;
}


//Count the Arguments
//Create a function that returns the number of arguments it was called with.
//EXAMPLES:
//numArgs() ➞ 0
// numArgs("foo") ➞ 1
// numArgs("foo", "bar") ➞ 2
// numArgs(true, false) ➞ 2
// numArgs({}) ➞ 1
function numArgs() {
    return arguments.length;
}





//Kinetic Energy
//Return the Kinetic Energy in Joules, given the mass and velocity.
// For the purposes of this challenge, round answers to the nearest integer.


//m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J

// KE = 1/2mv^2

//EXAMPLES
//kineticEnergy(60, 3) ➞ 270
// kineticEnergy(45, 10) ➞ 2250
// kineticEnergy(63.5, 7.35) ➞ 1715

function kineticEnergy(m, v) {
    return Math.round(((1 / 2) * m * Math.pow(v, 2)));
}







//Four Passengers and a Driver
//A typical car can hold four passengers and one driver,
// allowing five people to travel around. Given n
// number of people, return how many
// cars are needed to seat everyone comfortably.

//EXAMPLES
//carsNeeded(5) ➞ 1
// carsNeeded(11) ➞ 3
// carsNeeded(0) ➞ 0

function carsNeeded(n) {
    return Math.ceil(n / 5);
}




//Is the Word Singular or Plural?
//Create a function that takes in a word and determines
// whether or not it is plural. A plural word is one
// that ends in "s".


//EXAMPLES
//isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false

//NOTES:
//This is an oversimplification of the English language. We are
// ignoring edge cases like "goose" and "geese", "fungus"
// and "fungi", etc.
function isPlural(word) {
    return word.endsWith('s');
}



//On/Off Switches
//Create a function that returns how many possible
// outcomes can come from a certain number of switches (on / off).
//All numbers will be whole and positive.

//EXAMPLES:
//posCom(1) ➞ 2
// posCom(3) ➞ 8
// posCom(10) ➞ 1024
function posCom(num) {
    return Math.pow(2, num);
}



//Return the Total Number of Parameters
//Create a function that returns the total number of
// parameters passed in.

//EXAMPLES
//numberArgs("a", "b", "c") ➞ 3
// numberArgs(10, 20, 30, 40, 50) ➞ 5
// numberArgs(x, y) ➞ 2
// numberArgs() ➞ 0
function numberArgs(arg) {
    return arguments.length;
}


//Similar Bread
//Given two arrays, which represent two sandwiches, return whether
// both sandwiches use the same type of bread. The bread will
// always be found at the start and end of the array.

//The arrays will always be three elements long.

//The first piece of bread on one sandwich must be the same as
// the first piece of bread on the other sandwich. The same goes
// for the last piece of bread.

//EXAMPLES:
//hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true
//
// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false
//
// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false
function hasSameBread(arr1, arr2) {
    var firstArr1 = arr1.shift();
    var lastArr1 = arr1.pop();
    var firstArr2 = arr2.shift();
    var lastArr2 = arr2.pop();
    if(firstArr1 === firstArr2 && lastArr1 === lastArr2) {
        return true;
    }
    return false;
}

//Refactored hasSameBread function
function hasSameBread(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[2] === arr2[2];
}




//Minimal VI: Ternary Operator
//Write a function that returns the strings:


// "both" if both given booleans a and b are true.
// "first" if only a is true.
// "second" if only b is true .
// "neither" if both a and b are false.
function areTrue(a, b) {
    return (a == true && b == true) ? "both"
        : a == true ? "first"
            : b == true ? "second"
                : "neither";
}

//Refactored Code
function areTrue(a, b) {
    return a && b ? 'both'
        : a ? 'first'
            : b ? 'second'
                : 'neither'
}


//Slice of Pie
//Create a function that determines whether or not it's
// possible to split a pie fairly given these three parameters:

//1.Total number of slices.
//2.Number of recipients.
//3.How many slices each person gets.

//The function will be in this form:
///equalSlices(total slices, no. recipients, slices each)




//EXAMPLES
//equalSlices(11, 5, 2) ➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices
//
// equalSlices(11, 5, 3) ➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices
//
// equalSlices(8, 3, 2) ➞ true
//
// equalSlices(8, 3, 3) ➞ false
//
// equalSlices(24, 12, 2) ➞ true

function equalSlices(total, people, each) {
    return people * each <= total;
}



//Squares and Cubes
//Create a function that takes an array of two numbers and
// checks if the square root of the first number is equal
// to the cube root of the second number.

//EXAMPLES
//heckSquareAndCube([4, 8]) ➞ true
// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true
function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}

//Concatenating First and Last Character of a String
//Creates a function that takes a string and returns the
// concatenated first and last character.
//EXAMPLES
//firstLast("ganesh") ➞ "gh"
// firstLast("kali") ➞ "ki"
// firstLast("shiva") ➞ "sa"
// firstLast("vishnu") ➞ "vu"
// firstLast("durga") ➞ "da"
function firstLast(name) {
    return name.charAt(0) + name.charAt(name.length - 1);
}


//Count the Syllables
//Create a function that returns the number of syllables in a
// simple string. The string is made up of short repeated words
// like "Lalalalalalala" (which would have 7 syllables).

//For simplicity, please note that each syllable will consist
// of two letters only.

//EXAMPLES
//countSyllables("Hehehehehehe") ➞ 6
// countSyllables("bobobobobobobobo") ➞ 8
// countSyllables("NANANA") ➞ 3

function countSyllables(str) {
    var vowels = /[aeiou]/gi;
    var vowelMatch = str.match(vowels);
    return vowelMatch.length;
}


//Refactored code
function countSyllables(str) {
    return str.length/2;
}



//Name Greeting!
//Create a function that takes a name and returns a greeting in
// the form of a string. Don't use a normal function,
// use an arrow function.

//EXAMPLES
// helloName("Gerald") ➞ "Hello Gerald!"
// helloName("Tiffany") ➞ "Hello Tiffany!"
// helloName("Ed") ➞ "Hello Ed!"

const helloName = name => "Hello " + name + "!";


//Another solution
const helloName = name => `Hello ${name}!`;







//Check if an Array Contains a Given Number
//Write a function to check if an array contains a
// particular number.

//EXAMPLES
//check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false
function check(arr, el) {
    return arr.includes(el);
}





//Nth Star Number
//Create a function that takes a positive integer and returns
// the nth "star number".

// A star number is a centered figurate number a centered
// hexagram (six-pointed star), such as the one that
// Chinese checkers is played on.

//EXAMPLES
//starNumber(2) ➞ 13
// starNumber(3) ➞ 37
// starNumber(5) ➞ 121


function starNumber(n) {
    return (6 * n * (n - 1) + 1); ;
}




//Does a Number Exist?
//Create a function which validates whether a given number
// exists, and could represent a real life quantity.
// Inputs will be given as a string.

//EXAMPLES
//validStrNumber("3.2") ➞ true
// validStrNumber("324") ➞ true
// validStrNumber("54..4") ➞ false
// validStrNumber("number") ➞ false

function validStrNumber(n) {
    return !isNaN(n);
}





//Format I: Template String
//Write a template string according to the following example:

//EXAMPLES
//const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

//Tips
//A template string is a string that uses Dollar sign and
// curly braces inside a backticks ${} as a placeholder
// that can then be formatted:

//const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."



//You can put an expression inside the curly braces :

//const age = 12;
// `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."

// modify the template variable to be a template string
function format(a, b, c) {
// the result string must give: "Their names were: a, b and c."
    const template = `Their names were: ${a}, ${b} and ${c}.`
    return template;
}