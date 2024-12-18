let currentImageIndex = 0; // Track the current image index
let isPaused = false; // Track if the auto-change is paused
const images = [ 
   "arts/art-2.jpg",
   "arts/art-1.jpg",
   "arts/art-3.jpg",
   "arts/art-4.jpg",
   "arts/art-5.jpg",
   "arts/art-6.jpg",
   "arts/art-7.jpg",
   "arts/art-8.jpg"
];

// Function to display images
function renderPaintings() {
	const container = document.querySelector(".thumbnails");
	container.innerHTML = ""; // Clear any existing content

	images.forEach(fileName => {
		const img = document.createElement("img");
		img.src = fileName; // Adjust path as needed
		img.alt = fileName;
		img.onclick = () => {
			updateImageContainer(fileName);
		};
		
		container.appendChild(img);
	});
}

// Call renderPaintings when the page loads
document.addEventListener("DOMContentLoaded", renderPaintings);

const imageContainer = document.getElementById("image-container");
const pauseButton = document.getElementById("pause-button");
const pauseIcon = document.getElementById("pause-icon");

// Function to update the background image
function updateImageContainer(imageSrc) {
   imageContainer.style.backgroundImage = `url(${imageSrc})`;
}

// Function to change the image automatically
function autoChangeImage() {
   if (!isPaused) {
      currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
      updateImageContainer(images[currentImageIndex]);
   }
}

// Add event listener to the pause/resume button
pauseButton.addEventListener("click", () => {
   isPaused = !isPaused; // Toggle pause state
   pauseIcon.src = isPaused ? "icons/resume-icon.svg" : "icons/pause-icon.svg"; // Switch icons
});

// Initialize the first image
document.addEventListener("DOMContentLoaded", () => {
   updateImageContainer(images[currentImageIndex]);
   setInterval(autoChangeImage, 5000); // Change image every 5 seconds
});