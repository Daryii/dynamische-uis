let uitkomst = "";
let poging = 7;

const drankjes = ["fris","bier","wijn"];
const prijzen = {"fris": 1.62, "bier": 2.62, "wijn": 9.99};

let BTW = 0.21;
let total = 0;

function toonRekening() {
  uitkomst = "Uw rekening is " + total.toFixed(2) + " euro (inclusief " + (BTW * 100) + "% BTW).";
  document.getElementById("uitkomst").innerHTML = uitkomst;
}

function voegBestellingToe() {
  let vraag = prompt("Wat wilt u bestellen?: ");
  if (!drankjes.includes(vraag)) {
    console.log("Dit kan ik niet.");
    poging--;
    if (poging == 0) {
      console.log("U heeft te vaak een ongeldige keuze ingevoerd!");
      toonRekening();
    } else {
      voegBestellingToe();
    }
  } else {
    console.log("Uw bestelling is: " + vraag);
    let hoeveelheid = parseInt(prompt("Hoeveel " + vraag + " drankjes wilt u hebben?"));
    if (hoeveelheid > 0) {
      let bonnetje = hoeveelheid * prijzen[vraag];
      total += bonnetje;
      console.log("U heeft " + hoeveelheid + " " + vraag + " besteld voor " + bonnetje.toFixed(2) + " euro.");
    }
    toonRekening();
  }
}

voegBestellingToe();


