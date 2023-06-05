/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "abdo Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 6).toUpperCase().charAt(0) + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.slice(0, 6).split()); // ["Elzero"]
console.log(a.substring(0, 6).split()); // ["Elzero"]
console.log(a.substr(0, 6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + a.substr(-7)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.split(" ")[0].slice(1, -1).toUpperCase() +
 a.split(" ")[0].slice(-1) + " " + a.toUpperCase().split(" ").slice(1)); // ["Elzero"])); // eLZERO WEB SCHOOl


 console.log(a.charAt(0).toLowerCase() + a.slice(1 , a.length-1).toUpperCase() + a.charAt(a.length-1));

