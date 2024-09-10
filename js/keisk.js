// Array of images to switch between
const images = ['img/logo.png', 'img/logo3_0.png', 'img/logo3_1.png']; // Replace with your image paths
let currentIndex = 0;

// Function to change the image
function changeImage() {
    // Toggle between 0 and 1
    currentIndex = (currentIndex + 1) % images.length;
    // Set the new image source
    document.getElementById('logotipas').src = images[currentIndex];
}

// Call changeImage every 5 seconds (5000 milliseconds)
setInterval(changeImage, 2500);
