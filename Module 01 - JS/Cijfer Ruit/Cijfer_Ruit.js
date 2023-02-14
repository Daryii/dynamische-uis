let vraag = parseInt(prompt("voer een getal in: "))
let output = "";

for (let i = 1; i <= vraag;i++){
    for (let c = 1; c <= i;c++){
        output += c + "-";
    }
    output = output.slice(0,-1);
    output += "<br>";
}

for (let i = vraag - 1; i >= 1;i--){
    for (let c = 1; c <= i;c++){
        output += c + "-";
    }
    output = output.slice(0,-1);
    output += "<br>";
}



document.getElementById("output").innerHTML = output;

