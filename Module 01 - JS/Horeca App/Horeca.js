let uitkomst = "";
let poging = 7;

const drankjes = ["fris", "bier", "wijn"];
const prijzen = {"fris": 1.62, "bier": 2.62, "wijn": 9.99};

let BTW = 0.21;
let total = 0;
let bestellingen = {};

function toonRekening() {
  uitkomst = "Uw rekening is " + total.toFixed(2) + " euro (inclusief " + (BTW * 100) + "% BTW).";
  console.log(uitkomst);
  
  let bon = "<h2>Uw bestelling:</h2>";
  for (let drank of drankjes) {
    if (bestellingen[drank] > 0) {
      bon += `<p>${drank}: ${bestellingen[drank]} x €${prijzen[drank].toFixed(2)} = €${(bestellingen[drank] * prijzen[drank]).toFixed(2)}</p>`;
    }
  }
  bon += `<p>Totaal: €${total.toFixed(2)}</p>`;
  
  document.getElementById("bon").innerHTML = bon;
}

function voegBestellingToe() {
  let vraag = prompt("Wat wilt u bestellen?: ");

  if (!drankjes.includes(vraag)) {
    console.log("Dit kan ik niet.");
    poging--;
    if (poging == 0) {
      console.log("U heeft te vaak een ongeldige keuze ingevoerd!");
      toonRekening();
      return;
    } else {
      voegBestellingToe();
      return;
    }
  } else {
    console.log("Uw bestelling is: " + vraag);
    let hoeveelheid = parseInt(prompt("Hoeveel " + vraag + " drankjes wilt u hebben?"));
    if (hoeveelheid > 0) {
      let bonnetje = hoeveelheid * prijzen[vraag];
      total += bonnetje;
      bestellingen[vraag] = (bestellingen[vraag] || 0) + hoeveelheid;
      console.log("U heeft " + hoeveelheid + " " + vraag + " besteld voor " + bonnetje.toFixed(2) + " euro per stuk.");
    }
    toonRekening();
  }
}



let v = "ja";
while (v == "ja") {
  voegBestellingToe();
  v = prompt("Wilt u nog iets bestellen? Typ 'ja' of 'nee'");
  if (v == "nee"){
    toonRekening()
  }
}



