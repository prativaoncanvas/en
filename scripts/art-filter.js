document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll(".tag");
    const images = document.querySelectorAll(".image-box");

    tags.forEach(tag => {
        tag.addEventListener("click", function () {
            const selectedTag = this.getAttribute("data-tag");

            // Show/hide images based on selected tag
            images.forEach(image => {
                const imageTag = image.getAttribute("data-tag");
                if (selectedTag === "all" || imageTag === selectedTag) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });

            // Update active tag style
            tags.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });
});