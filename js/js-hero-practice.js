"use strict";
console.log("JS Hero Practice Exercises");


/***** VARIABLES ********/

//Declare a variable firstname and initialize it with the value 'Lata'.

var firstname = 'Lata';


//Declare a variable flower and assign it the value 'rose'. Declare a
// second variable tree and assign it the value 'maple'.

var flower = 'rose';

var tree = 'maple';



/****** FUNCTIONS ******/

//Define a function hello that returns 'Hello world!'.

function hello() {
    return 'Hello world!';
}


//Multiple Functions:
//Define two functions. The first function a should return 'Hello a!'
// and the second function b should return 'Hello b!'.

function a() {
    return 'Hello a!';
}


function b() {
    return 'Hello b!';
}


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


/****** STRINGS ******/

//Write a function greet having one parameter and returning 'Hello <parameter>!'.
//Example: greet('Ada') should return 'Hello Ada!' and greet('Grace')
// should return 'Hello Grace!'.

function greet(input){
    return 'Hello ' + input + '!';
}


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



//Write a function shout that takes a string and returns this string
// duplicated. In addition, the return should be logged.
//
// Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.

function shout(str) {
    console.log(str + str);
    return str + str;
}



/**** String: length ********/

//Write a function length that takes a string and returns the number of characters of the string.
//
// Example: length('sun') should return 3.

function length(str) {
    return str.length;
}



/***** String: toUpperCase() ******/

//Write a function toCase that takes a string and returns that string in
// lowercase and uppercase with - as delimiter.
//
// Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

function toCase(str) {
    return str.toLowerCase() + "-" + str.toUpperCase();
}




/******* String: charAt() *******/

//Write a function shortcut that takes two strings and returns
// the initial letters of theses strings.
//
// Example: shortcut('Amnesty', 'International') should return 'AI'.

function shortcut(str1, str2) {
    return str1.charAt(0) + str2.charAt(0);
}



/******* String: trim() ********/

//Write a function firstChar, which returns the first character
// that is not a space when a string is passed.
//
// Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(input) {
    var name = input.trim();
    return name.charAt(0);
}


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