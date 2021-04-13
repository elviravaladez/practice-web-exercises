(function(){
    "use strict";

    // Frequency Counter Patterns
    //----------------------------
    //Uses objects or sets to collect values/frequencies of values
    //Often avoid the need for nested loops or O(N^2) operations with arrays / strings

    //TODO: Write a function called "same" that accepts two arrays. The function should return true if every value in the second array has it's corresponding value squared in the second array. The frequency of values must be the same.

    //Examples:
    // same([1, 2, 3], [4, 1, 9]) // true
    // same([1,2, 3], [1, 9]) //false
    // same([1, 2, 1],[4, 4, 1]) //false (must be the same frequency)

    //O(N^2)
    function same(arr1, arr2) {
        if(arr1.length !== arr2.length) {
            return false;
        }

        for(let i = 0; i < arr1.length; i++) {
            let correctIndex = arr2.indexOf(Math.pow(arr1[i],2));

            if(correctIndex === -1) {
                return false;
            }
            arr2.splice(correctIndex, 1);
        }
        return true;
    }

    //Test
    same([1, 2, 3, 2], [9, 1, 4, 4]); //true



    //Refactored Solution O(n)
    function sameSolutionTwo(arr1, arr2) {
        //check if two arrays are the same size
        if(arr1.length !== arr2.length) {
            return false;
        }

        //Start with empty object
        let frequencyCounterOne = {};
        let frequencyCounterTwo = {};

        //Loop over arr1 to check the amount of times the keys occur in the object
        for(let value of arr1) {
            frequencyCounterOne[value] = (frequencyCounterOne[value] || 0) + 1;
            //add 1 to frequency counter IF it is already in there OR initialize it to one if it is not already in the object
        }

        //Loop over arr2 to check the amount of times the keys occur in the object
        for(let value of arr2) {
            frequencyCounterTwo[value] = (frequencyCounterTwo[value] || 0) + 1;
            //add 1 to frequency counter OR initialize it to one if it is not already in the object
        }

        //Loop over the first object
        for(let key in frequencyCounterOne) {

            if(!(key ** 2 in frequencyCounterTwo)) { //ex: 2^2 = 4
                return false; //check to see see if the key^2 is in frequencyCounterTwo. If not, return false
            }

            //check if the values correspond. Ex: if there are two 2, there has to be two 4s. If not, return false
            if(frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
                return false;
            }
        }

        console.log(frequencyCounterOne);
        //{1: 1, 2: 2, 3: 1}
        //1: 1
        //2: 2
        //3: 1
        console.log(frequencyCounterTwo);
        //{1: 1, 4: 2, 9: 1}
        //1: 1
        //4: 2
        //9: 1

        return true;
    }


    //Test
    sameSolutionTwo([1, 2, 3, 2], [9, 1, 4, 4]); //true


    //Anagrams
    //TODO: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. Assume the string contains only lowercase letters
    //Goal: Time Complexity - O(n)

    // Examples:
    validAnagram("",""); //true
    validAnagram("aaz", "zza"); //false
    validAnagram("anagram", "nagaram"); //true
    validAnagram("rat", "car"); //false
    validAnagram("awesome", "awesom"); //false
    validAnagram("qwerty", "qeywrt"); //true
    validAnagram("texttwisttime", "timetwisttext"); //true

    //Time Complexity: O(N^2)
    function validAnagram(str1, str2){
        if (str1.length !== str2.length) {
            return false;
        }

        let letterGroupOne = str1.split('');
        let letterGroupTwo = str2.split('');
        for (let char of letterGroupOne) {
            let position = letterGroupTwo.indexOf(char);
            if(position === -1) {
                return false;
            }
            letterGroupTwo.splice(position, 1);
        }
        return true;
    }

    //Time Complexity O(1)
    function validAnagramSolution(str1, str2) {
        if(str1.length !== str2.length) {
            return false;
        }

        const search = {};

        //loop over first string
        for(let i = 0; i < str1.length; i++) {
            let letter = str1[i];

            //if letter exists, increment, else set to 1
            if(search[letter]) {
                search[letter] += 1;
            } else {
                search[letter] = 1;
            }
        }

        //loop over second string
        for(let i = 0; i < str2.length; i++) {
            let letter = str2[i];

            //if we can't find the letter (or the letter is 0) then it's not an anagram
            if(!search[letter]) {
                return false;
            } else {
                search[letter] -= 1;
            }
        }
        return true;
    }


    //TODO: Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
    function comp(array1, array2){
        if(array1 === null || array2 === null) {
            return false;
        }

        if(array1.length !== array2.length) {
            return false;
        }

        let freqCounter1 = {};
        let freqCounter2 = {};


        for(let i of array1) {
            freqCounter1[i] = (freqCounter1[i] || 0) + 1;
        }

        for(let i of array2) {
            freqCounter2[i] = (freqCounter2[i] || 0) + 1;
        }

        for(let key in freqCounter1) {
            if(!(key ** 2 in freqCounter2)) {
                return false;
            }

            if(freqCounter2[key ** 2] !== freqCounter1[key]) {
                return false;
            }
        }
        return true;
    }

    //Tests:
    comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]); //true
    comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]); //false
    comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]); //false


    //Multiple Pointers
    //----------------------------
    //Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
    //Very efficient for solving problems w/minimal space complexity as well

    //TODO: Write a function called sumZero which accepts a SORTED array of integers.
    // The function should find the first pair where the sum is 0.
    // Return an array that includes both values that sum to zero or
    // undefined if a pair does not exist.
    //Examples:
    sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
    sumZero([-2, 0, 1, 3]) // undefined
    sumZero([1, 2, 3]) // undefined

    //Time Complexity: O(N^2)
    //Space Complexity: O(1)
    function sumZeroSolutionOne(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] + arr[j] === 0) {
                    return [arr[i], arr[j]];
                }
            }
        }
    }

    //Time Complexity: O(N)
    //Space Complexity: O(1)
    function sumZero(arr) {
        let leftPointer = 0;
        let rightPointer = arr.length - 1;

        while(leftPointer < rightPointer) {
            let sum = arr[leftPointer] + arr[rightPointer];
            if(sum === 0) {
                return [arr[leftPointer], arr[rightPointer]];
            } else if(sum > 0) {
                rightPointer--;
            } else {
                leftPointer++;
            }
        }
    }

    //Another Multiple Pointers Practice Exercise

    //TODO:Implement a function called countUniqueValues,
    // which accepts a sorted array, and counts the unique values in the array.
    // There can be negative numbers in the array, but it will always be sorted.

    //Tests
    countUniqueValues([1,1,1,1,2]); //2
    countUniqueValues([1,2,3,4,4,4,8,8,8,8,13,13,16]); //7
    countUniqueValues([]); //0
    countUniqueValues([-3, -2, -2, 0, 4]) //4

    //start pointer at first two nums in the arr
    //use the arr to store the unique values

    //Time Complexity - O(n)
    //Space Complexity - O(n)

    //Solution One
    //Only works with a sorted array
    function countUniqueValues(arr) {
        if(arr.length === 0) {
            return 0;
        }

        let i = 0;

        for(let j = 1; j < arr.length; j++) {

            //comparing if i and j are NOT equal
            if(arr[i] !== arr[j]) { //2 and 3
                //move i up by one
                i++;
                //update the pointer only when we find two values that DO NOT match
                arr[i] = arr[j]; //ex: 3 = 3;
            }
        }
        return i + 1; //returns the number of unique values (the length of the updated arr)
    }


    //Sliding Window
    //----------------------------
    //Involves creating a "window" which can either be an array or number from one position to another
    //Depending on a certain condition, the window either increases or closes(and a new window is created)
    //Useful for keeping track of a subset of data in an array/string

    //TODO: Write a function called "maxSubarraySum" which accepts an array of integers and a number
    // called "n." The function should calculate the maximum sum of "n" consecutive elements in the array

    //Tests
    maxSubarraySum([1,2,5,2,8,1,5], 2); //10
    maxSubarraySum([1,2,5,2,8,1,5], 4); //17
    maxSubarraySum([4,2,1,6], 1); //6
    maxSubarraySum([4,2,1,6,2], 4); //13
    maxSubarraySum([], 4); //null

    //Time Complexity: O(N)
    function maxSubarraySum(arr, num) {
        let maxSum = 0;
        let tempSum = 0;

        if(arr.length < num) {
            return null;
        }

        for(let i = 0; i < num; i++) {
            maxSum += arr[i];
        }

        tempSum = maxSum;

        for(let i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }

        return maxSum;
    }


    //Divide and Conquer
    //----------------------------
    //Involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
    //This pattern can tremendously decrease time complexity

    //TODO: Given a SORTED array of integers, write a function called search, that accepts a value
    // and returns the INDEX where the value passed to the function is located. If the value is not
    // found, return -1

    //Tests
    binarySearch([1,2,3,4,5,6], 4) //3
    binarySearch([1,2,3,4,5,6], 6) //5
    binarySearch([1,2,3,4,5,6], 11) //-1


    //Time Complexity Log(N)
    function binarySearch(arr, num) {
        let min = 0;
        let max = arr.length - 1;

        while(min <= max) {
            let middle = Math.floor((min + max) / 2);
            let currentElement = arr[middle];

            if(arr[middle] < num) {
                min = middle + 1;
            } else if(arr[middle] > num) {
                max = middle - 1;
            } else {
                return middle;
            }
        }
        return -1;
    }

})();