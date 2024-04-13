const aantalPerRij = 5;
const aantalButtons = 30;
const container = document.getElementById('container');
const buttons = [];
const clickCounts = [];

const colors = ['green', 'red','black']; // Array met gewenste kleuren

for (let i = 0; i < aantalButtons; i++) {
  const button = document.createElement('button');
  button.style.backgroundColor = colors[0]; // Startkleur
  button.textContent = i + 1;
  container.appendChild(button);
  buttons.push(button);
  clickCounts.push(0);

  button.addEventListener("click", function() {
    clickCounts[i]++;

    // Kleur aanpassen
    button.style.backgroundColor = colors[clickCounts[i] % colors.length];

    // Bericht tonen
    console.log(`Button ${i + 1} is ${clickCounts[i]} keer aangeklikt!`);

    if (clickCounts[i] === colors.length) {
      buttons[i].remove();
      console.log('Button verwijderd!');
    }
  });

  if ((i + 1) % aantalPerRij === 0) {
    container.appendChild(document.createElement("br"));
  }
}