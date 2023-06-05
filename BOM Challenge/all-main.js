/*
steps: 1- when click on {add tast} git inner valiu and add it to lokal storage

2- get the stored text in local storage and put it in div 

3- add delet button to div that have text to delet it

*/

// window.localStorage.clear()





 // 1 - must refrish to delet just added items from local storag 

/*
    2- when two tasks is same when delet one of them there are delet both two from local storag 
    but will delet one only on page and must refrish to delet two from page
*/
// $$$$$$$$$$$$$



let addButton = document.querySelector(".add");
let input = document.querySelector(".input");
let added = document.querySelector(".task");
let reset = document.querySelector(".reset");
let myArray = []
let delButton = document.createElement("button")
let contentBox = document.createElement("div")


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
        event.preventDefault();
      // Trigger the button element with a click
        addButton.click();
        location.reload = function (){
            input.focus();
        }
    }
});


// condetion
if (window.localStorage.getItem("name")){

            myArray = JSON.parse(window.localStorage.getItem("name"))

                    myArray.forEach(data => {
                
                    let contentBox = document.createElement("div")
                    let cerh1 = document.createElement("h2")
                    let delButton = document.createElement("button")

                    
                    delButton.id = data.name;
                    cerh1.className = "task-box"
                    delButton.innerText = "Delete"
                    contentBox.className = "dilBox"
                    delButton.className = "dilButton"


                    // contentBox.style.cssText = "display: flex; justify-content: space-between; width: 60%; margin: auto; background-color: white; padding: 10px; align-items: center; border-radius: 10px; margin-bottom: 30px;"
                    // delButton.style.cssText = "border: none; background-color: red; color: white; border-radius: 5px; padding: 15px; cursor: pointer;"

                    cerh1.appendChild(delButton)
                    added.appendChild(contentBox)
                    contentBox.appendChild(cerh1)
                    contentBox.appendChild(delButton)

                        // i make id for elemint olredy exest in local storage with that code
                        // let testbutton = document.querySelectorAll(".dilButton")
                        // let i = 0;
                        // testbutton.forEach(data => {
                        //     delButton.id = i = i + 1
                        //     }) 
                    
                    cerh1.innerHTML = data.name;

            })

}



// add to page and local storag
    addButton.onclick = function () {

        if (input.value === "" ){
            return;
        } else{

            myArray.push(JSON.parse(`{"id": "${"#"}","name": "${input.value}"}`))
            window.localStorage.setItem("name", JSON.stringify(myArray))

                    let contentBox = document.createElement("div")
                    let cerh1 = document.createElement("h2")
                    let delButton = document.createElement("button")
                    

                    delButton.id = input.value
                    cerh1.className = "task-box"
                    delButton.innerText = "Delete"
                    contentBox.className = "dilBox"
                    delButton.className = "dilButton"

                    // contentBox.style.cssText = "display: flex; justify-content: space-between; width: 60%; margin: auto; background-color: white; padding: 10px; align-items: center; border-radius: 10px; margin-bottom: 30px;"
                    // delButton.style.cssText = "border: none; background-color: red; color: white; border-radius: 5px; padding: 15px; cursor: pointer;"

                    cerh1.appendChild(delButton)
                    added.appendChild(contentBox)
                    contentBox.appendChild(cerh1)
                    contentBox.appendChild(delButton)
                    // console.log(cerh1.nextSibling.className)
                    // i make id for elemint that just added to page
                    // let testbutton = document.querySelectorAll(".dilButton")
                    // testbutton.forEach(data => {
                    //     delButton.id = Object.values(myArray).length 
                    //     }) 

                    cerh1.innerHTML = input.value

            input.value = ""

            // location.reload()
            // location.reload() = function (){
            //     input.focus();
            // }
            
        }
}





// delet task from page
let button = document.querySelectorAll(".dilButton")

button.forEach((t) =>{

    t.onclick = function () {

        t.parentElement.remove()
        
                // this new variable always will be number of local storage
                var items = JSON.parse(localStorage.getItem('name'));

                for(i = 0; i <= myArray.length; i ++){
                    
                    console.log(`${items[i].name} === ${t.id}`) 

                    let testmyArray = myArray.filter((task) => task.name != t.id)
                    
                    console.log(testmyArray) 

                    myArray = testmyArray

                   
                    console.log(myArray)

                    localStorage.setItem("name", JSON.stringify(myArray))
                    // console.log(myArray.length)
                    
                    // testmyArray = myArray
                    
                    // console.log(myArray)



        // var items = JSON.parse(localStorage.getItem('name'));
        //     console.log(items) 
        //     items.splice(t.id - 1, 1);
        //     console.log(items)
        //     items = JSON.stringify(items)   
        //     console.log(items)
        //     localStorage.setItem("name", items)



                }



    }
})

// window.localStorage.clear()

// we cant use it after refrish ///// it returns number only
var arrayLingth = Object.values(myArray).length
// console.log(arrayLingth)

reset.onclick = function  (){
    window.localStorage.clear()
}




// console.log(myArray)



