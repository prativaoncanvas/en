const videoUrls = [
	"https://www.youtube.com/embed/9ASmdzfAH3M?si=AM7qqa-NNE1JiQm2",
	"https://www.youtube.com/embed/NeBRCC-VXxw?si=A4k2L9UXk_jbwVUf",
	"https://www.youtube.com/embed/GbmaOsTI2ek?si=r0Hc6MFv2na-kCbr",
	"https://www.youtube.com/embed/dNkMJhp54C0?si=hDR76oND6q9gv5_4",
	"https://www.youtube.com/embed/zQgAe7K02kM?si=DClUfOB0NJ3y3kdT",
	"https://www.youtube.com/embed/q8Zbi9PiFHY?si=pqrgrI_JcprE5_1W"
];

// Function to render videos
function renderVideos() {
	const videoContainer = document.querySelector(".video-container");
	videoContainer.innerHTML = ""; // Clear any existing content

	videoUrls.forEach(url => {
		const videoDiv = document.createElement("div");
		videoDiv.classList.add("video");

		const iframe = document.createElement("iframe");
		iframe.width = "426";
		iframe.height = "240";
		iframe.src = url;
		iframe.title = "YouTube video player";
		iframe.frameBorder = "0";
		iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
		iframe.referrerPolicy = "strict-origin-when-cross-origin";
		iframe.allowFullscreen = true;

		videoDiv.appendChild(iframe);
		videoContainer.appendChild(videoDiv);
	});
}

// Call renderVideos when the page loads
document.addEventListener("DOMContentLoaded", renderVideos);
