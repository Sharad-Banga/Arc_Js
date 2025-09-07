/* 
1. Declare an array named `coffeeTypes` that contains the strings `"espresso"`, `"latte"`, and `"cappuccino"`. 
   Access the first element of the array and store it in a variable named `firstCoffee`.
*/
// let coffeeTypes = ["espresso","latte" , "cappuccino"];
// let firstCoffee = coffeeTypes[0];
// console.log(firstCoffee);




/* 
2. Declare an array named `countries` containing `"India"`, `"Japan"`, `"France"`, and `"USA"`. 
   Access the third element in the array and store it in a variable named `favoriteCountry`.
*/

// let countries = ["India","Japan","France","USA"];
// let favoriteCountry = countries[2];
// console.log(favoriteCountry);




/* 
3. You have an array named `snackItems` containing `"chips"`, `"cookies"`, and `"sandwich"`. 
   Change the second element of the array to `"brownie"`.
*/
// let snackItems = ["chips","cookies ","sandwich"];
// snackItems[1] = "brownie";
// console.log(snackItems);



/* 
4. Declare an array named `booksRead` containing `"1984"` and `"Hamlet"`. 
   Add `"sapiens"` to the array using the  method.
*/

// let booksRead = ["1984","hamlet"];
// booksRead.push("sapiens");
// console.log(booksRead);


/* 
5. You have an array named `fruitBasket` with `"apple"`, `"banana"`, `"orange"`, and `"grape"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastFruit`.
*/
// let fruitBasket = ["apple","banana","orange","grape"];
// let lastFruit = fruitBasket.pop();
// console.log(lastFruit);


/* 
6. You have an array named `mobileBrands` containing `"Samsung"`, `"Apple"`, and `"OnePlus"`. 
   Create a soft copy of this array named `softCopyBrands`.
*/

// let mobileBrands = ["samsung","apple","oneplus"];
// let softCopyBrands= mobileBrands;
// console.log(softCopyBrands);



/* 
7. You have an array named `topLanguages` containing `"JavaScript"`, `"Python"`, and `"C++"`. 
   Create a hard copy of this array named `hardCopyLanguages`.
*/
// let topLanguages = ["JavaScript","Python","c++"];
// let hardCopyLanguages = [...topLanguages];
// console.log(hardCopyLanguages);



/* 
8. You have two arrays: `indoorGames` containing `"chess"` and `"carrom"`, and `outdoorGames` containing `"football"` and `"cricket"`. 
   Merge these two arrays into a new array named `allGames`.
*/
// let indoorGames  = ["chess","carrom"];
// let outdoorGames = ["football","cricket"];

// // let allGames = indoorGames.concat(outdoorGames);
// let allGames = [...indoorGames , ...outdoorGames];
// console.log(allGames);
// console.log(typeof allGames);



/* 
9. You have an array named `movieList` containing `"Inception"`, `"Titanic"`, `"Interstellar"`, and `"Avatar"`. 
   Find the length of the array and store it in a variable named `totalMovies`.
*/

// let movieList = ["inception","titanic","intersteller","avatar"];
// let totalMovies = movieList.length;
// console.log(totalMovies);


/* 
10. You have an array named `travelPlans` containing `"Bali"`, `"Dubai"`, `"Sydney"`, and `"Toronto"`. 
    Check if `"Dubai"` is in the array and store the result in a variable named `isDubaiPlanned`.
*/

// let travelPlans  = [ "bali " ,"dubai","sydney","toronto"];
// let isDubaiPlanned = travelPlans.includes("dubai");
// console.log(isDubaiPlanned);



// Removing Elements: Given an array of strings, use splice() to remove the middle element, regardless of whether the array has an even or odd number of elements.

// let qatar = ["ruwi" , "doha " , "alain"];
// let a = qatar.splice(1,1);
// console.log(a);
// console.log(qatar);



// Creating a Sub-Array: Given an array of numbers, use slice() to create a new array containing only the first three elements.
// let a = [11,22,33,44,55];
// let b = a.slice(0,3);
// console.log(b);




// Finding a User: Given an array of user objects, each with a name and id, use find() to find the user with a specific id (2).

// let a = [ {id : 1,name : "prvh"}   , {id:2 , name :"sharad"} , {id:3 , name:"rahul"}];

// let b = a.find(callbackfxn);

// function callbackfxn(item){
//    return item.id == 2;
// }

// console.log(b);




// Finding an Index: Given an array of unique numbers, use findIndex() to get the index of the first number that is greater than 50.

// let a = [11,22,33,44,55,66,77,88];

// let b = a.findIndex(callFxn);

// function callFxn(item){
//    return item>=55;
// }

// console.log(b);



// Finding All Matches: Given an array of products, each with a category, use filter() to return a new array containing all products in the "electronics" category.

// let a = [{name:"chair" , category : "furniture"} , {name:"lamp" , category : "electronics"},{name:"laptop" , category : "electronics"}];
// let b = a.filter(callFxn);
// function callFxn(item){
//    return item.category == "electronics";
// }
// console.log(b);





// Calculating a Sum: Given an array of numbers, use reduce() to calculate the sum of all the numbers in the array.


// Flattening an Array: Given a nested array like [[1, 2], [3, 4], [5, 6]], use the flat() method to create a single-level array.

// Sorting Numbers: Given an array of unsorted numbers, use sort() with a custom function to sort them in ascending order.

// Reversing a String: Use split(), reverse(), and join() to reverse a string without using a loop.

// Average Price: Given an array of product objects (each with a price property), use map() and reduce() to calculate the average price.