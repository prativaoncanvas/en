let timeout;

function hideFooter() {
    if (!isScrolledToBottom()) {
        document.querySelector("footer").classList.add("hidden");
    }
}

function showFooter() {
    document.querySelector("footer").classList.remove("hidden");
    clearTimeout(timeout);
    if (!isScrolledToBottom()) {
        timeout = setTimeout(hideFooter, 2000); // Hide after 2 seconds of inactivity
    }
}

function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

document.addEventListener("scroll", () => {
    showFooter();
    if (isScrolledToBottom()) {
        document.querySelector("footer").classList.remove("hidden"); // Always show at bottom
    }
});

document.addEventListener("mousemove", showFooter);
document.addEventListener("touchstart", showFooter);

timeout = setTimeout(hideFooter, 2000); // Initial timeout