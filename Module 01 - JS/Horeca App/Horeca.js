
let uitkomst = ""
let pogging = 7
const drank = ["fris","bier","wijn"]

let fris_prijs = 1.62
let bier_prijs = 2.62
let wijn_prijs = 9.99


let BTW = 0.21;
let subtotal = 0;
let total = 0;


// // Calculate taxes and total
// tax = subtotal * TAX_RATE;
// total = subtotal + tax;


while (pogging > 0) {
    let vraag = prompt("Wat wilt uw bestellen?: ");
    if (!drank.includes(vraag)) {
        console.log("Dit kan ik niet.");
        pogging --;
    } else {
        console.log("uw bestelling is: " + vraag)
        c = false;
        break;
    }
    let vraag_2 = parseInt(prompt("Hoeveel"+ vraag +"drankjes wilt u hebben"))
    if (vraag_2 > 0) {
    
        document.getElementById("bonnetje").innerHTML = bonnetje;

        sum = 
        console.log(sum)
    }



}
if (pogging == 0){
    console.log("uw hebt te vaak ongeldige keuze ingevoerd!")
}



document.getElementById("uitkomst").innerHTML = uitkomst;




