document.querySelectorAll(".feature-card").forEach((card) => {
  const ripple = card.querySelector(".ripple-circle");

  const createRipple = (e) => {
    // Mengambil posisi kartu dan ukuran kartu
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2; // Ukuran ripple lebih besar
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    // Tentukan ukuran dan posisi ripple
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Memulai animasi ripple dengan durasi yang lebih lama
    card.classList.add("rippling");
  };

  const clearRipple = () => {
    card.classList.remove("rippling");
  };

  // Menambahkan jeda waktu untuk menghindari terlalu cepat mengaktifkan ripple
  const throttleRipple = (e) => {
    if (card.classList.contains("rippling")) return; // Hindari ripple ganda
    createRipple(e);
  };

  // Efek ripple hanya saat mouse down, hindari mouse over yang cepat
  card.addEventListener("mousedown", throttleRipple);

  card.addEventListener("mouseup", (e) => {
    clearRipple();
    // Navigasi setelah ripple selesai dengan penundaan lebih lama
    const url = card.getAttribute("data-link");
    if (url) setTimeout(() => (window.location.href = url), 300); // Waktu tunggu lebih lama
  });

  // Akses keyboard dengan penundaan yang lebih lama
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const url = card.getAttribute("data-link");
      if (url) setTimeout(() => (window.location.href = url), 300); // Penundaan lebih lama
    }
  });

  // Hindari stuck ripple saat keluar area kartu
  card.addEventListener("mouseleave", clearRipple);
});
