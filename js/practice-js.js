"use strict";

function palindrome(str) {
    str = str.toLowerCase();
    var letters = [];
    var stringReversed = "";

    for(var i = 0; i < str.length; i++) {
        letters.push(str[i]);
    }

    for(var i = 0; i < str.length; i++) {
        stringReversed += letters.pop();
    }

    if(str === stringReversed) {
        console.log(str + " is a palindrome.")
        return true;
    } else {
        console.log(str + " is NOT a palindrome.")
        return false;
    }
}