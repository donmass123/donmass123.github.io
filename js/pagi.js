let currentPage = 1;
const itemsPerPage = 6;
let filteredTutorials = []; // Array to store filtered tutorials
let allTutorials = []; // Array to store all tutorials, for reset purposes

// Function to handle pagination
function displayPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;

  filteredTutorials.forEach((tutorial, index) => {
    if (index >= start && index < end) {
      tutorial.style.display = 'block';  // Show tutorials in the current page range
    } else {
      tutorial.style.display = 'none';  // Hide tutorials not in the current page range
    }
  });

  // Update the page number text
  document.getElementById('pageNumber').textContent = `Page ${page}`;

  // Disable the Previous/Next buttons based on the page number
  document.getElementById('prevBtn').disabled = page === 1;
  document.getElementById('nextBtn').disabled = page === Math.ceil(filteredTutorials.length / itemsPerPage);
}

// Change the page based on direction (-1 for previous, +1 for next)
function changePage(direction) {
  currentPage += direction;
  displayPage(currentPage);
}

// Function to filter tutorials based on selected level
function filterTutorials(level) {
  const tutorials = document.querySelectorAll(".feature-card");
  const noResultsMessage = document.getElementById("noResultsMessage");
  let visibleTutorials = 0;

  filteredTutorials = [];  // Reset filtered tutorials

  tutorials.forEach((tutorial) => {
    const tutorialLevel = tutorial.getAttribute("data-level");

    if (level === "all" || tutorialLevel === level) {
      tutorial.style.display = "block";
      filteredTutorials.push(tutorial);  // Add tutorial to the filtered list
      visibleTutorials++;
    } else {
      tutorial.style.display = "none";  // Hide tutorials that don't match the filter
    }
  });

  // Show "No Results" message if no tutorials match the filter
  if (visibleTutorials === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }

  // Reset to the first page and display filtered tutorials
  currentPage = 1;
  displayPage(currentPage);
}

// Function to search tutorials
function searchTutorial() {
  let input = document.getElementById('searchTutorial').value.toLowerCase();  // Get search input value
  let cards = document.querySelectorAll('.feature-card');  // Get all the tutorial cards
  let noResultsMessage = document.getElementById('noResultsMessage');  // Get the "Tutorial tidak ditemukan" message

  let foundAny = false;  // Variable to track if any tutorial was found

  // If the input is empty, show all the cards and reset the pagination
  if (input === "") {
    filteredTutorials = allTutorials; // Reset to all tutorials
    displayPage(currentPage); // Re-display tutorials
    noResultsMessage.style.display = 'none';  // Hide the "no results" message
  } else {
    filteredTutorials = []; // Reset filtered tutorials

    cards.forEach(card => {
      let title = card.querySelector('h3').textContent.toLowerCase();  // Get the title of the card
      let description = card.querySelector('p').textContent.toLowerCase();  // Get the description of the card

      // If the title or description contains the search term, display the card
      if (title.includes(input) || description.includes(input)) {
        card.style.display = 'block';  // Show the matching card
        filteredTutorials.push(card); // Add card to filtered list
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
    
    // Reset to the first page of the filtered results
    currentPage = 1;
    displayPage(currentPage);
  }
}

// JavaScript to add/remove the pulse effect on button click
const buttons = document.querySelectorAll(".filter-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Add pulsing effect when button is clicked
    button.classList.add("pulsing");

    // Remove the pulse effect after animation ends
    setTimeout(() => {
      button.classList.remove("pulsing");
    }, 800); // Match the animation duration (800ms)
  });
});

// Initial setup to display all tutorials and store them for reset
document.addEventListener("DOMContentLoaded", function () {
  const tutorials = document.querySelectorAll(".feature-card");
  allTutorials = Array.from(tutorials); // Store all tutorials for later use in search
  filterTutorials('all');  // Show all tutorials initially
});
