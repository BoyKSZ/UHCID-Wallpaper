// script.js
const jumpingDog = document.getElementById('jumping-dog');

// Function to make the dog jump
function jump() {
    jumpingDog.style.transform = 'translateY(-100px)'; // Adjust the jump height as needed
    setTimeout(() => {
        jumpingDog.style.transform = 'translateY(0)';
    }, 200); // Reset the position after 100 milliseconds
}

// Add a click event listener to the dog image
jumpingDog.addEventListener('click', jump);
