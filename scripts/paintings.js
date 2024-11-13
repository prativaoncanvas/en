// Step 1: Array of image file names (assuming they are all in the 'img' folder)
const imageFiles = [
	"art-1.jpg",
	"art-2.jpg",
	"art-3.jpg",
	"art-4.jpg",
	"art-5.jpg",
	"art-6.jpg",
	"art-7.jpg",
	"art-8.jpg"
];

// Function to display images
function renderPaintings() {
	const container = document.querySelector(".image-container");
	container.innerHTML = ""; // Clear any existing content

	const lang = document.documentElement.lang;
	let imageLocation = `arts/`;
	if (lang === "bn") {
		imageLocation = `/en/arts/`;
	}

	imageFiles.forEach(fileName => {

		const imageBox = document.createElement("div");
		imageBox.classList.add("image-box");

		const img = document.createElement("img");
		img.classList.add("clickable-image");
		img.src = imageLocation + fileName; // Adjust path as needed
		img.alt = fileName;
		img.onclick = () => {
			enlargeImage(imageLocation + fileName);
		};
		// Create div for watermark
		const watermark = document.createElement("div");
		watermark.classList.add("watermark");
		// Append the image and watermark the image box, and the image box to the container
		imageBox.appendChild(img);
		imageBox.appendChild(watermark);

		container.appendChild(imageBox);
	});

	const watermarkDivs = document.querySelectorAll('.watermark');
	watermarkDivs.forEach(div => {
		if (lang === "bn") {
			div.textContent = "প্রতিভার ক্যানভাস";
		} else {
			div.textContent = "Prativa on Canvas"; // Set the content for each div
		}
	});
}

// Call renderPaintings when the page loads
document.addEventListener("DOMContentLoaded", renderPaintings);

// Define the function to be called on click
function enlargeImage(imgSource) {
	var modal = document.getElementById("modal");
	var modalImg = document.getElementById("modal-img");

	modal.style.display = "block";
	modalImg.src = imgSource;
}

// When the user clicks on <span> (x), close the modal
function closeImage() {
	modal.style.display = "none";
}
