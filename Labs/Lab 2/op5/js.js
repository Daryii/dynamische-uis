let userInput = parseInt(prompt("Voer een getal in:")); 

let priamideArr = [];
for (let i = 0; i <= userInput; i++) {
    priamideArr.push(i);
}

for (let i = 0; i <= userInput; i++) {
    let resultaatContainer = document.createElement("p");
    resultaatContainer.textContent = priamideArr.slice(0, i + 1).join(" ");
    document.getElementById("main-container").appendChild(resultaatContainer);
}