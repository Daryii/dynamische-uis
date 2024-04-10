let userInput = parseInt(prompt("Voer een getal in:")); 

let priamideArr = [];
for (let i = 0; i <= userInput; i++) {
    priamideArr.push(i);
}

for (let i = userInput + 1; i >= 0; i--) {
    let resultaatContainer = document.createElement("p");
    resultaatContainer.textContent = priamideArr.slice(0, i).join(" ");
    document.getElementById("main-container").appendChild(resultaatContainer);

}