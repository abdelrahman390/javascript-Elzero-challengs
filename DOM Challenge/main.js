
document.body.style.cssText = ("margin: 0; background-color: #d7d7d7; font-family: Arial, Tahoma;")

let screptTage = document.getElementsByTagName("script")
let MyHeader = document.createElement("header");
let headH3 = document.createElement("h3")
let headerul = document.createElement("ul");

// loop to make li and style
let liName = ["Home", "about", "More", "Contact"];
for (let i = 0; i < liName.length; i++){
    let li = document.createElement("li");
    li.style.margin = "5px"
    li.style.color = "black"
    li.style.listStyle = "none"
    li.style.display = "inline-block"
    li.style.opacity = "0.7"
    li.innerText = liName[i]
    headerul.appendChild(li)
    };
// iner text in %%Header%%
headH3.innerText = "Elzero";
// appending child in %% Header %%
MyHeader.appendChild(headH3);
MyHeader.appendChild(headerul);
// styling in %% Header %%
MyHeader.style.cssText = "display: flex; padding: 20px; background-color: white; justify-content: space-between; align-items: center;"
// ############################################# Header End #########################################################

let container = document.createElement("div");
// let span = document.createElement("span")
container.style.cssText = " display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;"

for (i = 0; i < 16; i++){
    let boxes = document.createElement("div");
    boxes.style.cssText = " padding: 20px; background-color: #ff9595; width: calc((100% - 40%) / 3); box-sizing: border-box; text-align: center; color: aliceblue; border-radius: 6px;"
    let spans = document.createElement("span");
    spans.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;"
    boxes.innerText = "Products"
    spans.innerText = [i + 1]
    boxes.prepend(spans)
    container.appendChild(boxes);
}
// ########################################## body End #########################################

let footer = document.createElement("footer");
footer.innerText = "copyright 2023"
footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; padding: 20px; display: flex; color: white; align-items: center; height: 50px; justify-content: center;"


// appended child in web page
document.body.prepend(footer)
document.body.prepend(MyHeader)
MyHeader.after(container)






