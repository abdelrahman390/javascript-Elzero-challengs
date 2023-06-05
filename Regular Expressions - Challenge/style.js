/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let urltest = 'https://www.youtube.com/watch?v=gYB66iXxKlM&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=138'

// let re = /\w+:?(\/\/)?(www.)?\w+.\w+(:?\d+\w+\D+\W+)?/ig; // "https://www.elzero.org:8080/articles.php?id=",
// let re = /\w+:?(\/\/)?(www.)?\w+.\w+(:\d+\D+\w+\W+)?/ig; //  "https://www.elzero.org:8080/articles.php?id=100&"

let re = /\w+:?(\/\/)?(www.)?\w+.\w+:?.+/ig // done


console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(urltest.match(re));