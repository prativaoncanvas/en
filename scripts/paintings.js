// ============================================================
// Paintings catalogue — Prativa on Canvas
//
// • `tags`       – array of category tags (drives the filter)
// • per-entry overrides (title, year, description, photos) are
//   optional. Missing fields are derived from the category
//   defaults below.
//
// IMPORTANT: The metadata in this file is PLACEHOLDER content
// generated based on the visible subject of each image and
// consistent category defaults (per medium × per size). The
// artist (Prativa) should replace these with real titles,
// years, dimensions, prices and descriptions whenever possible.
// Look for the marker  // PLACEHOLDER  next to each painting.
// ============================================================

// ------------------------------------------------------------
// SITE CONFIG
// ------------------------------------------------------------
// Toggle this flag to show / hide painting prices everywhere
// (info modal + Enquire mail template). Flip to `true` when
// you are ready to publish prices. Default: hidden.
// ------------------------------------------------------------
const SHOW_PRICE = false;
window.SHOW_PRICE = SHOW_PRICE;

// Contact WhatsApp number used by the "Enquire on WhatsApp" button on
// each painting. wa.me expects the country code without the leading "+".
const ENQUIRE_WHATSAPP = "918637541039";
window.ENQUIRE_WHATSAPP = ENQUIRE_WHATSAPP;

const paintings = [
    // ───── art-* series · Standard A3 works ─────
    { fileName: "art-41.jpg", tags: ["pencil"],     title: "Lord Ganesh — Charcoal Study",            year: 2022 }, // PLACEHOLDER
    { fileName: "art-42.jpg", tags: ["pencil"],     title: "Bal Gopal — The Laughing Krishna",         year: 2022 }, // PLACEHOLDER
    { fileName: "art-46.jpg", tags: ["acrylic"],    title: "Devi Durga — Glow of the Goddess",         year: 2024 }, // PLACEHOLDER
    { fileName: "art-43.jpg", tags: ["pencil"],     title: "Lord Hanuman — The Eternal Devotee",       year: 2023 }, // PLACEHOLDER
    { fileName: "art-45.jpg", tags: ["pencil"],     title: "Personal Portrait",                         year: 2022 }, // PLACEHOLDER
    { fileName: "art-47.jpg", tags: ["pencil"],     title: "Personal Portrait",                		   year: 2023 }, // PLACEHOLDER
    { fileName: "art-51.jpg", tags: ["pencil"],     title: "Krishnakumar Kunnath (KK)",                year: 2024 }, // PLACEHOLDER
    { fileName: "art-53.jpg", tags: ["pencil"],     title: "Kavi Guru Tagore",                         year: 2023 }, // PLACEHOLDER
    { fileName: "art-48.jpg", tags: ["acrylic"],    title: "Young Durga",  						       year: 2024 }, // PLACEHOLDER
    { fileName: "art-50.jpg", tags: ["pencil"],     title: "Personal Portrait",        				   year: 2023 }, // PLACEHOLDER
    { fileName: "art-49.jpg", tags: ["acrylic"],    title: "Maa Kali — Fierce Compassion",             year: 2024 }, // PLACEHOLDER
    { fileName: "art-44.jpg", tags: ["pencil"],     title: "Bal Gopal — The Laughing Krishna",         year: 2022 }, // PLACEHOLDER
    { fileName: "art-52.jpg", tags: ["acrylic"],    title: "Om Namah Shivaya",                           year: 2024 }, // PLACEHOLDER
    { fileName: "art-55.jpg", tags: ["acrylic"],    title: "Devi Saraswati",                           year: 2024 }, // PLACEHOLDER
    { fileName: "art-54.jpg", tags: ["watercolor"], title: "Devi Durga",                               year: 2024 }, // PLACEHOLDER
    { fileName: "art-56.jpg", tags: ["watercolor"], title: "Little Krishna",                     year: 2024 }, // PLACEHOLDER
    { fileName: "art-39.jpg", tags: ["acrylic"],    title: "Quiet Place - Peace",                   year: 2023 }, // PLACEHOLDER
    { fileName: "art-34.jpg", tags: ["pencil"],     title: "Personal Portrait - Young Batman",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-33.jpg", tags: ["acrylic"],    title: "Lord Siva",               year: 2023 }, // PLACEHOLDER
    { fileName: "art-35.jpg", tags: ["pencil"],     title: "Personal Portrait",               year: 2023 }, // PLACEHOLDER
    { fileName: "art-36.jpg", tags: ["pencil"],     title: "Personal Portrait",                      year: 2023 }, // PLACEHOLDER
    { fileName: "art-37.jpg", tags: ["pencil"],     title: "Personal Portrait",        year: 2023 }, // PLACEHOLDER
    { fileName: "art-38.jpg", tags: ["acrylic"],    title: "Mahavir",        year: 2024 }, // PLACEHOLDER
    { fileName: "art-40.jpg", tags: ["acrylic"],    title: "The Eternal Devotee",                year: 2024 }, // PLACEHOLDER
    { fileName: "art-1.jpg",  tags: ["pencil"],     title: "Personal Portrait - Young Durga",               year: 2021 }, // PLACEHOLDER
    { fileName: "art-2.jpg",  tags: ["pencil"],     title: "Personal Portrait - Young Durga",                           year: 2021 }, // PLACEHOLDER
    { fileName: "art-3.jpg",  tags: ["acrylic"],    title: "Mahavir",                   year: 2021 }, // PLACEHOLDER
    { fileName: "art-4.jpg",  tags: ["acrylic"],    title: "Mahavir",                           year: 2021 }, // PLACEHOLDER
    { fileName: "art-5.jpg",  tags: ["pastel"],     title: "Mahavir",                 year: 2021 }, // PLACEHOLDER
    { fileName: "art-6.jpg",  tags: ["pastel"],     title: "Mahavir",                          year: 2021 }, // PLACEHOLDER
    { fileName: "art-7.jpg",  tags: ["pencil"],     title: "Personal Portrait - Young Durga",                      year: 2022 }, // PLACEHOLDER
    { fileName: "art-8.jpg",  tags: ["acrylic"],    title: "Ganapathi Bappa",              year: 2022 }, // PLACEHOLDER
    { fileName: "art-9.jpg",  tags: ["acrylic"],    title: "Ganapathi Bappa",                    year: 2022 }, // PLACEHOLDER
    { fileName: "art-10.jpg", tags: ["acrylic"],    title: "Ganapathi Bappa",                    year: 2022 }, // PLACEHOLDER
    { fileName: "art-11.jpg", tags: ["pencil"],     title: "Young Krishna",                               year: 2022 }, // PLACEHOLDER
    { fileName: "art-12.jpg", tags: ["watercolor"], title: "Young Krishna with Peacock Feather",       year: 2022 }, // PLACEHOLDER
    { fileName: "art-13.jpg", tags: ["acrylic"],    title: "Radha Krishna",                   year: 2022 }, // PLACEHOLDER
    { fileName: "art-14.jpg", tags: ["acrylic"],    title: "Lord Hanuman",                             year: 2022 }, // PLACEHOLDER
    { fileName: "art-15.jpg", tags: ["acrylic"],    title: "Maa Kali",                         year: 2022 }, // PLACEHOLDER
    { fileName: "art-16.jpg", tags: ["watercolor"], title: "Cute Kali",                     year: 2022 }, // PLACEHOLDER
    { fileName: "art-17.jpg", tags: ["acrylic"],    title: "Maa Lakshmi",                          year: 2022 }, // PLACEHOLDER
    { fileName: "art-18.jpg", tags: ["pencil"],     title: "Mr. Bean",                      year: 2022 }, // PLACEHOLDER
    { fileName: "art-19.jpg", tags: ["pencil"],     title: "Personal Portrait",                         year: 2022 }, // PLACEHOLDER
    { fileName: "art-20.jpg", tags: ["pencil"],     title: "Personal Portrait",                           year: 2022 }, // PLACEHOLDER
    { fileName: "art-21.jpg", tags: ["pencil"],     title: "Personal Portrait",                         year: 2023 }, // PLACEHOLDER
    { fileName: "art-22.jpg", tags: ["pencil"],     title: "SSR",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-23.jpg", tags: ["pencil"],     title: "Personal Portrait",                   year: 2023 }, // PLACEHOLDER
    { fileName: "art-24.jpg", tags: ["pencil"],     title: "Aishwarya Rai",                           year: 2023 }, // PLACEHOLDER
    { fileName: "art-25.jpg", tags: ["pencil"],     title: "Personal Portrait",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-26.jpg", tags: ["pencil"],     title: "Personal Portrait",                   year: 2023 }, // PLACEHOLDER
    { fileName: "art-27.jpg", tags: ["pencil"],     title: "Personal Portrait",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-28.jpg", tags: ["pencil"],     title: "Personal Portrait",                           year: 2023 }, // PLACEHOLDER
    { fileName: "art-29.jpg", tags: ["acrylic"],    title: "Personal Portrait",                  year: 2023 }, // PLACEHOLDER
    { fileName: "art-30.jpg", tags: ["pencil"],     title: "Personal Portrait",                             year: 2023 }, // PLACEHOLDER
    { fileName: "art-31.jpg", tags: ["watercolor"], title: "Personal Portrait",              year: 2023 }, // PLACEHOLDER
    { fileName: "art-32.jpg", tags: ["pencil"],     title: "Mahasweta Devi",                            year: 2023 }, // PLACEHOLDER

    // ───── mini-* series · A5 miniature studies ─────
    { fileName: "mini-1.jpg",  tags: ["pastel"],     title: "Durga — Festive Glow",                    year: 2023 }, // PLACEHOLDER
    { fileName: "mini-2.jpg",  tags: ["acrylic"],    title: "Golden Sunrise",                year: 2023 }, // PLACEHOLDER
    { fileName: "mini-3.jpg",  tags: ["acrylic"],    title: "Lotus",                             year: 2023 }, // PLACEHOLDER
    { fileName: "mini-4.jpg",  tags: ["watercolor"], title: "Lime",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-5.jpg",  tags: ["acrylic"],    title: "Journey - Looking Back",             year: 2024 }, // PLACEHOLDER
    { fileName: "mini-6.jpg",  tags: ["watercolor"], title: "Roses",                      year: 2024 }, // PLACEHOLDER
    { fileName: "mini-7.jpg",  tags: ["acrylic"],    title: "Fence",                           year: 2024 }, // PLACEHOLDER
    { fileName: "mini-8.jpg",  tags: ["other"],      title: "Flower Vase",                  year: 2023 }, // PLACEHOLDER
    { fileName: "mini-9.jpg",  tags: ["pastel"],     title: "Rainy Day",                      year: 2023 }, // PLACEHOLDER
    { fileName: "mini-10.jpg", tags: ["acrylic"],    title: "Rainy Day",                  year: 2024 }, // PLACEHOLDER
    { fileName: "mini-56.jpg", tags: ["watercolor"], title: "Breakfast Dish",                       year: 2025 }, // PLACEHOLDER
    { fileName: "mini-57.jpg", tags: ["watercolor"], title: "Fruits",                  year: 2025 }, // PLACEHOLDER
    { fileName: "mini-68.jpg", tags: ["watercolor"], title: "Flowers",                    year: 2025 }, // PLACEHOLDER
    { fileName: "mini-69.jpg", tags: ["watercolor"], title: "Lights",                    year: 2025 }, // PLACEHOLDER
    { fileName: "mini-11.jpg", tags: ["acrylic"],    title: "Eiffel Tower",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-12.jpg", tags: ["acrylic"],    title: "Sea Shore",                             year: 2024 }, // PLACEHOLDER
    { fileName: "mini-13.jpg", tags: ["sketch"],     title: "Abstract",                year: 2023 }, // PLACEHOLDER
    { fileName: "mini-14.jpg", tags: ["acrylic"],    title: "Peace",                        year: 2024 }, // PLACEHOLDER
    { fileName: "mini-15.jpg", tags: ["pastel"],     title: "Lord Rama",               year: 2023 }, // PLACEHOLDER
    { fileName: "mini-59.jpg", tags: ["watercolor"], title: "Flowers",                         year: 2025 }, // PLACEHOLDER
    { fileName: "mini-60.jpg", tags: ["watercolor"], title: "Breakfast",                      year: 2025 }, // PLACEHOLDER
    { fileName: "mini-16.jpg", tags: ["sketch"],     title: "Abstract",                  year: 2023 }, // PLACEHOLDER
    { fileName: "mini-17.jpg", tags: ["watercolor"], title: "Jai Hind",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-18.jpg", tags: ["acrylic"],    title: "Abstract",              year: 2024 }, // PLACEHOLDER
    { fileName: "mini-19.jpg", tags: ["sketch"],     title: "Thinking",                   year: 2023 }, // PLACEHOLDER
    { fileName: "mini-20.jpg", tags: ["acrylic"],    title: "Abstract",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-64.jpg", tags: ["other"],      title: "Abstract",             year: 2025 }, // PLACEHOLDER
    { fileName: "mini-21.jpg", tags: ["acrylic"],    title: "Jai Hind",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-22.jpg", tags: ["acrylic"],    title: "Rama",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-61.jpg", tags: ["watercolor"], title: "Fall Colors",               year: 2025 }, // PLACEHOLDER
    { fileName: "mini-62.jpg", tags: ["watercolor"], title: "Great Smoky Mountains",              year: 2025 }, // PLACEHOLDER
    { fileName: "mini-65.jpg", tags: ["watercolor"], title: "Fall Colors",             year: 2025 }, // PLACEHOLDER
    { fileName: "mini-66.jpg", tags: ["watercolor"], title: "Spring Colors",                 year: 2025 }, // PLACEHOLDER
    { fileName: "mini-23.jpg", tags: ["acrylic"],    title: "Abstract",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-24.jpg", tags: ["acrylic"],    title: "Jai Shree Ram",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-25.jpg", tags: ["sketch"],     title: "Charcoal — Thinking",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-26.jpg", tags: ["acrylic"],    title: "Krishna's Flute",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-71.jpg", tags: ["pastel"],     title: "Pastel Portrait — Village",         year: 2025 }, // PLACEHOLDER
    { fileName: "mini-58.jpg", tags: ["pastel"],     title: "Ho Ho Ho!",                year: 2025 }, // PLACEHOLDER
    { fileName: "mini-55.jpg", tags: ["pastel"],     title: "Beach",                  year: 2025 }, // PLACEHOLDER
    { fileName: "mini-27.jpg", tags: ["acrylic"],    title: "Swamiji",                  year: 2024 }, // PLACEHOLDER
    { fileName: "mini-28.jpg", tags: ["acrylic"],    title: "Abstract",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-70.jpg", tags: ["other"],      title: "Family - Where Love Begins",                year: 2025 }, // PLACEHOLDER
    { fileName: "mini-29.jpg", tags: ["pastel"],     title: "Abstract",             year: 2024 }, // PLACEHOLDER
    { fileName: "mini-30.jpg", tags: ["watercolor"], title: "Never Stop Trying — Inspiration Splash",  year: 2024 }, // PLACEHOLDER
    { fileName: "mini-31.jpg", tags: ["sketch"],     title: "Charcoal — Horse",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-32.jpg", tags: ["watercolor"], title: "Watercolor — Krishna",            year: 2024 }, // PLACEHOLDER
    { fileName: "mini-33.jpg", tags: ["sketch"],     title: "Happy New Year",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-72.jpg", tags: ["sketch"],     title: "Flute",                  year: 2025 }, // PLACEHOLDER
    { fileName: "mini-63.jpg", tags: ["sketch"],     title: "The Road Journey",                 year: 2025 }, // PLACEHOLDER
    { fileName: "mini-34.jpg", tags: ["watercolor"], title: "Flowers",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-35.jpg", tags: ["acrylic"],    title: "Flowers",                   year: 2024 }, // PLACEHOLDER
    { fileName: "mini-36.jpg", tags: ["pastel"],     title: "Abstract",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-37.jpg", tags: ["pastel"],     title: "Mountain Nights",                    year: 2024 }, // PLACEHOLDER
    { fileName: "mini-38.jpg", tags: ["acrylic"],    title: "Abstract",                   year: 2024 }, // PLACEHOLDER
    { fileName: "mini-39.jpg", tags: ["acrylic"],    title: "Splash",                      year: 2024 }, // PLACEHOLDER
    { fileName: "mini-40.jpg", tags: ["acrylic"],    title: "Flowers",                    year: 2024 }, // PLACEHOLDER
    { fileName: "mini-41.jpg", tags: ["acrylic"],    title: "Flowers",                        year: 2024 }, // PLACEHOLDER
    { fileName: "mini-67.jpg", tags: ["pastel"],     title: "Merry Christmas",         year: 2025 }, // PLACEHOLDER
    { fileName: "mini-42.jpg", tags: ["acrylic"],    title: "Avocado",                       year: 2024 }, // PLACEHOLDER
    { fileName: "mini-43.jpg", tags: ["watercolor"], title: "Watercolor — Lady",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-44.jpg", tags: ["acrylic"],    title: "Flowers",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-45.jpg", tags: ["pencil"],     title: "Tuhi Mera Shab Hain - KK",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-46.jpg", tags: ["acrylic"],    title: "Mountains",                    year: 2024 }, // PLACEHOLDER
    { fileName: "mini-47.jpg", tags: ["watercolor"], title: "Doggy",              year: 2024 }, // PLACEHOLDER
    { fileName: "mini-48.jpg", tags: ["pastel"],     title: "Vase",                     year: 2024 }, // PLACEHOLDER
    { fileName: "mini-49.jpg", tags: ["acrylic"],    title: "Flowers",                                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-50.jpg", tags: ["acrylic"],    title: "Maa Durga",                      year: 2024 }, // PLACEHOLDER
    { fileName: "mini-51.jpg", tags: ["acrylic"],    title: "Abstract",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-52.jpg", tags: ["pencil"],     title: "Cat",              year: 2024 }, // PLACEHOLDER
    { fileName: "mini-53.jpg", tags: ["acrylic"],    title: "Lord Ganesh",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-54.jpg", tags: ["watercolor"], title: "Splash",            year: 2024 }, // PLACEHOLDER

    // ───── wide-* series · Panoramic format ─────
    { fileName: "wide-1.jpg",  tags: ["pencil"],  title: "Joyful Innocence — Personal Baby Portrait",           year: 2023 }, // PLACEHOLDER
    { fileName: "wide-2.jpg",  tags: ["pencil"],  title: "Winner - Olympics",                                  year: 2024 }, // PLACEHOLDER
    { fileName: "wide-3.jpg",  tags: ["acrylic"], title: "Krishna at Sunset — Silhouette",             year: 2024 }, // PLACEHOLDER
    { fileName: "wide-4.jpg",  tags: ["acrylic"], title: "Panorama — Remote Village",                    year: 2025 }  // PLACEHOLDER
];

// ============================================================
//                CATEGORY-BASED DEFAULTS
// ============================================================

const MEDIUM_DEFAULTS = {
    acrylic:    "Acrylic on stretched canvas",
    pastel:     "Soft pastel on toned paper",
    watercolor: "Watercolor on cold-press paper",
    pencil:     "Graphite & charcoal on Fabriano paper",
    sketch:     "Charcoal sketch on textured paper",
    other:      "Mixed media on canvas board"
};

const SIZE_DEFAULTS = {
    "art-":  { dim: "A3  ·  29.7 × 42 cm",        category: "Standard"     },
    "mini-": { dim: "A5  ·  14.8 × 21 cm",        category: "Miniature"    },
    "wide-": { dim: "Panoramic  ·  60 × 25 cm",   category: "Wide format"  }
};

// Price matrix: size × medium  (INR — PLACEHOLDER pricing)
const PRICE_MATRIX = {
    "art-": {
        acrylic: "₹9,500", pastel: "₹7,500", watercolor: "₹7,000",
        pencil:  "₹6,500", sketch: "₹6,000", other:      "₹7,500"
    },
    "mini-": {
        acrylic: "₹3,200", pastel: "₹2,800", watercolor: "₹2,600",
        pencil:  "₹2,200", sketch: "₹2,000", other:      "₹2,500"
    },
    "wide-": {
        acrylic: "₹22,000", pastel: "₹18,000", watercolor: "₹17,000",
        pencil:  "₹16,000", sketch: "₹15,000", other:      "₹18,000"
    }
};

// Generic description per medium (used when an entry has none)
const DESCRIPTION_DEFAULTS = {
    acrylic:    "An acrylic original, layered patiently to coax depth from a limited palette.",
    pastel:     "A soft-pastel work where pigment is built up in airy layers and fused with feather-light blending.",
    watercolor: "A watercolor study — wet-on-wet washes, controlled bleeds and quiet white space tell the story.",
    pencil:     "A patient graphite study, rendered stroke by stroke on archival Fabriano paper.",
    sketch:     "A spontaneous charcoal sketch capturing mood over precision — every smudge is intentional.",
    other:      "A mixed-media exploration combining several techniques on a single surface."
};

// ============================================================
//                    HELPER FUNCTIONS
// ============================================================

function sizeKeyFor(fileName) {
    if (fileName.startsWith("mini-")) return "mini-";
    if (fileName.startsWith("wide-")) return "wide-";
    return "art-";
}

function prettyTitle(fileName) {
    const m = fileName.match(/^(art|mini|wide)-(\d+)\.jpg$/i);
    if (!m) return fileName.replace(/\.jpg$/i, "");
    const prefix = { art: "Study", mini: "Miniature", wide: "Panorama" }[m[1].toLowerCase()];
    return `${prefix} № ${m[2]}`;
}

function buildMeta(p) {
    const tags        = p.tags && p.tags.length ? p.tags : ["other"];
    const primaryTag  = tags[0];
    const sizeKey     = sizeKeyFor(p.fileName);
    const sz          = SIZE_DEFAULTS[sizeKey];
    const price       = (PRICE_MATRIX[sizeKey] || {})[primaryTag] || "On request";
    // deterministic year fallback so it never changes between renders
    const seed        = (p.fileName.match(/\d+/) || [0])[0] | 0;
    const fallbackYear = 2022 + (seed % 3);

    return {
        id:          p.fileName.replace(/\.jpg$/i, ""),
        fileName:    p.fileName,
        title:       p.title       || prettyTitle(p.fileName),
        tags,
        year:        p.year        || fallbackYear,
        dimensions:  p.dimensions  || sz.dim,
        category:    p.category    || sz.category,
        medium:      p.medium      || MEDIUM_DEFAULTS[primaryTag] || MEDIUM_DEFAULTS.other,
        price:       p.price       || price,
        description: p.description || DESCRIPTION_DEFAULTS[primaryTag] || DESCRIPTION_DEFAULTS.other,
        photos:      (p.photos && p.photos.length ? p.photos : [p.fileName])
    };
}

// Expose enriched catalogue globally for filter & lightbox scripts
window.PAINTINGS = paintings.map(buildMeta);

// ============================================================
//                    IMAGE BASE PATH
// ============================================================
function getImageBase() {
    // Bengali pages live at /bn/ and reach the shared image folder via an
    // absolute path. English pages use a relative path from the site root.
    const lang = document.documentElement.lang;
    return lang === "bn" ? "/arts/" : "arts/";
}
window.getImageBase = getImageBase;

// ============================================================
//                       RENDER CARDS
// ============================================================
function renderPaintings() {
    const container = document.querySelector(".image-container");
    if (!container) return;
    container.innerHTML = "";

    const base          = getImageBase();
    const lang          = document.documentElement.lang;
    const watermarkText = lang === "bn" ? "প্রতিভার ক্যানভাস" : "Prativa on Canvas";

    window.PAINTINGS.forEach((p, index) => {
        const box = document.createElement("div");
        box.classList.add("image-box");
        box.setAttribute("data-tags", p.tags.join(","));
        box.setAttribute("data-index", index);
        box.setAttribute("data-testid", `painting-card-${p.id}`);

        const img = document.createElement("img");
        img.classList.add("clickable-image");
        img.src = base + p.fileName;
        img.alt = p.title;
        img.loading = "lazy";
        img.setAttribute("data-testid", `painting-image-${p.id}`);
        img.addEventListener("click", () => window.openLightbox(index));

        const watermark = document.createElement("div");
        watermark.classList.add("watermark");
        watermark.textContent = watermarkText;

        const infoBtn = document.createElement("button");
        infoBtn.className = "info-btn";
        infoBtn.type = "button";
        infoBtn.innerHTML = '<i class="fas fa-info-circle"></i>';
        infoBtn.setAttribute("aria-label", "View painting details");
        infoBtn.setAttribute("data-testid", `painting-info-btn-${p.id}`);
        infoBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            window.openInfo(index);
        });

        const chipRow = document.createElement("div");
        chipRow.className = "card-tags";
        p.tags.forEach(t => {
            const chip = document.createElement("span");
            chip.className = "card-tag-chip";
            chip.textContent = t;
            chipRow.appendChild(chip);
        });

        box.appendChild(img);
        box.appendChild(watermark);
        box.appendChild(infoBtn);
        box.appendChild(chipRow);
        container.appendChild(box);
    });
}

document.addEventListener("DOMContentLoaded", renderPaintings);
