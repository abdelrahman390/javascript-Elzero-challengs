
let header = document.createElement("header");
let headerh3 = document.createElement("h3");
let hh3 = document.createTextNode("Elzero");
let headerlist = document.createElement("ul");
let headerli1 = document.createElement("li");
let headerli2 = document.createElement("li");
let headerli3 = document.createElement("li");
let headerli4 = document.createElement("li");

let headtext1 = document.createTextNode("aaaaa");
let headtext2 = document.createTextNode("bbbbb");
let headtext3 = document.createTextNode("ddd");
let headtext4 = document.createTextNode("ccccc");


header.style.backgroundColor = "#BFB6B5";

headerli1.id = "li";
headerli2.id = "li";
headerli3.id = "li";
headerli4.id = "li";

header.appendChild(headerh3);
headerh3.appendChild(hh3);
header.appendChild(headerlist);
headerlist.appendChild(headerli1);
headerlist.appendChild(headerli2);
headerlist.appendChild(headerli3);
headerlist.appendChild(headerli4);



headerli1.appendChild(headtext1);
headerli2.appendChild(headtext2);
headerli3.appendChild(headtext3);
headerli4.appendChild(headtext4);

document.body.appendChild(header);

document.write(header);