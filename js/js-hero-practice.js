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