// ============================================================
// Fullscreen lightbox with prev/next navigation + Info panel
// Depends on window.PAINTINGS and window.getImageBase from
// paintings.js. Keyboard support: ArrowLeft / ArrowRight / Esc.
// ============================================================

(function () {
    let currentIndex = 0;
    let activePhotoIndex = 0;
    let currentMode = "image"; // "image" or "info"

    function visiblePaintings() {
        // Respect the active filters so prev/next only moves through
        // paintings currently shown on screen.
        return Array.from(document.querySelectorAll(".image-box"))
            .filter(b => b.style.display !== "none")
            .map(b => parseInt(b.getAttribute("data-index"), 10));
    }

    function $(id) { return document.getElementById(id); }

    function show(el)  { if (el) el.classList.add("is-open"); }
    function hide(el)  { if (el) el.classList.remove("is-open"); }

    function renderImageView() {
        const list = visiblePaintings();
        if (!list.length) return;
        if (!list.includes(currentIndex)) currentIndex = list[0];

        const p = window.PAINTINGS[currentIndex];
        const base = window.getImageBase();

        activePhotoIndex = 0;
        const mainImg = $("lightbox-img");
        mainImg.src = base + p.photos[activePhotoIndex];
        mainImg.alt = p.title;

        $("lightbox-title").textContent = p.title;
        $("lightbox-counter").textContent =
            (list.indexOf(currentIndex) + 1) + " / " + list.length;

        // Photo thumbnails strip (only shown if >1 photo)
        const strip = $("lightbox-thumbs");
        strip.innerHTML = "";
        if (p.photos.length > 1) {
            strip.style.display = "flex";
            p.photos.forEach((ph, i) => {
                const t = document.createElement("img");
                t.src = base + ph;
                t.className = "lightbox-thumb" + (i === 0 ? " active" : "");
                t.alt = p.title + " photo " + (i + 1);
                t.addEventListener("click", () => {
                    activePhotoIndex = i;
                    mainImg.src = base + p.photos[i];
                    strip.querySelectorAll(".lightbox-thumb").forEach((el, idx) =>
                        el.classList.toggle("active", idx === i));
                });
                strip.appendChild(t);
            });
        } else {
            strip.style.display = "none";
        }
    }

    function renderInfoView() {
        const p = window.PAINTINGS[currentIndex];
        const base = window.getImageBase();
        $("info-title").textContent = p.title;
        $("info-year").textContent = p.year;
        $("info-category").textContent = p.category;
        $("info-dimensions").textContent = p.dimensions;
        $("info-medium").textContent = p.medium;

        // Price row is controlled by the SHOW_PRICE flag in paintings.js
        const priceRow = $("info-price-row");
        if (priceRow) {
            if (window.SHOW_PRICE) {
                priceRow.style.display = "";
                $("info-price").textContent = p.price;
            } else {
                priceRow.style.display = "none";
                $("info-price").textContent = "";
            }
        }

        $("info-description").textContent = p.description;

        const tagsRow = $("info-tags");
        tagsRow.innerHTML = "";
        p.tags.forEach(t => {
            const chip = document.createElement("span");
            chip.className = "info-tag-chip";
            chip.textContent = t;
            tagsRow.appendChild(chip);
        });

        // Photo gallery inside info
        const gallery = $("info-photos");
        gallery.innerHTML = "";
        const heroImg = $("info-hero-img");
        heroImg.src = base + p.photos[0];
        heroImg.alt = p.title;

        p.photos.forEach((ph, i) => {
            const t = document.createElement("img");
            t.src = base + ph;
            t.className = "info-photo-thumb" + (i === 0 ? " active" : "");
            t.alt = p.title + " photo " + (i + 1);
            t.addEventListener("click", () => {
                heroImg.src = base + ph;
                gallery.querySelectorAll(".info-photo-thumb").forEach((el, idx) =>
                    el.classList.toggle("active", idx === i));
            });
            gallery.appendChild(t);
        });
        // hide the strip if only one photo
        gallery.style.display = p.photos.length > 1 ? "flex" : "none";
    }

    function move(delta) {
        const list = visiblePaintings();
        if (!list.length) return;
        let pos = list.indexOf(currentIndex);
        if (pos === -1) pos = 0;
        pos = (pos + delta + list.length) % list.length;
        currentIndex = list[pos];
        if (currentMode === "image") renderImageView();
        else renderInfoView();
    }

    function openLightbox(index) {
        currentIndex = index;
        currentMode = "image";
        renderImageView();
        show($("lightbox"));
        document.body.classList.add("lock-scroll");
    }

    function openInfo(index) {
        currentIndex = index;
        currentMode = "info";
        renderInfoView();
        show($("info-modal"));
        document.body.classList.add("lock-scroll");
    }

    function closeAll() {
        hide($("lightbox"));
        hide($("info-modal"));
        document.body.classList.remove("lock-scroll");
        currentMode = "image";
    }

    // Expose to other scripts
    window.openLightbox = openLightbox;
    window.openInfo = openInfo;
    window.closeLightbox = closeAll;

    document.addEventListener("DOMContentLoaded", function () {
        // wire close buttons
        document.querySelectorAll("[data-close-modal]").forEach(btn =>
            btn.addEventListener("click", closeAll));

        $("lightbox-prev").addEventListener("click", () => move(-1));
        $("lightbox-next").addEventListener("click", () => move(1));
        $("info-prev").addEventListener("click", () => move(-1));
        $("info-next").addEventListener("click", () => move(1));

        // Toggle from lightbox to info
        $("lightbox-info-btn").addEventListener("click", () => {
            currentMode = "info";
            hide($("lightbox"));
            renderInfoView();
            show($("info-modal"));
        });
        // Toggle from info to lightbox
        $("info-view-btn").addEventListener("click", () => {
            currentMode = "image";
            hide($("info-modal"));
            renderImageView();
            show($("lightbox"));
        });

        // Enquire — open WhatsApp with a pre-filled message
        $("info-enquire-btn").addEventListener("click", () => {
            const p = window.PAINTINGS[currentIndex];
            const phone = window.ENQUIRE_WHATSAPP || "918637541039";
            const lines = [
                `Hello Prativa, I would like to enquire about your painting "${p.title}".`,
                "",
                "Painting details:",
                `• Reference ID : ${p.id}`,
                `• Year         : ${p.year}`,
                `• Category     : ${p.category}`,
                `• Medium       : ${p.medium}`,
                `• Dimensions   : ${p.dimensions}`
            ];
            if (window.SHOW_PRICE) lines.push(`• Listed price : ${p.price}`);
            lines.push(
                "",
                "Could you please share availability, shipping options and next steps?",
                "",
                "My details:",
                "  Name : ",
                "  City : ",
                "",
                "Thank you!"
            );
            const text = lines.join("\n");
            const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(href, "_blank", "noopener");
        });

        // Click outside the inner card closes
        [$("lightbox"), $("info-modal")].forEach(modal => {
            modal.addEventListener("click", (e) => {
                if (e.target === modal) closeAll();
            });
        });

        // Keyboard
        document.addEventListener("keydown", (e) => {
            const open = $("lightbox").classList.contains("is-open") ||
                         $("info-modal").classList.contains("is-open");
            if (!open) return;
            if (e.key === "Escape") closeAll();
            else if (e.key === "ArrowRight") move(1);
            else if (e.key === "ArrowLeft")  move(-1);
        });

        // Touch swipe in lightbox
        let touchX = null;
        const lb = $("lightbox");
        lb.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
        lb.addEventListener("touchend", e => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) move(dx < 0 ? 1 : -1);
            touchX = null;
        });
    });
})();
