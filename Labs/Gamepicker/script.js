// Spellenarray
const games = [
    { title: "Game 1", price: 29.99, genre: "Action", rating: 4.5 },
    { title: "Game 2", price: 39.99, genre: "Adventure", rating: 4.0 },
    { title: "Game 3", price: 24.99, genre: "RPG", rating: 4.2 },
    { title: "Game 4", price: 49.99, genre: "Shooter", rating: 4.7 },
    { title: "Game 5", price: 19.99, genre: "Platformer", rating: 3.8 },
    { title: "Game 6", price: 34.99, genre: "Puzzle", rating: 4.1 },
    { title: "Game 7", price: 29.99, genre: "Simulation", rating: 4.3 },
    { title: "Game 8", price: 44.99, genre: "Strategy", rating: 4.6 }
];
  
  // Functie om totaaloverzicht van spellen weer te geven
  function showGameList() {
    document.getElementById("gameList").style.display = "block";
    document.getElementById("cart").style.display = "none";
    document.getElementById("gameList").innerHTML = ""; // Leeg de inhoud om dubbele weergave te voorkomen
    games.forEach(game => {
      const gameElement = document.createElement("div");
      gameElement.classList.add("game");
      gameElement.innerHTML = `
        <h2>${game.title}</h2>
        <p>Prijs: €${game.price.toFixed(2)}</p>
        <p>Genre: ${game.genre}</p>
        <p>Rating: ${game.rating}</p>
        <button onclick="addToCart('${game.title}')">Toevoegen aan winkelmandje</button>
      `;
      document.getElementById("gameList").appendChild(gameElement);
    });
}
  

// Functie om spel toe te voegen aan winkelmandje
function addToCart(title) {
    const selectedGame = games.find(game => game.title === title);
    const gameElement = document.createElement("div");
    gameElement.classList.add("game");
    gameElement.innerHTML = `
      <h2>${selectedGame.title}</h2>
      <p>Prijs: €${selectedGame.price.toFixed(2)}</p>
      <button onclick="removeFromCart(this)">Verwijderen</button>
    `;
    document.getElementById("cart").appendChild(gameElement);
    calculatePrice(); // Call the calculatePrice() function
    displayShoppingCart(calculatePrice()); // Call the displayShoppingCart() function
  }

// Functie om prijs te berekenen en winkelmandje weer te geven
function calculatePrice() {
    let totalPrice = 0;
    const selectedGames = document.querySelectorAll("#cart .game");
    selectedGames.forEach(game => {
      const priceString = game.querySelector("p:nth-child(2)").textContent;
      const price = parseFloat(priceString.replace("Prijs: €", ""));
      totalPrice += price;
    });
    displayShoppingCart(totalPrice);
}
  
// Functie om het winkelmandje weer te geven
function displayShoppingCart(totalPrice) {
    const cartElement = document.getElementById("cart");
    cartElement.style.display = "block";
    document.getElementById("gameList").style.display = "none";
  
    // Clear the existing content of the cart
    cartElement.innerHTML = "";
  
    // Create the new cart content
    const cartContentElement = document.createElement("div");
    cartContentElement.innerHTML = `
      <h2>Winkelmandje</h2>
      <p>${document.querySelectorAll("#cart .game").length} spel(len) in winkelmandje</p>
      <p>Totaalprijs: €${totalPrice.toFixed(2)}</p>
      <button onclick="showGameList()">Terug naar overzicht</button>
    `;
    cartElement.appendChild(cartContentElement);
  
    // Add the remove buttons for each game in the cart
    const selectedGames = document.querySelectorAll("#cart .game");
    selectedGames.forEach(game => {
      const removeButton = document.createElement("button");
      removeButton.textContent = "Verwijderen";
      removeButton.onclick = function() {
        game.remove(); // Verwijder het spel uit de DOM
        calculatePrice(); // Herbereken de totaalprijs
      };
      game.appendChild(removeButton);
    });
}


function filterByPrice() {
    const maxPrice = parseFloat(document.getElementById("priceFilter").value);
    const filteredGames = games.filter(game => game.price < maxPrice);
    displayFilteredGames(filteredGames);
}
  
function filterByGenre() {
    const selectedGenre = document.getElementById("genreFilter").value;
    const filteredGames = games.filter(game => game.genre === selectedGenre);
    displayFilteredGames(filteredGames);
}
  
function filterByRating() {
    const minRating = parseFloat(document.getElementById("ratingFilter").value);
    const filteredGames = games.filter(game => game.rating <= minRating);
    displayFilteredGames(filteredGames);
}
  
  // Functie om het filtered games weer te geven
function displayFilteredGames(filteredGames) {
    document.getElementById("gameList").style.display = "block";
    document.getElementById("cart").style.display = "none";
    document.getElementById("gameList").innerHTML = ""; // Leeg de inhoud om dubbele weergave te voorkomen
    filteredGames.forEach(game => {
      const gameElement = document.createElement("div");
      gameElement.classList.add("game");
      gameElement.innerHTML = `
        <h2>${game.title}</h2>
        <p>Prijs: €${game.price.toFixed(2)}</p>
        <p>Genre: ${game.genre}</p>
        <p>Rating: ${game.rating}</p>
        <button onclick="addToCart('${game.title}')">Toevoegen aan winkelmandje</button>
      `;
      document.getElementById("gameList").appendChild(gameElement);
    });
}
  






  