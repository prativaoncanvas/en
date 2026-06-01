// ============================================================
// Multi-select tag filter + tag-row scroll arrows
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    const tags = Array.from(document.querySelectorAll(".tag"));
    const allBtn = tags.find(t => t.getAttribute("data-tag") === "all");

    // Helper to read currently selected tags (excluding "all")
    function selectedTags() {
        return tags
            .filter(t => t.classList.contains("active") && t.getAttribute("data-tag") !== "all")
            .map(t => t.getAttribute("data-tag"));
    }

    function applyFilter() {
        const selected = selectedTags();
        const showAll = selected.length === 0;

        if (allBtn) {
            allBtn.classList.toggle("active", showAll);
        }

        const boxes = document.querySelectorAll(".image-box");
        let visible = 0;
        boxes.forEach(box => {
            if (showAll) {
                box.style.display = "";
                visible++;
                return;
            }
            const boxTags = (box.getAttribute("data-tags") || "").split(",").filter(Boolean);
            // OR logic: visible if any of its tags is in the selection
            const match = boxTags.some(t => selected.includes(t));
            box.style.display = match ? "" : "none";
            if (match) visible++;
        });

        // Empty-state message
        const container = document.querySelector(".image-container");
        if (container) {
            let empty = document.getElementById("empty-state");
            if (visible === 0) {
                if (!empty) {
                    empty = document.createElement("div");
                    empty.id = "empty-state";
                    empty.className = "empty-state";
                    empty.setAttribute("data-testid", "empty-state");
                    empty.textContent = "No paintings match the selected filters.";
                    container.parentNode.appendChild(empty);
                }
                empty.style.display = "block";
            } else if (empty) {
                empty.style.display = "none";
            }
        }
    }

    tags.forEach(tag => {
        const t = tag.getAttribute("data-tag");
        tag.setAttribute("data-testid", `tag-filter-${t}`);
        tag.addEventListener("click", function () {
            if (t === "all") {
                // Reset – deactivate everything else
                tags.forEach(x => x.classList.remove("active"));
                allBtn.classList.add("active");
            } else {
                this.classList.toggle("active");
                if (allBtn) allBtn.classList.remove("active");
            }
            applyFilter();
        });
    });

    // Initial state – "all" active by default
    applyFilter();

    // --- Tag row scroll arrows --------------------------------
    const tagContainer = document.querySelector(".tag-container");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    if (!tagContainer || !leftArrow || !rightArrow) return;

    const updateArrowVisibility = () => {
        const overflow = tagContainer.scrollWidth > tagContainer.clientWidth + 1;
        leftArrow.style.display  = overflow ? "inline-block" : "none";
        rightArrow.style.display = overflow ? "inline-block" : "none";
    };

    leftArrow.addEventListener("click", () => tagContainer.scrollBy({ left: -200, behavior: "smooth" }));
    rightArrow.addEventListener("click", () => tagContainer.scrollBy({ left:  200, behavior: "smooth" }));
    window.addEventListener("resize", updateArrowVisibility);
    updateArrowVisibility();
});
