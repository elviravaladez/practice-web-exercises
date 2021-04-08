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

})();