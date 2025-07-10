// Get button
const bubbleUp = document.getElementById("bubbleUp");

// Tampilkan button jika scroll bawah 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    bubbleUp.style.display = "block";
  } else {
    bubbleUp.style.display = "none";
  }
};

// Scroll ke atas saat diklik
bubbleUp.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};