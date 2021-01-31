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


})();