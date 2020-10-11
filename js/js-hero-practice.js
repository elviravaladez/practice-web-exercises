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