function searchTutorial() {
    let input = document.getElementById('searchTutorial').value.toLowerCase();  // Get search input value
    let cards = document.querySelectorAll('.feature-card');  // Get all the tutorial cards
    let noResultsMessage = document.getElementById('noResultsMessage');  // Get the "Tutorial tidak ditemukan" message

    let foundAny = false;  // Variable to track if any tutorial was found

    // If the input is empty, show all the cards
    if (input === "") {
        cards.forEach(card => {
            card.style.display = 'block';  // Show all cards if search is empty
        });
        noResultsMessage.style.display = 'none';  // Hide the "no results" message
    } else {
        cards.forEach(card => {
            let title = card.querySelector('h3').textContent.toLowerCase();  // Get the title of the card
            let description = card.querySelector('p').textContent.toLowerCase();  // Get the description of the card
            
            // If the title or description contains the search term, display the card
            if (title.includes(input) || description.includes(input)) {
                card.style.display = 'block';  // Show the matching card
                foundAny = true;  // Mark that we found at least one match
            } else {
                card.style.display = 'none';   // Hide the non-matching card
            }
        });

        // If no matching cards are found, show the "no results" message
        if (!foundAny) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';  // Hide the "no results" message
        }
    }
}
