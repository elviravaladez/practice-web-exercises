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



function sockMerchant(n, ar) {
    var socksCount = {};
    var sum = 0;

    for(var num of ar) {
        if(socksCount[num]) {
            socksCount[num] += 1;
        } else {
            socksCount[num] = 1;
        }

        if(socksCount[num] % 2 === 0){
            sum += 1;
        }
    }
    return sum;
}



function disemvowel(str) {

    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            continue;
        }
        newStr += str[i];
    }

    return newStr;
}


function squareDigits(num){
    var numAsStr = String(num);
    var newNum = "";

    for(var i = 0; i < numAsStr.length; i++) {
        var squared = parseFloat(numAsStr[i]) * parseFloat(numAsStr[i]);
        newNum += String(squared);
    }

    return parseFloat(newNum);

}