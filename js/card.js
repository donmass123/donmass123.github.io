document.querySelectorAll(".feature-card").forEach((card) => {
  const ripple = card.querySelector(".ripple-circle");

  const createRipple = (e) => {
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    card.classList.add("rippling");
  };

  const clearRipple = () => {
    card.classList.remove("rippling");
  };

  card.addEventListener("mousedown", createRipple);
  card.addEventListener("mouseup", (e) => {
    clearRipple();
    // Navigasi setelah ripple selesai
    const url = card.getAttribute("data-link");
    if (url) setTimeout(() => (window.location.href = url), 150);
  });

  // Akses keyboard
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const url = card.getAttribute("data-link");
      if (url) window.location.href = url;
    }
  });

  // Hindari stuck ripple saat keluar area
  card.addEventListener("mouseleave", clearRipple);
});
