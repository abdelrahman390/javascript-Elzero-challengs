/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/


showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(30, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


function showDetails (a, b, c) {
    info = [a, b, c];
    for (i = 0; i < 5; i++) {
    if (typeof info[i] === "string"){
    first = info[i];
    } else if (typeof info[i] === "number"){
    second = info[i];
    } else if (typeof info[i] === "boolean"){
    if ( info[i] === true){
    third = "Available";
    } else{ 
    third = "Not Available";
          }
        }
      }
    }

    //Try to change positions it will work
    document.write(` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire`);
    document.write(`<hr>`)
    document.write(` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire`);
    document.write(`<hr>`)
    document.write(` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire`);







