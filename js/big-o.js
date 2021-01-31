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


})();