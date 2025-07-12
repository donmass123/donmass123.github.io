// Array of card data
const cardData = [
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" },
  { imgSrc: "cover/card/1.webp", title: "Game Over", description: "This is a description for Game Over.", url: "https://example.com/1" }
];

// Function to render cards dynamically
function renderCards() {
  const container = document.getElementById("card-container");

  cardData.forEach(card => {
    const cardElement = document.createElement("a"); // Create anchor tag
    cardElement.href = card.url; // Use the dynamic URL from the card data
    cardElement.classList.add("swipeable-card");

    cardElement.innerHTML = `
      <img src="${card.imgSrc}" alt="Image" class="swipeable-card-img">
      <div class="swipeable-card-content">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    `;
    container.appendChild(cardElement);
  });
}

// Call the function to render cards
renderCards();

// Initialize the swipeable functionality
document.querySelectorAll('.swipeable-card').forEach(card => {
  card.addEventListener('mousedown', onMouseDown);
  card.addEventListener('touchstart', onMouseDown);

  function onMouseDown(event) {
    const initialX = event.clientX || event.touches[0].clientX;

    function onMouseMove(moveEvent) {
      const currentX = moveEvent.clientX || moveEvent.touches[0].clientX;
      const diff = initialX - currentX;
      card.style.transform = `translateX(-${diff}px)`;
    }

    function onMouseUp() {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('touchmove', onMouseMove);
      card.style.transform = 'none';
    }

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('touchmove', onMouseMove);
    card.addEventListener('mouseup', onMouseUp);
    card.addEventListener('touchend', onMouseUp);
  }
});
