// =============================================
// STEP 1: Set up the image array 
// =============================================
// Array of all images to cycle through
// Customize these paths to your own images
const images = [
  './assets/image-content/bunny-1.png',
  './assets/image-content/bunny-2.png',
  './assets/image-content/bunny-3.png',
  './assets/image-content/bunny-4.png',
  './assets/image-content/bunny-5.png',
  './assets/image-content/bunny-6.png'
];

// =============================================
// STEP 2: Reference HTML elements 
// =============================================
// Connect to the elements we need to change
const imageContent = document.querySelector('.image-content');  // Image container
const mainButton = document.getElementById('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message
const replayButton = document.getElementById('replay-button');

// =============================================
// STEP 3: Track what image we're at 
// =============================================
// Start with the first image (index 0)
let currentIndex = 0;
finalMessage.style.display = 'none';
mainButton.style.display = 'block';
replayButton.classList.add('hidden');

// =============================================
// STEP 4: Update image function 
// =============================================
// Function to change images with fade effect
function updateImage() {
  // Fade out current image
  imageContent.style.opacity = 0;
  
  // Preload next image
  const img = new Image();
  img.src = images[currentIndex];
  
  // When image is loaded
  img.onload = () => {
    // Change to new image
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Fade in new image
    imageContent.style.opacity = 1;
  };
}

// =============================================
// STEP 5: Initial image display 
// =============================================
// Show first image when page loads
updateImage();

// =============================================
// STEP 6: Button click handler 
// =============================================
// Change image when button is clicked
mainButton.addEventListener('click', () => {
  // Go to next image
  currentIndex++;
  
  // If we’ve reached the end
  if (currentIndex >= images.length) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
    replayButton.classList.remove('hidden');
    return;
  }

  // Otherwise: update image
  updateImage();
});

// =============================================
// STEP 7: Replay button logic
// =============================================

replayButton.addEventListener('click', () => {
  currentIndex = 0;
  updateImage();
  finalMessage.style.display = 'none';
  replayButton.classList.add('hidden');
  mainButton.style.display = 'block';
});
