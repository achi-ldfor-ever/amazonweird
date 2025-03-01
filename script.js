// Function to change button color when clicked
function changeColor() {
    const button = document.querySelector('footer button');
    button.style.backgroundColor = button.style.backgroundColor === 'rgb(231, 76, 60)' ? '#2ecc71' : '#e74c3c';
}

// Scroll animation using IntersectionObserver
const observerOptions = {
    root: null,  // Viewport is the root
    threshold: 0.5  // Trigger animation when 50% of element is visible
};

// Function to apply animation
function applyAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}

// Create an observer instance
const observer = new IntersectionObserver(applyAnimation, observerOptions);

// Select all categories and observe them
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    observer.observe(category);

    // Add click event to trigger animations
    category.addEventListener('click', function() {
        // Remove the animation class if already clicked
        category.classList.remove('clicked');
        void category.offsetWidth; // Trigger reflow to restart animation
        category.classList.add('clicked');
    });
});
