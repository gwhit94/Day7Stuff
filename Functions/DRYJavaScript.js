if(x % 2 == 0){
    console.log("X is evenly divisible by 2")
}
else{
    console.log("X is not evenly divisible by 2")
}

if(x % 3 == 0){
    console.log("X is evenly divisible by 3")
}
else{
    console.log("X is not evenly divisible by 3")
}

if(x % 4 == 0){
    console.log("X is evenly divisible by 4")
}
else{
    console.log("X is not evenly divisible by 4")
}

if(x % 5 == 0){
    console.log("X is evenly divisible by 5")
}
else{
    console.log("X is not evenly divisible by 5")
}

if(x % 6 == 0){
    console.log("X is evenly divisible by 6")
}
else{
    console.log("X is not evenly divisible by 6")
}

if(x % 7 == 0){
    console.log("X is evenly divisible by 7")
}
else{
    console.log("X is not evenly divisible by 7")
}

// CLEANED UP
var ourNum = 39;
function isEvenlyDivisible(x,y){
    if (x % y == 0){
        console.log(`${x} is evenly divisible by ${y}`);
    } else {
        console.log(`${x} is NOT evenly divisible by ${y}`);
    }
    // TERNARY EXAMPLE OF ABOVE
    // console.log(`$(x) is ${x % y == 0 ? "" : "not"} evenly divisible by ${y}`)
    for (let i = 1; i < 8; i++) {
        isEvenlyDivisible(ourNum, i);
    }

}