
// Function to dynamically create tutorial cards
function generateTutorialCards() {
  const tutorialContainer = document.getElementById('tutorialCards');
  tutorialContainer.innerHTML = ''; // Clear existing content

  tutorialsData.forEach(tutorial => {
    const card = document.createElement('div');
    card.classList.add('feature-card');
    card.setAttribute('data-link', tutorial.link);
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-level', tutorial.level);
    card.style.cursor = 'pointer';
    card.style.position = 'relative';
    card.style.overflow = 'hidden';

    // Create the anchor tag for the link
    const cardLink = document.createElement('a');
    cardLink.href = tutorial.link;
    cardLink.style.display = 'block'; // Make the link fill the entire card
    cardLink.style.textDecoration = 'none'; // Remove underline
    cardLink.style.color = 'inherit'; // Inherit the color from the parent (card)

    // Add HTML content to the cardLink
    cardLink.innerHTML = `
      <img src="${tutorial.image}" alt="${tutorial.title}" style="width: 100%; height: 200px; object-fit: cover; border: 2px solid black; border-radius: 5%; position: relative;">
      <h3>${tutorial.title}</h3>
      <span class="update-date" style="display:inline-block; font-size:13px; color:#1565c0; font-weight:bold; margin-bottom:2px;">
        🗓️ Ditambahkan: ${tutorial.updateDate}
      </span>
      <p>${tutorial.description}</p>
      <span class="badge ${tutorial.level}">${tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}</span>
      <span class="ripple-circle"></span>
    `;

    // Append the link (cardLink) to the card container (tutorialContainer)
    card.appendChild(cardLink);
    tutorialContainer.appendChild(card);
  });
}




// Initial setup to generate cards
document.addEventListener("DOMContentLoaded", function () {
  generateTutorialCards(); // Generate cards when the page loads
  filterTutorials('all');  // Show all tutorials initially
});

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

  document.getElementById('pageNumber').textContent = `Page ${page}`;
  document.getElementById('prevBtn').disabled = page === 1;
  document.getElementById('nextBtn').disabled = page === Math.ceil(filteredTutorials.length / itemsPerPage);
}

// Function to change page
function changePage(direction) {
  currentPage += direction;
  displayPage(currentPage);
}

// Function to filter tutorials
function filterTutorials(level) {
  const tutorials = document.querySelectorAll(".feature-card");
  const noResultsMessage = document.getElementById("noResultsMessage");
  let visibleTutorials = 0;

  filteredTutorials = [];

  tutorials.forEach((tutorial) => {
    const tutorialLevel = tutorial.getAttribute("data-level");

    if (level === "all" || tutorialLevel === level) {
      tutorial.style.display = "block";
      filteredTutorials.push(tutorial);
      visibleTutorials++;
    } else {
      tutorial.style.display = "none";
    }
  });

  if (visibleTutorials === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }

  currentPage = 1;
  displayPage(currentPage);
}

// Function to search tutorials
function searchTutorial() {
  let input = document.getElementById('searchTutorial').value.toLowerCase();
  let cards = document.querySelectorAll('.feature-card');
  let noResultsMessage = document.getElementById('noResultsMessage');
  let foundAny = false;

  if (input === "") {
    filteredTutorials = allTutorials;
    displayPage(currentPage);
    noResultsMessage.style.display = 'none';
  } else {
    filteredTutorials = [];

    cards.forEach(card => {
      let title = card.querySelector('h3').textContent.toLowerCase();
      let description = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(input) || description.includes(input)) {
        card.style.display = 'block';
        filteredTutorials.push(card);
        foundAny = true;
      } else {
        card.style.display = 'none';
      }
    });

    if (!foundAny) {
      noResultsMessage.style.display = 'block';
    } else {
      noResultsMessage.style.display = 'none';
    }

    currentPage = 1;
    displayPage(currentPage);
  }
}


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
