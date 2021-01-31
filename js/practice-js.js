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


const number = function(array){
    //your awesome code here
    let myArr = [];
    let count = 1;

    if(array === []) {
        return [];
    }

    for(let i = 0; i < array.length; i++) {
        let num = i + 1;
        let char = array[i]

        myArr.push(num + ": " + char);
    }

    return myArr;
}


function oddOrEven(array) {
    //enter code here
    let count = 0;

    for(num of array) {
        count += num;
    }

    if(count % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}


var removeDuplicates = function(nums) {

    //Taking care of edge-case where array is empty
    if(nums.length === 0) {
        return 0;
    }

    let i = 0; //creating i var to use within loop to compare to the next element in arr

    for(let j = 1; j < nums.length; j++) {
        if(nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

//Time Complexity: O(n) LINEAR
function sum(arr){
    let result = 0; //runs once
    for(const num of arr) { //runs once
        result += num; //runs n times
    }
    return result; //runs once
}

//Another Solution: NOT BETTER, Gives O(n) LINEAR time complexity(same)
function sum2(arr) {
    return arr.reduce((sum, currNum) => sum + currNum, 0);
}

//This is not actually a O(1) Time Complexity, even though you would assume that it is
//B/c you're calling the reduce method, it does a similar method as our for of loop


//A function is only O(1) when your line of code DOES NOT call on another function

//Build a pile of Cubes
function findNb(m) {
    let total = 0
    let n = 0

    while(total < m) {
        n += 1;
        total += Math.pow(n,3);
    }

    if(total === m) {
        return n;
    } else {
        return -1;
    }
}


//The Supermarket Queue
function queueTime(customers, n) {
    let waitTime = new Array(n).fill(0);  //Initially waitTime is an array filled with 0s

    for (let customerTime of customers) {
        let i = waitTime.indexOf(Math.min(...waitTime)); //The code sets i to the index of the lowest value.
        waitTime[i] += customerTime;
    }

    return Math.max(...waitTime);
}