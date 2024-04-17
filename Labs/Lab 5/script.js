        // JavaScript om gegevens op te halen en weer te geven

        // Functie om gegevens van meerdere personen op te halen en weer te geven
        function showPeopleInfo(data) {
            // Element vinden om personen in weer te geven
            var container = document.getElementById('personContainer');

            // Voor elke persoon in de data
            data.forEach(person => {
                // Maak een div element aan voor de persoon
                var personDiv = document.createElement('div');
                personDiv.className = 'person-info';

                // Voeg de gegevens van de persoon toe aan de div
                personDiv.innerHTML = `
                    <h2>Gegevens van de persoon:</h2>
                    <p><strong>Voornaam:</strong> ${person.voornaam}</p>
                    <p><strong>Achternaam:</strong> ${person.achternaam}</p>
                    <p><strong>Nationaliteit:</strong> ${person.nationaliteit}</p>
                    <p><strong>Leeftijd:</strong> ${person.leeftijd}</p>
                    <p><strong>Gewicht:</strong> ${person.gewicht}</p>
                `;

                // Voeg de div met persoonsgegevens toe aan de container
                container.appendChild(personDiv);
            });
        }

        // Functie om JSON-bestand op te halen en verwerken
        function fetchPeopleData() {
            // JSON-bestand ophalen
            fetch('opdracht2_bijlage.json')
                .then(response => response.json())
                .then(data => showPeopleInfo(data))
                .catch(error => console.error('Er is een fout opgetreden bij het ophalen van de gegevens:', error));
        }

        // Functie om personen te filteren op leeftijd en opnieuw weer te geven
        function filterPeopleByAge() {
            // Leeftijd uit inputveld halen
            var age = document.getElementById('ageInput').valueAsNumber;

            // Element leegmaken voordat we de gefilterde lijst toevoegen
            var container = document.getElementById('personContainer');
            container.innerHTML = '';

            // JSON-bestand ophalen
            fetch('opdracht2_bijlage.json')
                .then(response => response.json())
                .then(data => {
                    // Filteren op leeftijd
                    var filteredData = data.filter(person => person.leeftijd > age);
                    // Opnieuw weergeven van gefilterde personen
                    showPeopleInfo(filteredData);
                })
                .catch(error => console.error('Er is een fout opgetreden bij het filteren van de gegevens:', error));
        }

        // Roep de functie aan om gegevens op te halen en weer te geven wanneer de pagina geladen is
        document.addEventListener('DOMContentLoaded', fetchPeopleData);

        // Eventlistener toevoegen aan de knop
        document.getElementById('filterButton').addEventListener('click', filterPeopleByAge);
