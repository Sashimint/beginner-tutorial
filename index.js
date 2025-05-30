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
const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio-player');
playButton.classList.add('hidden');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

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

let hasStartedAudio = false;
let hasStartedAudio = false;

mainButton.addEventListener('click', () => {
  if (!hasStartedAudio) {
    audio.play();
    hasStartedAudio = true;
    playButton.textContent = '⏸'; // ensure icon matches state
  }

  // Show image first
  updateImage();

  // Go to next image index
  currentIndex++;

  // If we’ve just finished the last image
  if (currentIndex >= images.length) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
    imageContent.style.backgroundImage = 'none';
    document.getElementById('song-title').classList.remove('hidden');
    replayButton.classList.remove('hidden');
    playButton.classList.remove('hidden');
    progressContainer.classList.remove('hidden');
  }
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
  playButton.classList.add('hidden');
  progressContainer.classList.add('hidden');
  document.getElementById('song-title').classList.add('hidden');
  playButton.textContent = '▶'; // reset icon
  audio.pause();
  audio.currentTime = 0;
});

// =============================================
// STEP 8: Add audio file
// =============================================

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸';
  } else {
    audio.pause();
    playButton.textContent = '▶';
  }
});

// Update progress bar as audio plays
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
});

// Seek audio position when bar is clicked
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});