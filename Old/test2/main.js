let mainTitles = "Elzero",
    pageDescription = "Elzero Web School",
    todayDate = "25/10";

let pageContent = 
    `<div class="card">
      <h3>Hello ${mainTitles} </h3>
      <p>${pageDescription}</p>
      <span>${todayDate}</span>
     </div>`;

document.write(pageContent.repeat(4))