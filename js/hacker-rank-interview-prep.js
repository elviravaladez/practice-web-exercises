(function () {
    'use strict';

    //Repeated string to find number of letter a's in the first "n" letters of an infinite string ("s")
    function repeatedString(s, n) {
        let numOfAsInString = s.split('a').length - 1; //find the number of "a"s in the string

        let numOfStrings = Math.floor(n / s.length); //find the number of strings that fit into "n"

        let totalNumOfAs = numOfAsInString * numOfStrings; //get the total # of "a"s by multiplying the # of "a"s in the string by the # of strings that fit

        let remainderString = (n % s.length) / s.length; ////get the remainder string

        let leftOverStringLength = Math.floor(remainderString * s.length);

        let leftOverSubstring = s.substring(0, leftOverStringLength); //get the leftover substring

        totalNumOfAs += leftOverSubstring.split('a').length - 1; //Add any left over A's to the total number of "a"s

        return totalNumOfAs;
    }

    //Testing
    console.log(repeatedString("abcac", 10)); //4
    console.log(repeatedString("aba", 10)); //7


    const uniqueInOrder = function(iterable){
        let arr = [];

        for(let i = 0; i < iterable.length; i++) {
            if(iterable[i] !== iterable[i + 1]) {
                arr.push(iterable[i]);
            }
        }
        return arr;
    }


    function prefill(n, v) {
        if(n === 0 || n === '0') {
            return [];
        }

        if(!parseInt(n) || n < 0 ) {
            let typeError = new TypeError();
            typeError.name = "TypeError";
            typeError.message =  n + " is invalid";
            throw typeError
        }

        return new Array(n).fill(v);
    }

})();