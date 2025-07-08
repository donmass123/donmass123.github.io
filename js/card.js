document.querySelectorAll(".feature-card").forEach((card) => {
  const ripple = card.querySelector(".ripple-circle");

  const getRandomColor = () => {
    const colors = ['#FF4081', '#00E5FF', '#76FF03', '#FFD600', '#FF6E40'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const startRipple = (e) => {
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.backgroundColor = getRandomColor();

    card.classList.add("rippling");

    // Optional: play sound
    // new Audio("https://example.com/click.mp3").play();
  };

  const stopRipple = () => {
    card.classList.remove("rippling");
  };

  card.addEventListener("mousedown", startRipple);
  card.addEventListener("mouseup", (e) => {
    stopRipple();
    const url = card.getAttribute("data-link");
    if (url) setTimeout(() => window.location.href = url, 200);
  });

  card.addEventListener("mouseleave", stopRipple);
  card.addEventListener("touchstart", (e) => {
    startRipple(e.touches[0]);
  });
  card.addEventListener("touchend", (e) => {
    stopRipple();
    const url = card.getAttribute("data-link");
    if (url) setTimeout(() => window.location.href = url, 200);
  });

  // Keyboard accessibility
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const url = card.getAttribute("data-link");
      if (url) window.location.href = url;
    }
  });
});
