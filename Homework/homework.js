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
function rightTriangle(){

}
// Write a function to check to see if a warrior can beat all of the monsters in a dungeon. Supply the function with the amount of damage each of the monsters do (in array format) and then the number of health the warrior has.
// If the warrior doesn't have enough health to take all of the attacks they are unable to survive
// If they are able to take all of the attacks, they are able to survive.

// //Example of monster damage:
// [1,3,2,8,5]
// // Warrior health:
// 10
// // Since 1+3+2+8+5 = 19 and 10-19 < 0 they could not survive
function survivalCheck(){
    
}
// Write a function that takes points in a grid in x,y format. Calculate if the points form a rectangle. The arguments should be supplied as arrays:
function rectangleCheck(){

}
// [x1,y1], [x2,y2], [x3,y3], [x4,y4]