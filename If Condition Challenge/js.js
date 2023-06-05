/*
  If Condition Challenge
*/

let a = 50;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}


a < 10 
? console.log(10) 
:  a >= 10 && a <= 40 
? console.log("10 to 40") 
: a > 40 
? console.log("> 40") 
: console.log("unknown"); 


// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";


if ((st.length * 2).toString() === "34") {
    console.log("Good1");
  }

// W Position May Change
if ( st.charAt(st.search("W")) === "W") {
  console.log("Good2");
}

if ("????" !== "string") {
  console.log("Good3");
}

ex = "number"

if ( ex === "number") {
  console.log("Good4");
}

if ( st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good5");
}

