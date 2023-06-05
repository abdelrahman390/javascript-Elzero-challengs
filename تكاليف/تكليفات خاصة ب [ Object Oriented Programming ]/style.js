




// ################## Asighn mint one #############

// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
  
// class user {
//     constructor(name, model, price){
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//      ditails() {
//         return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`
//     }
//     run(){
//         return "Car Is Running Now"
//     }
// }

// let carOne = new user("MG", 2022, 42000)
// let carTwo = new user("kia", 2020, 56000)
// let carThree = new user("mersedes", 2022, 90000)

// console.log(carOne.ditails())
// console.log(carTwo.ditails())
// console.log(carThree.ditails())

  // Needed Output  
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"
// ########################################### asignmint two ###########################

// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }
// class Tablet extends Phone{
//     constructor (name, serial, price, size = "Unknown"){
//         super (name, serial, price)
//         this.s = size 
//     }
//     fullDetails(){
//         return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`
//     }
// }
  
//   // Write Tablet Class Here
  
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);
  
//   console.log(`${TabletOne.fullDetails()}`);
//   // iPad Serial is 100200300 And Size Is 12.9
  
//   console.log(`${TabletTwo.fullDetails()}`);
//   // Nokia Serial is 350450650 And Size Is 10.5
  
//   console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown

// ######################### asignmint three #############################

// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    cardForm(){
        let reg = /\d{4}-\d{4}-\d{4}-\d{4}/i;
        if(reg.test(this.#c) === true){
            return this.#c
        } else{
            let first = this.#c.slice(0,4)
            let sec = this.#c.slice(4,8)
            let the = this.#c.slice(8,12)
            let four = this.#c.slice(12,16)
            let cardFinal = `${first}-${sec}-${the}-${four}`
            return cardFinal;
        }
    }
    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`
    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "5829567812345678");
  let userThree = new User("Ghareeb", "7410567812345678");
  
  console.log(userOne.cardForm());
  console.log(userTwo.cardForm());
  console.log(userThree.cardForm());

  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined
