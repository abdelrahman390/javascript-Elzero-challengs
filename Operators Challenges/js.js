/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  [++a] [+] [+b++] [+c++] [-] [+a++]
  [++a]
  - Value: 11
  - Explain: Increment operation adds 1 to 10
  [+]
  - Explain:add operator
  [+b++]
  - Value: 21
  - Explain: first + convert b to a number,
    post increment to add 1 to 20 to be 21 but not used in thes operation
  [+c++]
    - Value: 80
    - Explain: first + did not use ,
      post increment didn`t used 
  [-]
    - Explain: subtraction operater
  [+a++]
    - Value: 11
    - Explain:+ not use ,
      post increment not use in this operathon
*/

// ##################################################

  console.log(++a + -b + +c++ - -a++ + +a);

// [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a] 
/*
  [++a]
    - Value: 13
    - Explain: pre increment add 1 to 11
  [+]
    - Explain: addition operater
  [-b]
    - Value: -21
    - Explain: (-) add negateve to 21
  [+c++]
    - Value: 81 
    - Explain: first (+) didn`t make any thing,
      pre increment
  [-]
    - Explain: subtraction operater
  [-a++]
    - Value: 13
    - Explain:(-) didnt do any thing,
    post incremint make vali of a = 14
  [+a]
    - Value: 14
    - Explain:(+) didnt make any thing
*/

//  ######################################################

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*]
// [a] [+] [--a] [-] [+true]

/*
  [--c]
    - Value: 81
    - Explain: Pre decrement - 1 from 82 make it 81
  [+b]
    - Value: 21
    - Explain: + change - to +
  [--a]
    - Value: 13
    - Explain: pre decrement 
  [+b++]
    - Value: 21
    - Explain: post increment
  [+b]
    - Value: 21
    - Explain: (+) didn`t make any thing
  [a]
    - Value: 13
    - Explain:
  [--a]
    - Value: 12
    - Explain: pre decrement 
  [+true]
    - Value: 1
    - Explain:(+) changing string to number
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-++g * +--d - --f); // 173
