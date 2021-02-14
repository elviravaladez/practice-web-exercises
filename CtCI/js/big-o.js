"use strict";
(function(){
    //Big O Practice with Time Complexity

    //O(N)
    function product(a, b){
        let sum = 0;

        for(let i = 0; i < b; i++) {
            sum += a;
        }
        return sum;
    }

    //O(N) -> The recursive code iterates through N calls, since it subtracts one at each level
    function power(a, b) {
        if(b < 0) {
            return 0;
        } else if(b === 0) {
            return 1;
        } else {
            return a * power(a, b -1); // recursive
        }
    }

    //O(1) -> It does a constant amount of work
    function mod(a, b) {
        if(b <= 0) {
            return -1;
        }

        let div = a / b;
        return a - div * b;
    }

    //0(a/b) -> The variable 'count' will eventually equal a/b. The while loop iterates count times. Therefore, it iterates a/b times.
    function div(a, b) {
        let count = 0;
        let sum = b;

        while(sum <= a) {
            sum += b;
            count++;
        }

        return count;
    }

    //Code computes the square root of a number. If the number is NOT a perfect square, then it returns -1. It does this by successively guessing.
    //TIME COMPLEXITY: 0(log n) -> The algorithm is essentially doing a binary search to find the square root. Therefore, the runtime is O(log n)
    function sqrt(num) {
        return sqrtHelper(num, 1, num);
    }

    function sqrtHelper(num, min, max) {
        if(max < min) {
            return -1; //no square root
        }

        let guess = (min + max) / 2;

        if(guess * guess === num) {
            return guess;
        } else if(guess * guess < num) { //too low
            return sqrtHelper(num, guess + 1, max); //try higher
        } else { //too high
            return sqrtHelper(num, min, guess - 1); //try lower
        }
    }

    //Code computes the square root of a number. If the number is NOT a perfect square, then it returns -1. It does this by trying increasingly large numbers until it finds the right value(or is too high).
    //RUNTIME COMPLEXITY: O(squareRt(n) -> Is straight forward loop that stops when guess * guess > n (or, in other words, when guess > squareRt(n)
    function squareRt(n) {
        for(let guess = 1; guess <= n; guess++) {
            if(guess * guess === n) {
                return guess;
            }
        }
        return -1;
    }

    //VI.7
    //If a binary search tree is not balanced, how long might it take(worst case) to find an element?
    // O(n) -> Where n is the number of nodes in the tree. The max to find an element is the depth tree. The tree could be a straight list downwards and have depth n.


    //VI.8
    //You are looking for a specific value in a binary tree, but the tree is NOT a binary search tree. What is the time complexity of this?
    //O(n) -> Without any ordering property on the nodes, we might have to search through all the nodes.


    //VI.9
    //The appendToNew Method appends a value to an array by creating a new, longer array and returning this longer array. You've used the appendToNew method to create a copyArray function that repeatedly calls appendToNew. How long does copying an array take?
    //O(n^2) -> where n is the number of elements in the array. The first call to appendToNew takes 1 copy. The second call takes 2 copies. The 3rd call takes 3 copies. And so on. The total time will be the sum of 1 through n, which is O(n^2);
    function copyArray(arr) {
        let copy = [];
        for(let value of arr) {
            copy = appendToNew(copy, value);
        }
        return copy;
    }

    function appendToNew(arr, value) {
        //copy all elements over to new array
        let bigger = [];
        for(let i = 0; i < arr.length; i++) {
            bigger[i] = arr[i];
        }
        //add new element
        bigger[bigger.length - 1] = value;
        return bigger;
    }


    //The code below sums the digits in a number.
    //Time complexity: O(log n) -> The runtime will be the number of digits in the number. A number with d digits can have a value up to 10^d.
    //If n = 10^d, d = log n. Therefore, the runtime is O(log n)
    function sumDigits(n) {
        let sum = 0;

        while(n > 0) {
            sum += n % 10;
            n /= 10;
        }

        return sum;
    }


    //SPACE COMPLEXITY

    //Space complexity: 0(1)
    function sum(arr) {
        let total = 0;  //total variable -> O(1)
        for(let i = 0; i < arr.length; i++) { // i variable -> O(1)
            total += arr[i];
        }
        return total;
    }


    //Space complexity: 0(N)
    function double(arr) {
        let newArr = []; //1 var
        for(let i = 0; i < arr.length; i++) { //another var 2
            newArr.push(2 * arr[i]); //newArr grows as we push in numbers -> O(N)
        }
        return newArr;
    }

})();