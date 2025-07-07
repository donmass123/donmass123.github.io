document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-link");
    if (url) window.location.href = url;
  });
});
