

// let myRequest = new XMLHttpRequest();

// myRequest.open("Get", "articles.json")
// myRequest.send()
// myRequest.onreadystatechange = function() {
//     if (myRequest.readyState === 4 && myRequest.status === 200) {

//       let pageCobed = JSON.parse(this.responseText);

//       console.log(myRequest.responseText)

//       for (let i = 0; i < pageCobed.length; i++) {
//             let myh1 = document.createElement("h1");
//             let h1Text = document.createTextNode(pageCobed[i].name);
//             myh1.appendChild(h1Text);
//             document.body.appendChild(myh1);
            
//       }
//       console.log("Data Loaded")
//     }
//   }

// ###################### third asighnmint #####################


let myRequest = new XMLHttpRequest();

myRequest.open("Get", "articles.json")
myRequest.send()
myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4 && myRequest.status === 200) {

      let mainData = JSON.parse(this.responseText);

      for (let i = 0; i < mainData.length; i++) {

        mainData[i].article_sec ="All"

      }
      // console.log(mainData)

      let updatedData = JSON.stringify(mainData)
      // console.log(updatedData)
      // let myTest = JSON.parse(updatedData)
      // console.log(myTest)

let myKeys = Object.keys(mainData[1])
// console.log(myKeys)

// myKeys.forEach(function(mm) {
//   console.log(mm);
// });

      let mainDiv = document.createElement("div");
      for (let i = 0; i < mainData.length; i++){

            let scoopeDiv = document.createElement("div");

            let myKeys = Object.keys(mainData[i])

            console.log(myKeys);
            myKeys.forEach(function(mm) { 
            console.log(mm);

            let id = document.createElement("h1");
            let idText = document.createTextNode(mainData[i].myKeys[1]);
            id.appendChild(idText);
            scoopeDiv.appendChild(id);

            });
            console.log(myKeys)


                        // let id = document.createElement("h1");
            // let idText = document.createTextNode(`Title ${mainData[i].id}`);
            // id.appendChild(idText);
            // scoopeDiv.appendChild(id);

            // let name = document.createElement("p");
            // let nameText = document.createTextNode(mainData[i].name);
            // name.appendChild(nameText);
            // scoopeDiv.appendChild(name);

            // let article_sec = document.createElement("p");
            // let article_secText = document.createTextNode(mainData[i].article_sec);
            // article_sec.appendChild(article_secText);
            // scoopeDiv.appendChild(article_sec);

            // let article_title = document.createElement("p");
            // let article_titleText = document.createTextNode(mainData[i].article_title);
            // article_title.appendChild(article_titleText);
            // scoopeDiv.appendChild(article_title);

            // let article = document.createElement("p");
            // let articleText = document.createTextNode(mainData[i].article);
            // article.appendChild(articleText);
            // scoopeDiv.appendChild(article);

            mainDiv.appendChild(scoopeDiv);

            document.body.appendChild(mainDiv)

      }

    }
  }