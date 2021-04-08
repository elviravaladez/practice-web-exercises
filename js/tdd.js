//Practice with Test Driven Development
expect(2, add(1, 1)); //true
expect(3, add(1, 2)); //true
expect(4, add(-1, 5)); //true

//Edge-cases
expect(5, add(1, "4")); //true
expect(6, add("3", "3")); //true
expect(7, add("4", 3)); //true


//this test is not good enough for edge-cases
function add(num1, num2) {
    return 2;
}

//a little bit better, but still not fool-proof
function add(num1, num2) {
    return num1 + num2;
}

//a better test
function add(num1, num2) {
    return parseInt(num1) + parseInt(num2); //convert string representation into a number
}


//Refactoring to improve the test
function expect(expected, actual) {
    console.log(expected + " == " + actual, expected == actual);
}