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
})();