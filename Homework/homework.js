//     Write a function to see if a pizza can be split evenly amongst a group of people. The function should take two arguments: the number of people present, and the number of slices of the pizza.
//     If it can be split evenly log the result
//     If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.

function pizzaSplitter(people, slices){
    var remainder = slices % people;
    // Ternary
    // var sliceless = people - remainder;
    // remainder === 0 ? console.log("The 'Za can be evenly split! Splendido!") : console.log(`We can't split up the 'za man, or else ${sliceless} people will go sliceless . . . bummer.`);
    if (remainder === 0 ){
        console.log("The 'Za can be evenly split! Splendido!")
    } else {
        var sliceless = people - remainder;
        console.log(`We can't split up the 'za man, or else ${sliceless} of ${people} will go sliceless . . . bummer.`);
    }
}
var groupSize = 8;
var slices = 20;
pizzaSplitter(groupSize, slices);

// Write a function to see if a triangle is a right triangle based off whether or not the square of the longest side is equal to the sum of the squares of the other sides.

// function triangleCheck(side1, side2, hypotenuse){
//     var hypoSquare = hypotenuse * hypotenuse;
//     var sidesSquare = (side1 * side1) + (side2 * side2);
//     hypoSquare === sidesSquare ? console.log("The triangle is a right triangle!") : console.log("The triangle is NOT a right triangle.");
// }
// function rightTriangle(a, b, c){
//     // sends params to triangleCheck with largest side as hypotenuse
//     if ( a > b && a > c){
//         triangleCheck(b, c, a);
//     } else if ( b > a && b > c){
//         triangleCheck(a, c, b);
//     } else {
//         triangleCheck(a, b, c)
//     };
// }
function rightTriangle(a,b,c){
    var sides = [a,b,c];
    sides.sort(function (x,y){
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0
    })
    return Math.pow(sides[0],2) + Math.pow(sides[1],2) === Math.pow(sides[2],2);
}
var sideA = 3;
var sideB = 4;
var sideC = 5;

console.log(rightTriangle(sideA, sideB, sideC));



// Write a function to check to see if a warrior can beat all of the monsters in a dungeon. Supply the function with the amount of damage each of the monsters do (in array format) and then the number of health the warrior has.
// If the warrior doesn't have enough health to take all of the attacks they are unable to survive
// If they are able to take all of the attacks, they are able to survive.

// //Example of monster damage:
// [1,3,2,8,5]
// // Warrior health:
// 10
// // Since 1+3+2+8+5 = 19 and 10-19 < 0 they could not survive

var monsterDamage = [3, 9, 1, 6, 4];
var warriorHealth = 25;

function survivalCheck(damage, health){
    var totalDamage = 0;
    // for(var i=0; i<damage.length; i++){
    //     totalDamage += damage[i];
    // }
    // Same as
    // damage.forEach(element => {
    //     totalDamage += element;
    // });
    // SAME AS
    totalDamage = damage.reduce((acc,val) => acc + val) ;
    return totalDamage < health;
}
// if survivalCheck is true, you survived!
console.log(survivalCheck(monsterDamage, warriorHealth));

// Write a function that takes points in a grid in x,y format. Calculate if the points form a rectangle. The arguments should be supplied as arrays:
// [x1,y1], [x2,y2], [x3,y3], [x4,y4]
var point1 = {x:1, y:2};
var point2 = {x:1, y:6};
var point3 = {x:5, y:2};
var point4 = {x:5, y:6};


// I didnt finish this so here is the example solution
function isRectangle(point1, point2, point3, point4){
    var centerX,centerY;
    var hp1,hp2,hp3,hp4;

    centerX=(point1.x+point2.x+point3.x+point4.x)/4;
    centerY=(point1.y+point2.y+point3.y+point4.y)/4;

    hp1=Math.pow((centerX-point1.x), 2)+Math.pow((centerY-point1.y), 2);
    hp2=Math.pow((centerX-point2.x), 2)+Math.pow((centerY-point2.y), 2);
    hp3=Math.pow((centerX-point3.x), 2)+Math.pow((centerY-point3.y), 2);
    hp4=Math.pow((centerX-point4.x), 2)+Math.pow((centerY-point4.y), 2);
    return hp1==hp2 && hp1==hp3 && hp1==hp4;
}
console.log(isRectangle(point1, point2, point3, point4));