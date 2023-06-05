/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
/* $$$$$$$$$$$$  NEW CODES %%%%%%%%%%%%%%%

    replaceAll("_", " ")


*/ 



// ########################### MY SOLUTION ##################################

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").filter(function (ele) {
//     return isNaN(parseInt(ele))  ? ele : "";
// }).reverse().slice(true).reverse().map(function (ele){
//     return ele.length > ele.length / ele.length ? ele.slice(ele.length / ele.length) : ele ;
// }).join("").split("_").reduce(function (acc,cur){
//     return `${acc} ${cur}`
// });

// console.log(solution); // Elzero Web School

// ########################### OTHER 1 SOLUTION ##################################

// let solutionTWo = myString.split(",").filter((element) => { return (isNaN(parseInt(element))) && (element !== ",");})
// .map((element, index, array) => {if (element.length > (+(isNaN(",")))) 
// {return array[index]= array[index][+(!isNaN(","))];} else {return element;} })
// .slice(!(isNaN("_")), length-isNaN(",") , length-(isNaN("_")))
// .reduce((word, letter)=>{if (letter == "_"){return word += " ";} else {return word += letter;}});

// console.log(solutionTWo);

// ########################### OTHER 2 SOLUTION ##################################

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split("").filter(function(ele){
//     return (ele >= 'a' && ele <= 'z') || (ele >= 'A' && ele <= 'Z') || ele === "_";
// }).reduce(function(acc, current){
//     return `${acc}${current}`;
// }).slice(true).replaceAll("_", " ");

// console.log(solution);

// ########################### OTHER 3 SOLUTION ##################################

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split(",").filter((ele) => isNaN(Number.parseInt(ele)))
//   .map((ele, ind, arr) => {
//     arr.length = arr.length--;
//     return ele.replace("_", " ");
//   })
//   .reduce((acc, ele) => acc + ele)
//   .slice(true);

//   console.log(solution)
