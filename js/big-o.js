"use strict";
(function(){
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
})();