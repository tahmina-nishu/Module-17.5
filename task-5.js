/*
5. Combining Arrays
Instructions:

-> Create two arrays of your choice.
-> Use the concat method to combine the two arrays into a new array.
-> Print both the original arrays and the combined array using console.log().
*/

var numbers1 = [1,2,3,4,5];
var numbers2 = [6,7,8,9,10];
var combinedArray = numbers1.concat(numbers2);

console.log("first array : " + numbers1);
console.log("second array : " + numbers2);
console.log("combined array : " + combinedArray);