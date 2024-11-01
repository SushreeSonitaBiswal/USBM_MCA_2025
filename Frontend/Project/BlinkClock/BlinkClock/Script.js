const textElement = document.querySelector('.blinking-text');

// Set the interval to blink the text every second
setInterval(() => {
    // Toggle opacity to create a blinking effect
    textElement.style.opacity = textElement.style.opacity === '0' ? '1' : '0';
}, 1000); // 1000 milliseconds = 1 second
