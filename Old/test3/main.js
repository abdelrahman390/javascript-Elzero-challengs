


for (let i = 0; i <= 100; i++){

    let myElement = document.createElement("div");
    let myh3 = document.createElement("h3");
    let myp = document.createElement("p");
    let myh3text = document.createTextNode("product_one");
    let myptext = document.createTextNode("text");
    
    
    myElement.appendChild(myh3);
    myElement.appendChild(myp);
    myh3.appendChild(myh3text);
    myp.appendChild(myptext);
    
    
    document.body.appendChild(myElement);
}










