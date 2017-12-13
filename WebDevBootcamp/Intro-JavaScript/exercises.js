// ***** Exercise 1 : conditionals *****

// var age;
// age = prompt("gimme your age");
//
// if (age < 0){
//   console.log("That ain't possible, dude!");
// } else if (age == 21) {
//   console.log("You are ready for life ;)");
// }else if ((age % 2) == 1) {
//   console.log("Your age is odd!");
// }else if ((age % Math.sqrt(age)) === 0) {
//   console.log("Your age is a perfect square!");
// }else{
//   console.log("Nothing special about your age =/");
// }

// ***** Exercise 2 - Annoy-omatic *****

// var ans = "no";
//
// // while (!/^(yes|yeah)$/.test(ans)){
// while (!/(yes|yeah)/.test(ans)){ // For any phrase containing yes or yeah (regex)
// // while (ans.indexOf("yes") < 0){ // For any phrase containing yes or yeah (indexOf)
//   ans = prompt("Are we there already?");
// }
// alert("Yeeeeey!");

// ***** Exercise 3 - Functions *****

// var num = Number(prompt("Gimme a number!"));
//
// function isEven(num){
//   if (typeof(num) !== "number" || isNaN(num)){
//     return "Sorry, not a number!";
//   }
//   return num % 2 === 0;
// }
//
// function factorial(num){
//   if (typeof(num) !== "number" || num < 0 || isNaN(num)){
//     return "Sorry, input is not a number or is a negative number";
//   }
//   ans = 1;
//   while (num > 1){
//     ans *= num--;
//   }
//   return ans;
// }
//
// console.log(isEven(num));
// console.log(factorial(num));
//
// var str = prompt("gimme a string with hifens");
//
// function kebab_to_snake(str){
//   return str.replace(/-/g, "_");
// }
//
// console.log(kebab_to_snake(str));

// ***** Exercise 4 - Array iteration *****

var array = ["1", "2", "3", "4", "4", "100"];

// function printReverse(arr){
//   tempArr = arr.slice(0).reverse();
//   tempArr.forEach(function(el){
//     console.log(el);
//   });
// }
//
// function isUniform(arr){
//   var first = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if (arr[i] !== first){
//       return false;
//     }
//   }
//   return true;
// }
//
// function sumArray(arr){
//   sum = 0;
//   arr.forEach(function(num){
//     sum += Number(num);
//   });
//   return sum;
// }
//
// function maxArray(arr){
//   max = Number.MIN_VALUE;
//   arr.forEach(function(num){
//     if (num > max){
//       max = Number(num);
//     }
//   });
//   return max;
// }

//  ***** Exercise 5 - My own forEach *****

// Estudar prototype!
Array.prototype.myForEach = function (func) {
  for (var i = 0; i < this.length; i++){
    func(this[i]);
  }
};

//  ***** Exercise 6 - Objects! - MovieDB *****

// var MovieDB = {
//   movies: [
//     {
//       name: "Perfume",
//       rating: 5,
//       hasWatched: true
//     },
//     {
//       name: "Fight Club",
//       rating: 5,
//       hasWatched: true
//     },
//     {
//       name: "O caçador de pipas",
//       rating: null,
//       hasWatched: false
//     }
//   ]
// };
//
// MovieDB.movies.forEach(function(movie){
//   var tf;
//   if (movie.hasWatched === false) tf = " not";
//   else tf = "";
//   console.log("You have" + tf + " seen " + movie.name + " - " + movie.rating + " stars");
// });
