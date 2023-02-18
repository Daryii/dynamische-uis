
// let uitkomst = ""
// let pogging = 7
// const drank = ["fris","bier","wijn"]

// let fris_prijs = 1.62
// let bier_prijs = 2.62
// let wijn_prijs = 9.99

// let BTW = 0.21;
// let total = 0;

// while (pogging > 0) {
//     let vraag = prompt("Wat wilt uw bestellen?: ");
//     if (!drank.includes(vraag)) {
//         console.log("Dit kan ik niet.");
//         pogging --;
//     } else {
//         console.log("uw bestelling is: " + vraag)
//         c = false;
//         break;
//     }
// let Hoeveelheid = parseInt(prompt("Hoeveel"+ vraag +"drankjes wilt u hebben"))
// if (Hoeveelheid > 0) {
//     let bonnetje = Hoeveelheid * parseInt(vraag)
//     let sum = total * BTW
//     total += sum;
//     console.log(bonnetje)

// }

// }
// if (pogging == 0){
//     console.log("uw hebt te vaak ongeldige keuze ingevoerd!")
// }



// document.getElementById("uitkomst").innerHTML = uitkomst;




// Array van drankjes en hun prijzen
const drankjes = {
	bier: 2.50,
	wijn: 4.00,
	frisdrank: 1.50
};

// Array van bestellingen
let bestellingen = [];

// Toevoegen van een bestelling
function addBestelling() {
	const drankje = document.getElementById("drankje").value;
	const aantal = parseInt(document.getElementById("aantal").value);

	if (!isNaN(aantal) && aantal > 0) {
		bestellingen.push({drankje: drankje, aantal: aantal});
		updateBestellingen();
	}
}

// Tonen van de bestellingen
function updateBestellingen() {
	let bestellingenHTML = "";
	bestellingen.forEach(function(bestelling) {
		bestellingenHTML += "<li>" + bestelling.aantal + "x " + bestelling.drankje + "</li>";
	});
	document.getElementById("bestellingen").innerHTML = bestellingenHTML;
}

// Berekenen van de rekening
function berekenRekening() {
    let rekening = "";

	// Berekenen van de kosten per type drankje
	const kostenPerType = {};
	bestellingen.forEach(function(bestelling) {
		const prijs = drankjes[bestelling.drankje];
		const kosten = prijs * bestelling.aantal;
		if (bestelling.drankje in kostenPerType) {
			kostenPerType[bestelling.drankje] += kosten;
		} else {
			kostenPerType[bestelling.drankje] = kosten;
		}
	});

	// Toevoegen van de kosten per type drankje aan de rekening
	Object.keys(kostenPerType).forEach(function(drankje)

}
