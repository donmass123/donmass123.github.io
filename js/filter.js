function filterTutorials(level) {
    const tutorials = document.querySelectorAll('.feature-card');
    const noResultsMessage = document.getElementById('noResultsMessage');
    let visibleTutorials = 0;

    tutorials.forEach((tutorial) => {
        const tutorialLevel = tutorial.getAttribute('data-level');

        // If 'all' is selected, show all tutorials
        if (level === 'all' || tutorialLevel === level) {
            tutorial.style.display = 'block';
            visibleTutorials++;
        } else {
            tutorial.style.display = 'none';
        }
    });

    // Show "No Results" message if no tutorials match
    if (visibleTutorials === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
}

// JavaScript to add/remove the pulse effect on button click
const buttons = document.querySelectorAll('.filter-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Add pulsing effect when button is clicked
        button.classList.add('pulsing');
        
        // Remove the pulse effect after animation ends
        setTimeout(() => {
            button.classList.remove('pulsing');
        }, 800); // Match the animation duration (800ms)
    });
});
