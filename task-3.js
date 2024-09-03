/*
3. Checking Array Membership with ‘includes’
Instructions:

-> Create an array of books containing different book.
-> Use the includes method to check if the array contains a javascript book.
-> Print a message to the console indicating whether the element is present in the array or not.
*/

let books = ['To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Great Gatsby', 'Eloquent JavaScript', 'The Catcher in the Rye'];
if(books.includes('Eloquent JavaScript'))
    console.log("This array contains a JAvascript book.")
else
    console.log("This array doesn't contain a JAvascript book.")