// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// Get all view modal buttons
var buttons = document.querySelectorAll(".view-modal-button");

// Loop through all buttons and add an event listener
buttons.forEach(function(button) {
  button.onclick = function() {
    var url = button.getAttribute("data-url");  // Get the URL from data attribute
    modal.style.display = "block";
    document.getElementById("modalFrame").src = url;  // Set the iframe's source to the URL
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("modalFrame").src = "";  // Clear the iframe source
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("modalFrame").src = "";  // Clear the iframe source
  }
}
