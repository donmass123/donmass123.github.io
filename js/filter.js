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
