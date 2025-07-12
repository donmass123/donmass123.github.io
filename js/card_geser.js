// Array of Pokémon card data
const pokemonData = [
  { imgSrc: "cover/card/1.webp", title: "Pikachu", description: "Electric Type", url: "https://pokemon.com/pikachu" },
  { imgSrc: "cover/card/1.webp", title: "Bulbasaur", description: "Grass/Poison Type", url: "https://pokemon.com/bulbasaur" },
  { imgSrc: "cover/card/1.webp", title: "Charmander", description: "Fire Type", url: "https://pokemon.com/charmander" },
  { imgSrc: "cover/card/1.webp", title: "Squirtle", description: "Water Type", url: "https://pokemon.com/squirtle" },
  // Add more Pokémon here
];

// Function to scroll to the next/previous Pokémon card
function scrollToCard(direction) {
  const container = document.getElementById("card-poke");

  // Determine the scroll amount based on the direction (left or right)
  const scrollAmount = direction === 'next' ? 320 : -320;

  // Scroll the container by the specified amount
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Attach event listeners to the buttons
document.getElementById("prev-btn").addEventListener("click", function() {
  scrollToCard('prev');
});

document.getElementById("next-btn").addEventListener("click", function() {
  scrollToCard('next');
});

// Function to render Pokémon cards dynamically (unchanged)
function renderPokemonCards() {
  const container = document.getElementById("card-poke");

  pokemonData.forEach((pokemon, index) => {
    const cardElement = document.createElement("a");
    cardElement.href = pokemon.url;
    cardElement.classList.add("pokemon-card");
    cardElement.dataset.index = index;

    cardElement.innerHTML = `
      <img src="${pokemon.imgSrc}" alt="${pokemon.title}" class="pokemon-card-img">
      <div class="pokemon-card-content">
        <h3>${pokemon.title}</h3>
        <p>${pokemon.description}</p>
      </div>
    `;

    cardElement.addEventListener("click", function() {
      document.querySelectorAll('.pokemon-card').forEach(card => {
        card.classList.remove('selected');
      });
      cardElement.classList.add('selected');
    });

    container.appendChild(cardElement);
  });
}

// Call the function to render Pokémon cards
renderPokemonCards();


// Call the function to render Pokémon cards
renderPokemonCards();
