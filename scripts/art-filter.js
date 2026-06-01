// ============================================================
// Single-select tag filter + tag-row scroll arrows
// Selecting a tag automatically deselects any previously
// selected tag. Re-clicking the active tag falls back to "all".
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    const tags = Array.from(document.querySelectorAll(".tag"));
    const allBtn = tags.find(t => t.getAttribute("data-tag") === "all");

    // Currently selected tag (single-select; "" means "all")
    function selectedTag() {
        const active = tags.find(t => t.classList.contains("active") &&
                                      t.getAttribute("data-tag") !== "all");
        return active ? active.getAttribute("data-tag") : "";
    }

    function applyFilter() {
        const selected = selectedTag();
        const showAll = !selected;

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
            const match = boxTags.includes(selected);
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
                    empty.textContent = "No paintings match the selected filter.";
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
                const wasActive = this.classList.contains("active");
                // Single-select: clear everything first
                tags.forEach(x => x.classList.remove("active"));
                if (wasActive) {
                    // Re-clicking the active tag falls back to "all"
                    if (allBtn) allBtn.classList.add("active");
                } else {
                    this.classList.add("active");
                }
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
