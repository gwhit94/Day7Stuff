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
}
console.log(pow(myNumber,toThePower));