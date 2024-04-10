let tafelArr = [2,4,6,8];

function vermenigvuldigen() {
    tafelArr.forEach(tafelgetal => {
        for (let i = 1; i < 11; i++){
            let sum = tafelgetal * i;  
            let resultaatString = `${tafelgetal} x ${i} = ${sum}`; 
            let divId = "tafel" + tafelgetal;
            let Vlijst = document.getElementById(divId);
            let resultaatContainer = document.createElement("p");
            resultaatContainer.textContent = resultaatString;
            Vlijst.appendChild(resultaatContainer);
        }
    });  
}
    
vermenigvuldigen();