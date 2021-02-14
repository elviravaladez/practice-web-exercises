let arr = [1,2,3,4,5];

// O(n) linear time complexity
for(var i = 0; i < arr.length; i++) {
    console.log("num", arr[i]);
}


//O(n^2) time complexity
//most times, nested loops are O(n^2)
for(var i = 0; i < arr.length; i++) {
    let numberCount = 1;
    for(var j = 0; j < arr.length; j++) {
        console.log(arr[i] + arr[j]);
    }
}

//BUT, if you loop through 2 different loops with nested loops,
// then this is a O(n * m),
// where n is number of elements in the first array
// and m is the number of elements in the second array


