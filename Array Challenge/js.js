/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here


// my.reverse().splice(0, (counter - Number(my.includes("Elham")))); changing in main array "my"
console.log(my.slice(zero, my.indexOf("Gamal")).reverse() ) // ["Osama", "Elham", "Mazero", "Ahmed"];
// ################################################################################################

console.log(my.slice( (Number(my.includes("Elham"))) , counter).reverse() ); // ["Elham", "Mazero"]
// ################################################################################################

 
console.log(my.slice((counter - Number(my.includes("Elham"))), counter).toString().slice(zero,(counter - Number(my.includes("Elham")))) +  my.slice((my.indexOf("Mazero")), my.indexOf("Elham")).toString().slice(my.indexOf("Elham"))) // "Elzero"
// ###################################################################################################


console.log(my.slice(Number(my.includes("Osama")), my.indexOf("Elham")).toString().slice(my.indexOf("Gamal")).charAt(0) +
 my.slice(Number(my.includes("Osama")), my.indexOf("Elham")).toString().slice(my.indexOf("Gamal")).charAt(1).toLocaleUpperCase()); // "rO"