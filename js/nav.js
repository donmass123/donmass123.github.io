// Adding a smooth scroll effect for navigation
document.querySelectorAll('.bubble-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    
    if (target) {
      event.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 20, // Adjust scroll position
        behavior: 'smooth'
      });
    }
  });
});
