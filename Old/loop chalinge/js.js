





let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let i = 0;

document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<hr>`);
    document.write(`<div>The Admin for team ${i + 1} is ${myAdmins[i]}</div>`);
    document.write(`<h1> team members :</h1>`);
    for (let j = 0, n = 1; j < myEmployees.length; j++) {
        if (myEmployees[j][0].toLowerCase() === myAdmins[i][0].toLowerCase()) {
          document.write(`<p>- ${n} ${myEmployees[j]}</p>`);
          n++;
        }
}
}





