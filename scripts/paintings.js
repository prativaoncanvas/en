// Step 1: Array of paintings with tags (assuming they are all in the 'img' folder)
const paintings = [
    { fileName: "art-39.jpg", tag: "acrylic" },
    { fileName: "art-34.jpg", tag: "pencil" },
    { fileName: "art-33.jpg", tag: "acrylic" },
    { fileName: "art-35.jpg", tag: "pencil" },
    { fileName: "art-36.jpg", tag: "pencil" },
    { fileName: "art-37.jpg", tag: "pencil" },
    { fileName: "art-38.jpg", tag: "acrylic" },
    { fileName: "art-40.jpg", tag: "acrylic" },
    { fileName: "art-1.jpg", tag: "pencil" },
    { fileName: "art-2.jpg", tag: "pencil" },
    { fileName: "art-3.jpg", tag: "acrylic" },
    { fileName: "art-4.jpg", tag: "acrylic" },
    { fileName: "art-5.jpg", tag: "pastel" },
    { fileName: "art-6.jpg", tag: "pastel" },
    { fileName: "art-7.jpg", tag: "pencil" },
    { fileName: "art-8.jpg", tag: "acrylic" },
    { fileName: "art-9.jpg", tag: "acrylic" },
    { fileName: "art-10.jpg", tag: "acrylic" },
    { fileName: "art-11.jpg", tag: "pencil" },
    { fileName: "art-12.jpg", tag: "watercolor" },
    { fileName: "art-13.jpg", tag: "acrylic" },
    { fileName: "art-14.jpg", tag: "acrylic" },
    { fileName: "art-15.jpg", tag: "acrylic" },
    { fileName: "art-16.jpg", tag: "watercolor" },
    { fileName: "art-17.jpg", tag: "acrylic" },
    { fileName: "art-18.jpg", tag: "pencil" },
    { fileName: "art-19.jpg", tag: "pencil" },
    { fileName: "art-20.jpg", tag: "pencil" },
    { fileName: "art-21.jpg", tag: "pencil" },
    { fileName: "art-22.jpg", tag: "pencil" },
    { fileName: "art-23.jpg", tag: "pencil" },
    { fileName: "art-24.jpg", tag: "pencil" },
    { fileName: "art-25.jpg", tag: "pencil" },
    { fileName: "art-26.jpg", tag: "pencil" },
    { fileName: "art-27.jpg", tag: "pencil" },
    { fileName: "art-28.jpg", tag: "pencil" },
    { fileName: "art-29.jpg", tag: "acrylic" },
    { fileName: "art-30.jpg", tag: "pencil" },
    { fileName: "art-31.jpg", tag: "watercolor" },
    { fileName: "art-32.jpg", tag: "pencil" },
    { fileName: "mini-1.jpg", tag: "pastel" },
    { fileName: "mini-2.jpg", tag: "acrylic" },
    { fileName: "mini-3.jpg", tag: "acrylic" },
    { fileName: "mini-4.jpg", tag: "watercolor" },
    { fileName: "mini-5.jpg", tag: "acrylic" },
    { fileName: "mini-6.jpg", tag: "watercolor" },
    { fileName: "mini-7.jpg", tag: "acrylic" },
    { fileName: "mini-8.jpg" },
    { fileName: "mini-9.jpg", tag: "pastel" },
    { fileName: "mini-10.jpg", tag: "acrylic" },
    { fileName: "mini-11.jpg", tag: "acrylic" },
    { fileName: "mini-12.jpg", tag: "acrylic" },
    { fileName: "mini-13.jpg", tag: "sketch" },
    { fileName: "mini-14.jpg", tag: "acrylic" },
    { fileName: "mini-15.jpg", tag: "pastel" },
    { fileName: "mini-16.jpg", tag: "sketch" },
    { fileName: "mini-17.jpg", tag: "watercolor" },
    { fileName: "mini-18.jpg", tag: "acrylic" },
    { fileName: "mini-19.jpg", tag: "sketch" },
    { fileName: "mini-20.jpg", tag: "acrylic" },
    { fileName: "mini-21.jpg", tag: "acrylic" },
    { fileName: "mini-22.jpg", tag: "acrylic" },
    { fileName: "mini-23.jpg", tag: "acrylic" },
    { fileName: "mini-24.jpg", tag: "acrylic" },
    { fileName: "mini-25.jpg", tag: "sketch" },
    { fileName: "mini-26.jpg", tag: "acrylic" },
    { fileName: "mini-27.jpg", tag: "acrylic" },
    { fileName: "mini-28.jpg", tag: "acrylic" },
    { fileName: "mini-29.jpg", tag: "pastel" },
    { fileName: "mini-30.jpg", tag: "watercolor" },
    { fileName: "mini-31.jpg", tag: "sketch" },
    { fileName: "mini-32.jpg", tag: "watercolor" },
    { fileName: "mini-33.jpg", tag: "sketch" },
    { fileName: "mini-34.jpg", tag: "watercolor" },
    { fileName: "mini-35.jpg", tag: "acrylic" },
    { fileName: "mini-36.jpg", tag: "pastel" },
    { fileName: "mini-37.jpg", tag: "pastel" },
    { fileName: "mini-38.jpg", tag: "acrylic" },
    { fileName: "mini-39.jpg", tag: "acrylic" },
    { fileName: "mini-40.jpg", tag: "acrylic" },
    { fileName: "mini-41.jpg", tag: "acrylic" },
    { fileName: "mini-42.jpg", tag: "acrylic" },
    { fileName: "mini-43.jpg", tag: "watercolor" },
    { fileName: "mini-44.jpg", tag: "acrylic" },
    { fileName: "mini-45.jpg", tag: "pencil" },
    { fileName: "mini-46.jpg", tag: "acrylic" },
    { fileName: "mini-47.jpg", tag: "watercolor" },
    { fileName: "mini-48.jpg", tag: "pastel" },
    { fileName: "mini-49.jpg", tag: "acrylic" },
    { fileName: "mini-50.jpg", tag: "acrylic" },
    { fileName: "mini-51.jpg", tag: "acrylic" },
    { fileName: "mini-52.jpg", tag: "pencil" },
    { fileName: "mini-53.jpg", tag: "acrylic" },
    { fileName: "mini-54.jpg", tag: "watercolor" },
    { fileName: "wide-1.jpg", tag: "pencil" },
    { fileName: "wide-2.jpg", tag: "pencil" },
    { fileName: "wide-3.jpg", tag: "acrylic" },
    { fileName: "wide-4.jpg", tag: "acrylic" }
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

	paintings.forEach(image => {
		const imageBox = document.createElement("div");
		imageBox.classList.add("image-box");

		// Set the data-tag attribute based on tag property
		imageBox.setAttribute("data-tag", image.tag || "other"); // Default to "other" if no match

		const img = document.createElement("img");
		img.classList.add("clickable-image");
		img.src = imageLocation + image.fileName; // Adjust path as needed
		img.alt = image.fileName;
		img.onclick = () => {
			enlargeImage(imageLocation + image.fileName);
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
