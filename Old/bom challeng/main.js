

let mybutton = document.querySelector(".add");
let input = document.querySelector(".input");
let mytasks = document.querySelector(".tasks");

mybutton.onclick = function (){
  
    input.onblur = function(){
        window.localStorage.setItem("input-name", 'test');


        let inputdata = JSON.parse(localStorage.getItem('input-name'));
        document.querySelector(".tasks").textContent = inputdata;
        


    };
};






