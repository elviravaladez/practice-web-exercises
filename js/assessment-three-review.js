"use strict"

// Write a function called isNegative that accepts either a number or numeric string
// and return true if the number is negative and false if it is positive or not a number.
function isNegative(num) {
    return Number(num) < 0;
}


console.log(isNegative(42)) //expect false
console.log(isNegative(-38.4)) //expect true
console.log(isNegative("2.22")) // expect false
console.log(isNegative("-53")) // expect true
console.log(isNegative("-.23")) // expect true


// Write a function called portmanteau that accepts an array of strings
// and returns a string that is a combination of all words

//1 parameter but it's array, so there will be many things in the arr
//and returns ONE string that is a combination of all words

//1 parameter but it's an array so there's going to be a lot stuff
function portmanteau(arr) {
    var newArr = [];
    newArr.push(arr.join("" ));
    return newArr;
}



console.log(portmanteau(["Row", "row", "fight", "the", "power"]))
console.log(portmanteau(["Hello", "world"]))
console.log(portmanteau(["one", "two", "three", "four"]))


// Write a function called noRoberts that accepts an array of strings and
// returns an array that removes all forms of Robert: Robert, Rob, Bob, Bobby, Bobert, Robby
//be case insensitive

// function noRoberts(arrOfNames) {
//     //Need a loop b/c we need to look at every value in an array to check for the names
//
//     //Going to be pushing things into the bucket
//     //The things are going to be the NOT roberts
//     var notRobertBucket = []; //contains NOT roberts
//     arrOfNames.forEach(function(possibleRobert){
//         //to make case insensitive
//         possibleRobert = possibleRobert.toLowerCase();
//
//         //I could do .includes or .indexOf !== -1 that way it shows if Robert is not included in the array
//         if(!(possibleRobert === "robert" || possibleRobert === "rob" || possibleRobert === "bob" || possibleRobert === "bobby" || possibleRobert === "bobert" || possibleRobert === "robby")) {
//             notRobertBucket.push(possibleRobert);
//         }
//
//         return notRobertBucket;
//     });
// }

function noRoberts(arrayOfNames) {
    var typesOfRoberts = ["robert", "rob", "bob", "bobby", "bobert", "robby"];
    var bucket = [];
    arrayOfNames.forEach(function(possibleRobert){
        possibleRobert = possibleRobert.toLowerCase();
        if(!typesOfRoberts.includes(possibleRobert)){
            bucket.push(possibleRobert);
        }
    });
    return bucket;
}


console.log(noRoberts(["Jim", "Bob", "Martha", "Robert", "Lucille"]));
console.log(noRoberts(["Hank", "bob", "Robby", "Gertrude", "larry"]));
console.log(noRoberts(["rob", "sally", "Susan", "Roberto", "roger"]));
console.log(noRoberts(["Joebob", "roBert", "samantha", "Niel", "rboert"]));



// Write a function called rectangleConstructor that accepts 3 parameters and returns a rectangle object
// The parameters will be 2 numbers for the width and height and a string for rectangleColor.
// return object should be:
// {
//     height: 42,
//     width: 42,
//     rectangleColor: "pink"
// }
function rectangleConstructor(heightValue, widthValue, rectangleColorValue){
    var rectangle = {
        height: parseFloat(heightValue),
        width: parseFloat(widthValue),
        rectangleColor: parseFloat(rectangleColorValue)
    };
    return rectangle;
}


makeRectangle(rectangleConstructor(4, 8, "green"));
makeRectangle(rectangleConstructor(10, 10, "orange"));
makeRectangle(rectangleConstructor(20, 5, "pink"));



// Write a function called findLargest that accepts an array of rectangle objects
// and returns the rectangle object that has the largest area



//Dealing with array of objects
//Want to return one object based on largest area  --> height * width
//keep track of what has greatest area and return the object with the largest area

// function findLargest(arrayOfRectangles) {
//     var areaWinner = 0;
//     var largestArea = 0;
//
//     //Need to loop through all objects
//     arrayOfRectangles.forEach(function(rectangle) {
//         //Check the rectangle I'm currently on to see if it's area is larger than the largest area
//         //I've found so far
//         //If so then I update the largest area and largest rectangle
//        if(rectangle.height * rectangle.width > largestArea){
//            areaWinner = rectangle;
//            largestArea = rectangle.height * rectangle.width;
//        }
//     });
//
//     return areaWinner;
// }

// var rectanglesOne = [{height: 3, width: 7, color: "blue"}, {height: 13, width: 4, color: "pink"}, {height: 40, width: 18, color: "purple"}]
// var rectanglesTwo = [{height: 10, width: 10, color: "yellow"}, {height: 88, width: 7, color: "red"}, {height: 5, width: 6, color: "green"}]
// console.log(findLargest(rectanglesOne));
// console.log(findLargest(rectanglesTwo));


// Write a function called orderDigits that accepts a number
// and returns a number with the digits ordered from smallest to largest


// console.log(orderDigits(847293))
// console.log(orderDigits(6463))
// console.log(orderDigits(29865))
// console.log(orderDigits(3876042))
// console.log(orderDigits(4367))





// Write a function called findWeapon that accepts a D&D character object and
// returns a string of the name of their weapon

function findWeapon(characterObject) {
    //Need a loop to loop over inventory
    // object = character object

    var playerWeapon = "";

    for(var i = 0; i < characterObject.inventory.length; i++) {
        if(characterObject.inventory[i].itemType === "Weapon"){
            playerWeapon = characterObject.inventory[i].itemName;
        }
    }
    return playerWeapon;
}





var playerOne = {
    name: "Murder Hobo",
    class: "Barbarian",
    inventory: [
        {
            itemName: "Health Potion",
            itemType: "Potion"
        },
        {
            itemName: "Deck of many things",
            itemType: "Bad idea"
        },
        {
            itemName: "Great Axe",
            itemType: "Weapon"
        }
    ]
}

var playerTwo = {
    name: "Min Max",
    class: "Fighter",
    inventory: [
        {
            itemName: "Long sword",
            itemType: "Weapon"
        },
        {
            itemName: "Ration",
            itemType: "Annoying thing to track"
        },
        {
            itemName: "Elephant",
            itemType: "Mount"
        }
    ]
}

var playerThree = {
    name: "Rules Lawyer",
    class: "Wizard",
    inventory: [
        {
            itemName: "Rat",
            itemType: "Friend"
        },
        {
            itemName: "Peasant rail gun",
            itemType: "Weapon"
        },
        {
            itemName: "Pointy Hat",
            itemType: "Clothing"
        }
    ]
}


console.log(findWeapon(playerOne));
console.log(findWeapon(playerTwo));
console.log(findWeapon(playerThree));