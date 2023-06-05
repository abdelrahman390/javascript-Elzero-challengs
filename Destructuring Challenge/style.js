/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];






// switch(chosen) {
//   case 1:
//     chose(chosen);
//     break;
//   case 2:
//       chose(chosen);
//     break;
//   case 3:
//       chose(chosen);
//     break;
//   default:
//     console.log("not found")
// }

// function chose(i) {
//     let [{title, age , available, skills: [,two]},,] = myFriends;
//     if(i == 1)  [{title, age , available, skills: [,two]},,] = myFriends;
//     if(i == 2)  [,{title, age , available, skills: [,two]},] = myFriends;
//     if(i == 3)  [,,{title, age , available, skills: [,two]}] = myFriends;

//     if(available) {
//         available = "available";
//         console.log(title);
//         console.log(age);
//         console.log(available);
//         console.log(two);
//     }else {
//         available = "not available";
//         console.log(title);
//         console.log(age);
//         console.log(available);
//         console.log(two);
//     }

// }


// my solutions


let {title , age, available, skills : [, b]} = myFriends[chosen - 1]

    console.log(title)
    console.log(age)
      if (available === true){
    console.log("available")
    }else{
      console.log("not available")
    }
    console.log(b)

// #################################################

// if (chosen === 1 ){
//   console.log(myFriends[0].title)
//   console.log(myFriends[0].age)
//   if (myFriends[0].available === true){
//     console.log("available")
//   }else{
//     console.log("not available")
//   }
//   console.log(myFriends[0].skills[1])
// }

// if (chosen === 2 ){
//   console.log(myFriends[1].title)
//   console.log(myFriends[1].age)
//   if (myFriends[1].available === true){
//     console.log("available")
//   }else{
//     console.log("not available")
//   }
//   console.log(myFriends[1].skills[1])
// }

// if (chosen === 3 ){
//   console.log(myFriends[2].title)
//   console.log(myFriends[2].age)
//   if (myFriends[2].available === true){
//     console.log("available")
//   }else{
//     console.log("not available")
//   }
//   console.log(myFriends[2].skills[1])
// }