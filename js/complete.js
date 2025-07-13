document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const modal = document.getElementById("completionModal");
  const closeBtn = document.querySelector(".completion-close");
  const noBtn = document.getElementById("completion-no-btn");
  const downloadBtn = document.getElementById("completion-download-btn");
  const blurWrapper = document.querySelector(".blur-wrapper");
  const passwordModal = document.getElementById("passwordModal");
  const container = document.querySelector(".container");
  const passwordInput = document.getElementById("tutorialPassword");
  const passwordError = document.getElementById("passwordError");

  let modalShown = false;
  let timer = null;
  let failedAttempts = 0;
  const maxAttempts = 3;

  // 🔐 Data password berdasarkan ID halaman
  const passwordData = [
    { id: "1", password: "123456" },
    { id: "2", password: "123456" },
    { id: "3", password: "123456" },
    { id: "4", password: "123456" },
    { id: "5", password: "123456" },
    { id: "6", password: "123456" }
  ];

  // 📦 Data URL untuk tombol download
  const downloadData = [
    { id: "1", url: "https://drive.google.com/drive/folders/1Z4tG3FMdMa3oZ3Nk9oqAp8ydWOlFcDS8?usp=drive_link" },
    { id: "2", url: "https://www.dropbox.com/s/example123/file.zip?dl=1" },
    { id: "3", url: "https://example.com/files/output.zip" }
  ];

  // Cari ID tutorial dari URL
  const currentFile = window.location.pathname.split('/').pop().replace(".html", "");
  const matchedTutorial = passwordData.find(item => item.id === currentFile);

  // 🔍 Observer untuk mendeteksi footer terlihat
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !modalShown) {
        timer = setTimeout(() => {
          const id = downloadBtn.getAttribute("data-id");
          const found = downloadData.find(item => item.id === id);

          if (found) {
            downloadBtn.setAttribute("href", found.url);
            downloadBtn.setAttribute("target", "_blank");
          } else {
            console.warn(`Download ID "${id}" tidak ditemukan.`);
            downloadBtn.removeAttribute("href");
          }

          modal.style.display = "block";
          modalShown = true;
        }, 6000);
      }
    },
    { threshold: 1.0 }
  );

  // ❌ Menutup modal download
  const hideModal = () => {
    modal.style.display = "none";
    modalShown = true;
    if (timer) clearTimeout(timer);
  };

  closeBtn.addEventListener("click", hideModal);
  noBtn.addEventListener("click", hideModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });

  // 🔐 Validasi Password
  if (matchedTutorial) {
    passwordModal.style.display = "block";
    blurWrapper.classList.add("blur-active");

    document.getElementById("submitPassword").addEventListener("click", function () {
      const inputValue = passwordInput.value;

      if (inputValue === matchedTutorial.password) {
        passwordModal.style.display = "none";
        container.style.display = "block";
        blurWrapper.classList.remove("blur-active");

        // ✅ Aktifkan observer HANYA setelah password benar
        if (footer) observer.observe(footer);
      } else {
        failedAttempts++;
        passwordError.style.display = "block";
        passwordError.textContent = `❌ Password salah! Percobaan ke-${failedAttempts} dari ${maxAttempts}`;

        if (failedAttempts >= maxAttempts) {
          alert("Kamu telah melebihi 3 kali percobaan. Akan dialihkan ke beranda.");
          window.location.href = "../main.html"; // Ganti jika nama file beranda berbeda
        }
      }
    });
  } else {
    // Jika halaman tidak terproteksi
    container.style.display = "block";
    if (footer) observer.observe(footer);
  }
});
