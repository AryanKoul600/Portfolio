// Simulate loading
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display ='none';
    }, 2000);
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Message sent!'); // Simulate a message sent alert
    this.reset(); // Reset the form fields
});