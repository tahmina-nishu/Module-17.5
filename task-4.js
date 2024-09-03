/*
4. Checking if it's an Array
Instructions:

-> Create different variables, each containing either an array or a non-array value.
-> Now use isArray to check if each variable is an array.
-> Print a message to the console indicating whether each variable is an array or not.
*/

var n = 20;
var numbers = [10, 20, 30, 40, 50];
is_n_array = Array.isArray(n);
is_numbers_array = Array.isArray(numbers);

if(is_n_array)
    console.log('n is an array.');
else
    console.log('n is not an array.');
if(is_numbers_array)
    console.log('numbers is an array.');
else
    console.log('numbers is not an array.');