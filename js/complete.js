document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const modal = document.getElementById("completionModal");
  const closeBtn = document.querySelector(".completion-close");
  const noBtn = document.getElementById("completion-no-btn");
  const downloadBtn = document.getElementById("completion-download-btn");

  let modalShown = false;
  let timer = null;

  // 🔹 Data URL download
  const downloadData = [
    { id: "1", url: "https://drive.google.com/drive/folders/1Z4tG3FMdMa3oZ3Nk9oqAp8ydWOlFcDS8?usp=drive_link" },
    { id: "2", url: "https://www.dropbox.com/s/example123/file.zip?dl=1" },
    { id: "file-custom", url: "https://example.com/files/output.zip" },
  ];

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

  if (footer) {
    observer.observe(footer);
  }

  const hideModal = () => {
    modal.style.display = "none";
    modalShown = true;
    if (timer) clearTimeout(timer);
  };

  closeBtn.addEventListener("click", hideModal);
  noBtn.addEventListener("click", hideModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
});
