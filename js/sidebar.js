document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.getElementById('toc-dropdown');
  if (!dropdown) return;
  const headers = document.querySelectorAll('h2, h3, h4');
  // Bersihkan isi awal
  dropdown.innerHTML = '<option value="">Pilih bagian...</option>';
  headers.forEach((header, idx) => {
    if (!header.id) header.id = "toc-" + idx + "-" + Date.now();
    const level = parseInt(header.tagName[1]);
    const option = document.createElement("option");
    option.value = "#" + header.id;
    option.textContent = header.textContent.trim().replace(/\s+/g, " ");
    option.setAttribute("data-level", level);
    dropdown.appendChild(option);
  });

  dropdown.addEventListener('change', function(e) {
    const id = this.value;
    if (id && id.startsWith('#')) {
      const target = document.querySelector(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // Efek highlight sementara
        target.classList.add('toc-highlight');
        setTimeout(() => target.classList.remove('toc-highlight'), 1200);
      }
    }
  });

  // Highlight CSS untuk animasi scroll
  const style = document.createElement('style');
  style.innerHTML = `
    .toc-highlight {
      animation: tocFadeHighlight 1.1s cubic-bezier(0.9,0,0,1);
    }
    @keyframes tocFadeHighlight {
      0%   { background: #edf1ff; }
      60%  { background: #c3d6fc; }
      100% { background: transparent; }
    }
  `;
  document.head.appendChild(style);
});
