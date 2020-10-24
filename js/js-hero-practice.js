"use strict";
console.log("JS Hero Practice Exercises");






/***** VARIABLES ********/

//Declare a variable firstname and initialize it with the value 'Lata'.

var firstname = 'Lata';
console.log(firstname);


//Declare a variable flower and assign it the value 'rose'. Declare a
// second variable tree and assign it the value 'maple'.

var flower = 'rose';
console.log(flower);

var tree = 'maple';
console.log(tree);






/****** FUNCTIONS ******/

//Define a function hello that returns 'Hello world!'.

function hello() {
    return 'Hello world!';
}

console.log(hello('Hello world!'));


//Multiple Functions:
//Define two functions. The first function a should return 'Hello a!'
// and the second function b should return 'Hello b!'.

function a() {
    return 'Hello a!';
}
console.log(a());


function b() {
    return 'Hello b!';
}
console.log(b());

//Function calls:
//1. Define a function greet returning the value 'Haydo!'.
// 2. Declare a variable salutation. Call the function greet
//    and assign the result of the call to the variable salutation.

function greet() {
    return 'Haydo!';
}

var salutation = greet();








/********* PARAMETERS **********/

//Write a function echo that also returns the passed parameter. echo('Greta')
// should return 'Greta' and echo('CO2') should return 'CO2'

function echo(input){
    return input;
}

console.log(echo('Greta'));
console.log(echo('CO2'));






/****** STRINGS ******/

//Write a function greet having one parameter and returning 'Hello <parameter>!'.
//Example: greet('Ada') should return 'Hello Ada!' and greet('Grace')
// should return 'Hello Grace!'.

function greet(input){
    return 'Hello ' + input + '!';
}


console.log(greet('Ada'));








/******* LOGGING ******/

//Write a function log that logs 'Hello Console!'. If you are working with
// a desktop browser, open the developer tools to see the output there as well.

function log() {
    console.log('Hello Console!');
}


//Write a function log, that takes a parameter and logs this parameter.
//
// Example: log('Ken Thompson') should log 'Ken Thompson'.

function log(input) {
    console.log(input);
}

log('Ken Thompson');


//Write a function shout that takes a string and returns this string
// duplicated. In addition, the return should be logged.
//
// Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.

function shout(str) {
    console.log(str + str);
    return str + str;
}

console.log(shout('Fire'));








/**** String: length ********/

//Write a function length that takes a string and returns the number of characters of the string.
//
// Example: length('sun') should return 3.

function length(str) {
    return str.length;
}

console.log(length('sun'));







/***** String: toUpperCase() ******/

//Write a function toCase that takes a string and returns that string in
// lowercase and uppercase with - as delimiter.
//
// Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

function toCase(str) {
    return str.toLowerCase() + "-" + str.toUpperCase();
}

console.log(toCase('Mthatha'));







/******* String: charAt() *******/

//Write a function shortcut that takes two strings and returns
// the initial letters of theses strings.
//
// Example: shortcut('Amnesty', 'International') should return 'AI'.

function shortcut(str1, str2) {
    return str1.charAt(0) + str2.charAt(0);
}

console.log(shortcut('Amnesty', 'International'));






/******* String: trim() ********/

//Write a function firstChar, which returns the first character
// that is not a space when a string is passed.
//
// Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(input) {
    var name = input.trim();
    return name.charAt(0);
}

console.log(firstChar(' Rosa Parks '));






/******* String: indexOf() *******/

//Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of
// the second string in the first string. The function should be case insensitive.
//
// Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

function indexOfIgnoreCase(str1, str2) {
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
    return str1.indexOf(str2);
}

console.log(indexOfIgnoreCase('bit', 'it'));






/***** String: indexOf() with from index *******/

//Write a function secondIndexOf, taking two strings and determining the second
// occurrence of the second string in the first string. If the search
// string does not occur twice, -1 should be returned.
//
// Example: secondIndexOf('White Rabbit', 'it') should return 10.

function secondIndexOf(str1, str2) {
    var firstIndex = str1.indexOf(str2);
    return str1.indexOf(str2, firstIndex + 1);
}

console.log(secondIndexOf("White Rabbit", "it"));







/******* String: substr() OR substring() ******/

//EXPLANATION:
//The substr method extracts a substring from a string:
//let see = 'see and stop'.substr(0, 3);
// let and = 'see and stop'.substr(4, 3);
// let stop = 'see and stop'.substr(8);

//NOTES:
//The first parameter specifies the position at which to start extracting.
// The second parameter specifies the number of characters to extract.
// If the second parameter is not set, all the characters from start
// position to the end of the string are extracted.


//Exercise:
// Write a function firstWord, taking a string and returning the first word
// in that string. The first word are all characters up to the first space.

//Example: firstWord('see and stop') should return 'see'.

function firstWord(str) {
    return str.substring(0, str.indexOf(' '));
}

console.log(firstWord("Hola amigo!"));







/******* String: replace() ******/

//NOTES:
//The replace method replaces a substring with another:

//var str = 'JavaScript';
// var newstr = str.replace('Java', 'ECMA');


//'Java' is replaced with 'ECMA'.
// Thus newstr has the value 'ECMAScript'.
// The original string remains unchanged.

// Only the first occurrence is replaced:

//var newstr = 'Dada'.replace('a', 'i');

//newstr has the value 'Dida' and not 'Didi'.


//Exercise:
//Write a function normalize, that replaces '-' with '/' in a date string.
//
// Example: normalize('20-05-2017') should return '20/05/2017'.

function normalize(str) {
    var newStr = str.replace('-', '/');
    return newStr.replace('-', '/');
}

console.log(normalize('20-05-2017'));









/****** NUMBERS ******/

//Write a function add that takes two numbers and returns their sum.
// Example: add(1, 2) should return 3.

function add(num1,num2) {
    return num1 + num2;
}

console.log(add(1, 2));










/******* FAHRENHEIT *******/

//Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.
//Example: toFahrenheit(0) should return 32.

function toFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}










/******* MODULO *******/

//Write a function onesDigit that takes a natural number and returns the ones digit of that number.
// Example: onesDigit(2674) should return 4.

function onesDigit(num) {
    return num % 10;
}









/***** PARENTHESES *******/

//Write a function mean that takes 2 numbers and returns their mean value.
// Example: mean(1, 2) should return 1.5.

function mean(num1, num2) {
    return (num1 + num2) / 2;
}









/********* MATH ********/

//Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle.
// The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean
// theorem is valid. If a and b are the lengths of the two legs and c is the length of the
// hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies,
// hypotenuse(3, 4) should return 5.

function hypotenuse(leg1, leg2){
    return Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));
}








/******* MIN AND MAX ******/

//Write a function midrange, that calculates the midrange of 3 numbers.
// The midrange is the mean of the smallest and largest number.
// Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

function midrange(num1, num2, num3) {
    var theMin = Math.min(num1, num2, num3);
    var theMax = Math.max(num1, num2, num3);
    return (theMin + theMax) / 2;
}








/******** Math.PI ********/

//Write a function area that calculates the area of a circle.
// The function is given the radius of the circle.
// Example: area(1) should return π and area(2) should return 4 * π.

function area(radius) {
    return Math.PI * Math.pow(radius, 2);
}










/******** ROUNDING *********/

//Write a function round100 that rounds a number to the nearest hundred.
// Example: round100(1749) should return 1700 and round100(856.12) should return 900.

function round100(num) {
    return Math.round(num / 100) * 100;
}









/******* RANDOM NUMBERS *********/

//Write a function dice that returns like a dice a random number between 1 and 6.

function dice() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}










/******* parseInt *******/

//Write a function add that takes a string with a summation task and returns
// its result as a number. Two natural numbers should be added.
// The summation task is a string of the form '102+17'.

// Example: add('102+17') should return 119.

function add(str) {
    var plusSign = str.indexOf("+");
    var num1 = parseInt(str);
    var num2 = parseInt(str.substring(plusSign));
    return num1 + num2;
}










/******* BOOLEAN ********/

//Write a function nand that takes two Boolean values. If both values are true,
// the result should be false. In the other cases the return should be true.
// I.e.: The call nand(true, true) should return false. The calls nand(true, false),
// nand(false, true) and nand(false, false) should return true.

function nand(value1, value2) {
    return !(value1 && value2);
}




//Write a function nor that takes two Boolean values. If both values are false,
// the result should be true. In the other cases the return should be false.
// I.e.: The call nor(false, false) should return true. The calls nor(true, false),
// nor(false, true) and nor(true, true) should return false.

function nor(value1, value2) {
    return !(value1 || value2);
}



//Write a function xor that takes two Boolean values. If both values are different,
// the result should be true. If both values are the same, the result should be false.
// I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls
// xor(true, true) and xor(false, false) should return false.

function xor(value1, value2) {
    return !value1 === value2;
}












/********** STRICT EQUALITY *********/

//Write a function equals that checks two values for strict equality.
// Example: equals(1, 1) should return true and equals(1, 2) should return false.

function equals(value1, value2) {
    return value1 === value2;
}



//Write a function equals that checks 3 values for strict equality.
// The function should only return true if all 3 values are equal.
// Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.

function equals(value1, value2, value3) {
    return value1 === value2 && value1 === value3;
}











/********* EVEN NUMBERS *********/

//Write a function isEven that checks if a passed number is even.
// If the given number is even, true should be returned, otherwise false.

// Example: isEven(2) should return true and isEven(3) should return false.

function isEven(num) {
    return num % 2 === 0;
}











/******* STRICT INEQUALITY ******/

//NOTES:
//With !== two values are compared for strict inequality.
    //let c1 = 'rose' !== 'Rose';
    // let c2 = 10 !== '10';
//Both comparisons result in true. The first one, because the two strings
// differ in upper and lower case. The second, because the two values differ in type.

//EXERCISE:
//Write a function unequal that checks 3 values for strict inequality.
// The function should return true if all three parameters are
// strict unequal. Otherwise false.
// Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.

function unequal(value1, value2, value3) {
    return (value1 !== value2) && (value2 !== value3) && (value1 !== value3);
}










/******* COMPARE NUMBERS *******/
//Write a function isThreeDigit that checks if a number
// is greater than or equal to 100 and less than 1000.

//Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.
function isThreeDigit(num) {
    return num >= 100 && num < 1000;
}


//Write a function equals that checks two values for strict equality.
// If the two values are equal, the string 'EQUAL' should be returned.
// If they are unequal, you should get 'UNEQUAL'.
//
// Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
function equals(value1, value2) {
    if(value1 === value2) {
        return "EQUAL";
    }
    return "UNEQUAL";
}


//Write a function repdigit that determines whether a two-digit decimal
// is a repdigit or not. If the decimal is a repdigit, 'Repdigit!'
// should be returned, otherwise 'No Repdigit!'.
//
// Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.
function repdigit(dec) {
    let ones = dec % 10;
    let tens = Math.floor(dec / 10);
    if (ones === tens) {
        return "Repdigit!";
    }
    return "No Repdigit!";
}

//Write a function addWithSurcharge that adds two amounts with surcharge.
// For each amount less than or equal to 10, the surcharge is 1.
// For each amount greater than 10, the surcharge is 2.
//
// Example: addWithSurcharge(5, 15) should return 23.

function addWithSurcharge(amount1, amount2) {
    if(amount1 <= 10 && amount2 <= 10) {
        return ((amount1 + 1) + (amount2 + 1));
    } else if(amount1 > 10 && amount2 > 10) {
        return ((amount1 + 2) + (amount2 + 2));
    } else if(amount1 <= 10 && amount2 > 10) {
        return ((amount1 + 1) + (amount2 + 2));
    } else if(amount1 > 10 && amount2 <= 10) {
        return ((amount1 + 2) + (amount2 + 1));
    }
}

//Write a function addWithSurcharge that adds two amounts
// with surcharge. For each amount less than or equal
// to 10, the surcharge is 1. For each amount greater than
// 10 and less than or equal to 20, the surcharge is 2.
// For each amount greater than 20, the surcharge is 3.
//
// Example: addWithSurcharge(10, 30) should return 44.


function addWithSurcharge(pOne, pTwo) {
    if(pOne <= 10 && pTwo <= 10) {
        return pOne + pTwo + 2;
    } else if((pOne > 10 && pOne <= 20) && (pTwo > 10 && pTwo <= 20)) {
        return pOne + pTwo + 4;
    } else if((pOne > 20) && (pTwo > 20)) {
        return pOne + pTwo + 6;
    } else if(pOne <= 10 && (pTwo > 10 && pTwo <= 20)) {
        return pOne + pTwo + 1 + 2;
    } else if(pTwo <= 10 && (pOne > 10 && pOne <= 20)) {
        return pOne + pTwo + 1 + 2;
    } else if((pOne <= 10 && pTwo > 20) ||(pTwo <= 10 && pOne > 20)) {
        return pOne + pTwo + 1 + 3;
    } else if((pOne > 10 && pOne <= 20) && (pTwo > 20)) {
        return pOne + pTwo + 2 + 3;
    } else if((pTwo > 10 && pTwo <= 20)&& (pOne > 20)) {
        return pOne + pTwo + 2 + 3;
    }
}


//Write a function toArray that takes 2 values and returns these values in an array.
//
// Example: toArray(5, 9) should return the array [5, 9].
function toArray(value1, value2) {
    var arr = [];
    arr.push(value1);
    arr.push(value2);
    return arr;
}



//Write a function getFirstElement that takes an array and returns the first element of the array.
//
// Example: getFirstElement([1, 2]) should return 1.

function getFirstElement(arr) {
    return arr.shift();
}



//Write a function setFirstElement that takes an array and an
// arbitrary variable. The variable should be inserted as
// the first element in the array. The array should be returned.
//
// Example: setFirstElement([1, 2], 3) should return [3, 2].
function setFirstElement(arr, num) {
    arr.shift();
    arr.unshift(num);
    return arr;
}


//Write a function getLastElement that takes an array
// and returns the last element of the array.
//
// Example: getLastElement([1, 2]) should return 2.
function getLastElement(arr) {
    return arr.pop();
}



//Write a function sort that takes an array filled
// with 3 numbers and returns these 3 numbers sorted
// in ascending order as an array.
//
// Example: sort([2, 3, 1]) should return [1, 2, 3].
function sort(arr) {
    return arr.sort()
}


//Write a function rotate that rotates the elements of
// an array. All elements should be moved one position
// to the left. The 0th element should be placed at the
// end of the array. The rotated array should be returned.
//
// Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].
function rotate(arr) {
    var a = arr.shift();
    arr.push(a);
    return arr;
}


//Write a function add that adds an element to the end of an array.
// However, the element should only be added if it is
// not already in the array.
//
// Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].
function add(arr, num) {
    if(arr.indexOf(num) === -1) {
        arr.push(num);
    }
    return arr;
}