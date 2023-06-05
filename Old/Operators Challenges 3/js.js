let a = 10;
let b = "20";
let c = 80;


console.log(++a + +b++ + +c++ - +a++);


/*
  [++a] [+]
  [++a]
  - Value:[++a] =11 , [+b] = [+b++] =20 , [+c++] =80 , [-]
  - Explain:++ after number = add 1 number , 
  [+]
*/


console.log(++a + -b + +c++ - -a++ + +a);


/*
  [++a] [+]
  [++a]
  - Value:[++a] = 13 , 
  - Explain:
  [+]
  - Explain:
*/


console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);




let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+-d * 20); // 2000
console.log(++e*2 + f + +-d +true); // 173






