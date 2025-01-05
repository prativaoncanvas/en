const videoUrls = [
	"https://www.youtube.com/embed/WXoirl1ByzQ?si=w2WPf0TfQixkWkO9",
	"https://www.youtube.com/embed/5lRLCOIR4r0?si=NdyMrEx7DlKz1E7N",
	"https://www.youtube.com/embed/dNkMJhp54C0?si=hDR76oND6q9gv5_4",
	"https://www.youtube.com/embed/znQx3vOhEG4?si=tS8mZIdKnU2qktEq",
	"https://www.youtube.com/embed/4CtPodTGMFc?si=axPwYgHwqTQ31D4Z",
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
		iframe.width = "560";
		iframe.height = "315";
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
