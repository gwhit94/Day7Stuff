// Pass a number into a function that will return the absolute value of that number (absolute value of -1 is 1 and abs of 1 is 1) 
// without the use of built in math functions.

var absOne = -42;
var absTwo = 5;
function absoluteValue(x){
    return  x >= 0 ? x : x / -1;
    // if (x > 0){
    //     return x;
    // } else { 
    //     x = (x / -1);
    //     return x;
    // }
    // WITH MATH FUNCTION
    // return Math.abs(x);
}
console.log(absoluteValue(absOne));
console.log(absoluteValue(absTwo));


// Make a function called pow that accepts arguments x and y and returns the value of x to the y power

var myNumber = 3;
var toThePower = 4;
function pow(x,y){
    // WITH MATH FUNCTION
    // reutrn Math.pow(x,y)

    // WITH MATH OPERATOR
    // return x ** y

    // WITH FOR LOOP
    // var temp = 1;
    // for (var i = y; i > 1; i--){
    //     temp = temp*x;
    // }
    // return temp;

    // WITH WHILE LOOP
    // var temp = 1;
    // while (y > 0){
    //     temp = temp * x;
    //     y--;
    // } 
    // return temp;

    // WITH RECURSION
    if (y <= 1){
        return x;
    }
    return x * pow(x, y-1);
}
console.log(pow(myNumber,toThePower));

// Write a function that checks to see if the word as an argument is a palindrome (case insensitive) and log the result to the console.
var isP = "taCo caT";
var notP = "asdffffaffaffa";

function isPalindrome(sentence){
    // switch to lowercase
    sentence = sentence.toLowerCase();
    // letters into array sans spaces
    var sentenceArray = sentence.split(" ");
    sentence = sentenceArray.join("");
    // another array that is reverse of first array
    var reverseSentence = sentence.split("").reverse().join("");
    // if the match return true, otherwise return false
    return sentence === reverseSentence;
    
}
console.log(isPalindrome(isP));
console.log(isPalindrome(notP));

// Write a function that accepts an array of banned words and an array of words. If any of the banned words appear in the array of words (case sensitive), replace them with "REDACTED", do this without any prototypical functions

var wordArray = ["john", "maDden", "skub", "suzie", "Skub"];
var bannedWords = ["suzie", "melon", "skub", "bland"];

function censor(wordArray,bannedWords){
    // create new array with all values identical to wordArray but not same space in memory
    var checkedArray = wordArray.slice(0);
    // loop through first array
    for (var i = 0; i < checkedArray.length; i++){
        var currentWord = checkedArray[i];
        // compare each element in first array to each element in second
        for (var j = 0; j < bannedWords.length; j++) {
            // if (currentWord == bannedWords[j]){
            //     checkedArray[i] = "REDACTED";
            // }
            currentWord == bannedWords[j] ? checkedArray[i] = "REDACTED" : "";
        };
    };
    return checkedArray;
}
console.log(censor(wordArray, bannedWords), wordArray);

// Write a function that accepts two arguments (names can be changed):a and b. Cycle through all numbers between a and b (inclusive) and if the number is divisible by 2 log "Fizz" if the number is divisible by 3 log "Buzz" if it is divisible by both log "FizzBuzz" otherwise log the number. if a==b log nothing, if a > b count down otherwise count up

function fizzBuzz(a,b){
    if (a == b){
        return;
    } else if (a > b){
        for (i = (a - 1); i > b; i--){
            i % 3 == 0 ? console.log("Fizz") : "";
            i % 5 == 0 ? console.log("Buzz") : "";
            i % 5 == 0 && i % 3 == 0 ? console.log("FizzBuzz") : console.log(i);
        }
    } else {
        for (i = (a + 1); i < b; i++){
            i % 3 == 0 ? console.log("Fizz") : "";
            i % 5 == 0 ? console.log("Buzz") : "";
            i % 5 == 0 && i % 3 == 0 ? console.log("FizzBuzz") : console.log(i);
        }
    }
}
fizzBuzz(70, 50);


// Write a function that takes a day month and year (in whatever format you choose) and return what day that was. Try doing this both WITH and WITHOUT the use of built in libraries.