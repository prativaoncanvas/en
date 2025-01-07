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

document.addEventListener("DOMContentLoaded", function() {
    const tagContainer = document.querySelector('.tag-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const updateArrowVisibility = () => {
        if (tagContainer.scrollWidth > tagContainer.clientWidth) {
            leftArrow.style.display = 'block';
            rightArrow.style.display = 'block';
        } else {
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'none';
        }
    };

    leftArrow.addEventListener('click', () => {
        tagContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        tagContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    window.addEventListener('resize', updateArrowVisibility);
    updateArrowVisibility(); // Initial check when the page loads
});

