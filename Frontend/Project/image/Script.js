let slideIndex = 0;
const images = [
    'image-1.jpeg',
    'image-3.jpeg',
    'image-5.jpeg',
    'image-6.jpeg',
    'image-7.jpeg',
    
]; // Add the image path

function showSlide(index) {
    const slide = document.getElementById('slide');
    slide.src = images[index];
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + images.length) % images.length;
    showSlide(slideIndex);
}

// Automatic slide change every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000); // Change interval time as needed

// Initialize the slider
showSlide(slideIndex);

 
 
