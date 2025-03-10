// slider.js

// Array of image URLs
const images = [
    'images/image1.JPG',
    'images/image2.JPG',
    'images/image3.JPG',
    'images/image4.JPG'

];

// Current image index
let currentIndex = 0;

// Get references to the DOM elements
const sliderImage = document.getElementById('sliderImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Function to update the image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Initialize the slider with the first image
updateImage();