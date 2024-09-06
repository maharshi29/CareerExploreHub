document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




function navigateTo(page) {
    window.location.href = page;
}

function showOptions(option) {
    console.log('showOptions called with:', option);

    const optionsContent = document.getElementById('options-content');
    const optionContents = document.querySelectorAll('.option-content');

    // Hide all option contents
    optionContents.forEach(content => content.style.display = 'none');
    
    // Show the selected option content
    document.getElementById(option).style.display = 'block';

    // Ensure the options content container is visible
    optionsContent.style.display = 'block';
}

