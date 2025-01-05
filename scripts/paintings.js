// Step 1: Array of image file names (assuming they are all in the 'img' folder)
const imageFiles = [
	"art-1.jpg",
	"art-2.jpg",
	"art-3.jpg",
	"art-4.jpg",
	"art-5.jpg",
	"art-6.jpg",
	"art-7.jpg",
	"art-8.jpg",
	"art-9.jpg",
	"art-10.jpg",
	"art-11.jpg",
	"art-12.jpg",
	"art-13.jpg",
	"art-14.jpg",
	"art-15.jpg",
	"art-16.jpg",
	"art-17.jpg",
	"art-18.jpg",
	"art-19.jpg",
	"art-20.jpg",
	"art-21.jpg",
	"art-22.jpg",
	"art-23.jpg",
	"art-24.jpg",
	"art-25.jpg",
	"art-26.jpg",
	"art-27.jpg",
	"art-28.jpg",
	"art-29.jpg",
	"art-30.jpg",
	"art-31.jpg",
	"art-32.jpg",
	"mini-1.jpg",
	"mini-2.jpg",
	"mini-3.jpg",
	"mini-4.jpg",
	"mini-5.jpg",
	"mini-6.jpg",
	"mini-7.jpg",
	"mini-8.jpg",
	"mini-9.jpg",
	"mini-10.jpg",
	"mini-11.jpg",
	"mini-12.jpg",
	"mini-13.jpg",
	"mini-14.jpg",
	"mini-15.jpg",
	"mini-16.jpg",
	"mini-17.jpg",
	"mini-18.jpg",
	"mini-19.jpg",
	"mini-20.jpg",
	"mini-21.jpg",
	"mini-22.jpg",
	"mini-23.jpg",
	"mini-24.jpg",
	"mini-25.jpg",
	"mini-26.jpg",
	"mini-27.jpg",
	"mini-28.jpg",
	"mini-29.jpg",
	"mini-30.jpg",
	"mini-31.jpg",
	"mini-32.jpg",
	"mini-33.jpg",
	"mini-34.jpg",
	"mini-35.jpg",
	"mini-36.jpg",
	"mini-37.jpg",
	"mini-38.jpg",
	"mini-39.jpg",
	"mini-40.jpg",
	"mini-41.jpg",
	"mini-42.jpg",
	"mini-43.jpg",
	"mini-44.jpg",
	"mini-45.jpg",
	"mini-46.jpg",
	"mini-47.jpg",
	"mini-48.jpg",
	"mini-49.jpg",
	"mini-50.jpg",
	"mini-51.jpg",
	"mini-52.jpg",
	"mini-53.jpg",
	"mini-54.jpg",
	"wide-1.jpg",
	"wide-2.jpg",
	"wide-3.jpg",
	"wide-4.jpg"
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
