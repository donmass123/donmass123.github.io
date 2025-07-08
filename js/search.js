
  function searchTutorial() {
    let input = document.getElementById('searchTutorial').value.toLowerCase();
    let cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
      let title = card.querySelector('h3').textContent.toLowerCase();
      let description = card.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(input) || description.includes(input)) {
        card.style.display = 'block';  // Show matching card
      } else {
        card.style.display = 'none';   // Hide non-matching card
      }
    });
  }

