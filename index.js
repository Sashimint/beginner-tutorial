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
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

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
  imageContent.classList.remove('floating'); // reset first
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
    imageContent.classList.add('floating');
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

// Change image when button is clicked
mainButton.addEventListener('click', () => {
  // Go to next image
  currentIndex++;
    if (!hasStartedAudio) {
    audio.play();
    hasStartedAudio = true;
    playButton.textContent = '⏸'; // ensure icon matches state
  }
  // If we’ve reached the end
  if (currentIndex >= images.length) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
    imageContent.style.opacity = 0;
    document.getElementById('song-title').classList.remove('hidden');
    replayButton.classList.remove('hidden');
    playButton.classList.remove('hidden');
    progressContainer.classList.remove('hidden');
    document.querySelector('.final-deco-wrapper').style.display = 'flex';
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

  // Reset visual state
  finalMessage.style.display = 'none';
  replayButton.classList.add('hidden');
  mainButton.style.display = 'block';
  
  // Instead of hiding these, just reset values to avoid layout jump
  playButton.textContent = '⏸';  // immediately resume
  audio.currentTime = 0;
  audio.play();
  isPlaying = true;

  // Make sure these stay visible and steady
  playButton.classList.remove('hidden');
  progressContainer.classList.remove('hidden');
  document.getElementById('song-title').classList.remove('hidden');
  document.querySelector('.final-deco-wrapper').style.display = 'none';
});


// =============================================
// STEP 8: Add audio file
// =============================================

// Format mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Set total duration
audio.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

// Update time and progress bar
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Click to seek
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

// Toggle play/pause
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸';
  } else {
    audio.pause();
    playButton.textContent = '▶';
  }
});