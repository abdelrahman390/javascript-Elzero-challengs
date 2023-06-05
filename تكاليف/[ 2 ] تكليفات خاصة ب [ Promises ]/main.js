
let mypromise = (xmlLink) =>{
    return new Promise((resolved) => {
        let myRequest = new XMLHttpRequest();
    
        myRequest.open("Get", xmlLink)
        myRequest.send()
        myRequest.onload = function () {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                resolved(JSON.parse(this.responseText)) 
            }
        }
    })
}

mypromise("style.json").then(
    (resolve) => {
        resolve.length = 5
        for (let i = 0; i < resolve.length; i++){
            let mainDiv = document.createElement("div")
            let h1title =  document.createElement("h1")
            let h1Text = document.createTextNode(resolve[i].title);

            mainDiv.appendChild(h1title);
            h1title.appendChild(h1Text);
            document.body.appendChild(mainDiv);

            let ptitle =  document.createElement("p")
            let pText = document.createTextNode(resolve[i].description);

            ptitle.appendChild(pText);
            mainDiv.appendChild(ptitle);

            

        }

        return resolve;
    }
).then(
    (final) => {
        console.log(final)

        let Hash = document.createElement("div")
        let HashInner = document.createTextNode("################## With Fetch API ########################")

        Hash.appendChild(HashInner);
        document.body.appendChild(Hash);
    }
    
)

// ########################### with Fetch API ####################

fetch("style.json").then(
(res) => {
    let myData = res.json()
    console.log(myData)
    return myData
}
).then(
(res) => {
        res.length = 5
        for (let i = 0; i < res.length; i++){
            let mainDiv = document.createElement("div")
            let h1title =  document.createElement("h1")
            let h1Text = document.createTextNode(res[i].title);

            mainDiv.appendChild(h1title);
            h1title.appendChild(h1Text);
            document.body.appendChild(mainDiv);

            let ptitle =  document.createElement("p")
            let pText = document.createTextNode(res[i].description);

            ptitle.appendChild(pText);
            mainDiv.appendChild(ptitle);

        }
        console.log(res)
})
