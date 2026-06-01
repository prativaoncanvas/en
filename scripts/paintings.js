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

const paintings = [
    // ───── art-* series · Standard A3 works ─────
    { fileName: "art-41.jpg", tags: ["pencil"],     title: "Lord Ganesha — Charcoal Study",            year: 2022 }, // PLACEHOLDER
    { fileName: "art-42.jpg", tags: ["pencil"],     title: "Bal Gopal — The Laughing Krishna",         year: 2022 }, // PLACEHOLDER
    { fileName: "art-46.jpg", tags: ["acrylic"],    title: "Devi Durga — Glow of the Goddess",         year: 2024 }, // PLACEHOLDER
    { fileName: "art-43.jpg", tags: ["pencil"],     title: "Lord Hanuman — The Eternal Devotee",       year: 2023 }, // PLACEHOLDER
    { fileName: "art-45.jpg", tags: ["pencil"],     title: "Radha in Repose",                          year: 2022 }, // PLACEHOLDER
    { fileName: "art-47.jpg", tags: ["pencil"],     title: "Saraswati — Veena & Verse",                year: 2023 }, // PLACEHOLDER
    { fileName: "art-51.jpg", tags: ["pencil"],     title: "Bharat Mata",                              year: 2024 }, // PLACEHOLDER
    { fileName: "art-53.jpg", tags: ["pencil"],     title: "Portrait of a Village Elder",              year: 2023 }, // PLACEHOLDER
    { fileName: "art-48.jpg", tags: ["acrylic"],    title: "The Artist & Her Shiva — Self Portrait",   year: 2024 }, // PLACEHOLDER
    { fileName: "art-50.jpg", tags: ["pencil"],     title: "Krishna with the Peacock Feather",         year: 2023 }, // PLACEHOLDER
    { fileName: "art-49.jpg", tags: ["acrylic"],    title: "Maa Kali — Fierce Compassion",             year: 2024 }, // PLACEHOLDER
    { fileName: "art-44.jpg", tags: ["pencil"],     title: "The Quiet Sadhu",                          year: 2022 }, // PLACEHOLDER
    { fileName: "art-52.jpg", tags: ["acrylic"],    title: "Lakshmi — Lotus & Light",                  year: 2024 }, // PLACEHOLDER
    { fileName: "art-55.jpg", tags: ["acrylic"],    title: "Shiva Tandava",                            year: 2024 }, // PLACEHOLDER
    { fileName: "art-54.jpg", tags: ["watercolor"], title: "Monsoon Lotus Pond",                       year: 2024 }, // PLACEHOLDER
    { fileName: "art-56.jpg", tags: ["watercolor"], title: "Banaras Ghat at Dawn",                     year: 2024 }, // PLACEHOLDER
    { fileName: "art-39.jpg", tags: ["acrylic"],    title: "Shiva in Crimson Drape",                   year: 2023 }, // PLACEHOLDER
    { fileName: "art-34.jpg", tags: ["pencil"],     title: "Durga — The Mother",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-33.jpg", tags: ["acrylic"],    title: "Radha-Krishna in Vrindavan",               year: 2023 }, // PLACEHOLDER
    { fileName: "art-35.jpg", tags: ["pencil"],     title: "Buddha — Pause Before Dawn",               year: 2023 }, // PLACEHOLDER
    { fileName: "art-36.jpg", tags: ["pencil"],     title: "Eyes of the Devotee",                      year: 2023 }, // PLACEHOLDER
    { fileName: "art-37.jpg", tags: ["pencil"],     title: "Parvati — The Mountain's Daughter",        year: 2023 }, // PLACEHOLDER
    { fileName: "art-38.jpg", tags: ["acrylic"],    title: "Ganesha — The Joyful Vighna-harta",        year: 2024 }, // PLACEHOLDER
    { fileName: "art-40.jpg", tags: ["acrylic"],    title: "Krishna Holding Govardhan",                year: 2024 }, // PLACEHOLDER
    { fileName: "art-1.jpg",  tags: ["pencil"],     title: "Self Portrait, Age Sixteen",               year: 2021 }, // PLACEHOLDER
    { fileName: "art-2.jpg",  tags: ["pencil"],     title: "Mother & Child",                           year: 2021 }, // PLACEHOLDER
    { fileName: "art-3.jpg",  tags: ["acrylic"],    title: "Sunset Over the Ganges",                   year: 2021 }, // PLACEHOLDER
    { fileName: "art-4.jpg",  tags: ["acrylic"],    title: "Tribal Drummer",                           year: 2021 }, // PLACEHOLDER
    { fileName: "art-5.jpg",  tags: ["pastel"],     title: "Misty Morning Tea Garden",                 year: 2021 }, // PLACEHOLDER
    { fileName: "art-6.jpg",  tags: ["pastel"],     title: "The Saree Stall",                          year: 2021 }, // PLACEHOLDER
    { fileName: "art-7.jpg",  tags: ["pencil"],     title: "Old Man with a Pipe",                      year: 2022 }, // PLACEHOLDER
    { fileName: "art-8.jpg",  tags: ["acrylic"],    title: "Festival of Lights — Diwali",              year: 2022 }, // PLACEHOLDER
    { fileName: "art-9.jpg",  tags: ["acrylic"],    title: "Holi — Riot of Colour",                    year: 2022 }, // PLACEHOLDER
    { fileName: "art-10.jpg", tags: ["acrylic"],    title: "Boatman of Sundarbans",                    year: 2022 }, // PLACEHOLDER
    { fileName: "art-11.jpg", tags: ["pencil"],     title: "The Reader",                               year: 2022 }, // PLACEHOLDER
    { fileName: "art-12.jpg", tags: ["watercolor"], title: "Young Krishna with Peacock Feather",       year: 2022 }, // PLACEHOLDER
    { fileName: "art-13.jpg", tags: ["acrylic"],    title: "Rajasthani Folk Dancer",                   year: 2022 }, // PLACEHOLDER
    { fileName: "art-14.jpg", tags: ["acrylic"],    title: "Lotus & Moon",                             year: 2022 }, // PLACEHOLDER
    { fileName: "art-15.jpg", tags: ["acrylic"],    title: "Bride in Crimson",                         year: 2022 }, // PLACEHOLDER
    { fileName: "art-16.jpg", tags: ["watercolor"], title: "Rainy Day in Kolkata",                     year: 2022 }, // PLACEHOLDER
    { fileName: "art-17.jpg", tags: ["acrylic"],    title: "Peacock at Dawn",                          year: 2022 }, // PLACEHOLDER
    { fileName: "art-18.jpg", tags: ["pencil"],     title: "Grandmother's Hands",                      year: 2022 }, // PLACEHOLDER
    { fileName: "art-19.jpg", tags: ["pencil"],     title: "The Tabla Player",                         year: 2022 }, // PLACEHOLDER
    { fileName: "art-20.jpg", tags: ["pencil"],     title: "Sleeping Child",                           year: 2022 }, // PLACEHOLDER
    { fileName: "art-21.jpg", tags: ["pencil"],     title: "The Florist Girl",                         year: 2023 }, // PLACEHOLDER
    { fileName: "art-22.jpg", tags: ["pencil"],     title: "Wrinkles of Wisdom",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-23.jpg", tags: ["pencil"],     title: "Eyes That Tell Stories",                   year: 2023 }, // PLACEHOLDER
    { fileName: "art-24.jpg", tags: ["pencil"],     title: "Sufi in Prayer",                           year: 2023 }, // PLACEHOLDER
    { fileName: "art-25.jpg", tags: ["pencil"],     title: "The Potter at Work",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-26.jpg", tags: ["pencil"],     title: "Schoolgirl in Pigtails",                   year: 2023 }, // PLACEHOLDER
    { fileName: "art-27.jpg", tags: ["pencil"],     title: "Krishna & the Calf",                       year: 2023 }, // PLACEHOLDER
    { fileName: "art-28.jpg", tags: ["pencil"],     title: "The Old Banyan",                           year: 2023 }, // PLACEHOLDER
    { fileName: "art-29.jpg", tags: ["acrylic"],    title: "Devi Saraswati in White",                  year: 2023 }, // PLACEHOLDER
    { fileName: "art-30.jpg", tags: ["pencil"],     title: "Father & Son",                             year: 2023 }, // PLACEHOLDER
    { fileName: "art-31.jpg", tags: ["watercolor"], title: "Floral Bouquet — Pink Roses",              year: 2023 }, // PLACEHOLDER
    { fileName: "art-32.jpg", tags: ["pencil"],     title: "The Flute Boy",                            year: 2023 }, // PLACEHOLDER

    // ───── mini-* series · A5 miniature studies ─────
    { fileName: "mini-1.jpg",  tags: ["pastel"],     title: "Durga — Festive Glow",                    year: 2023 }, // PLACEHOLDER
    { fileName: "mini-2.jpg",  tags: ["acrylic"],    title: "Tiny Krishna with Butter",                year: 2023 }, // PLACEHOLDER
    { fileName: "mini-3.jpg",  tags: ["acrylic"],    title: "Bal Hanuman",                             year: 2023 }, // PLACEHOLDER
    { fileName: "mini-4.jpg",  tags: ["watercolor"], title: "Cherry Blossoms",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-5.jpg",  tags: ["acrylic"],    title: "Mini Ganesha — Lotus Throne",             year: 2024 }, // PLACEHOLDER
    { fileName: "mini-6.jpg",  tags: ["watercolor"], title: "Sunflowers in Vase",                      year: 2024 }, // PLACEHOLDER
    { fileName: "mini-7.jpg",  tags: ["acrylic"],    title: "Radha's Smile",                           year: 2024 }, // PLACEHOLDER
    { fileName: "mini-8.jpg",  tags: ["other"],      title: "Doodle Study — Mandala",                  year: 2023 }, // PLACEHOLDER
    { fileName: "mini-9.jpg",  tags: ["pastel"],     title: "Autumn Forest Path",                      year: 2023 }, // PLACEHOLDER
    { fileName: "mini-10.jpg", tags: ["acrylic"],    title: "Peacock Feather Detail",                  year: 2024 }, // PLACEHOLDER
    { fileName: "mini-56.jpg", tags: ["watercolor"], title: "Magnolia in Bloom",                       year: 2025 }, // PLACEHOLDER
    { fileName: "mini-57.jpg", tags: ["watercolor"], title: "Hibiscus & Hummingbird",                  year: 2025 }, // PLACEHOLDER
    { fileName: "mini-68.jpg", tags: ["watercolor"], title: "Rain on Lotus Leaves",                    year: 2025 }, // PLACEHOLDER
    { fileName: "mini-69.jpg", tags: ["watercolor"], title: "Tulips in a Blue Jug",                    year: 2025 }, // PLACEHOLDER
    { fileName: "mini-11.jpg", tags: ["acrylic"],    title: "Goddess Lakshmi Miniature",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-12.jpg", tags: ["acrylic"],    title: "Tribal Eyes",                             year: 2024 }, // PLACEHOLDER
    { fileName: "mini-13.jpg", tags: ["sketch"],     title: "Charcoal — Solitary Tree",                year: 2023 }, // PLACEHOLDER
    { fileName: "mini-14.jpg", tags: ["acrylic"],    title: "Krishna with Cow",                        year: 2024 }, // PLACEHOLDER
    { fileName: "mini-15.jpg", tags: ["pastel"],     title: "Soft Pastel — Misty Hills",               year: 2023 }, // PLACEHOLDER
    { fileName: "mini-59.jpg", tags: ["watercolor"], title: "Watercolor Iris",                         year: 2025 }, // PLACEHOLDER
    { fileName: "mini-60.jpg", tags: ["watercolor"], title: "Watercolor Daisies",                      year: 2025 }, // PLACEHOLDER
    { fileName: "mini-16.jpg", tags: ["sketch"],     title: "Charcoal — Rustic Door",                  year: 2023 }, // PLACEHOLDER
    { fileName: "mini-17.jpg", tags: ["watercolor"], title: "Boats by the Backwaters",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-18.jpg", tags: ["acrylic"],    title: "Ganesha — Vermilion & Gold",              year: 2024 }, // PLACEHOLDER
    { fileName: "mini-19.jpg", tags: ["sketch"],     title: "Charcoal — Stormy Sky",                   year: 2023 }, // PLACEHOLDER
    { fileName: "mini-20.jpg", tags: ["acrylic"],    title: "Maa Saraswati Miniature",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-64.jpg", tags: ["other"],      title: "Mixed Media — Calligraphy I",             year: 2025 }, // PLACEHOLDER
    { fileName: "mini-21.jpg", tags: ["acrylic"],    title: "Festival Dancer",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-22.jpg", tags: ["acrylic"],    title: "Diya & Marigold",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-61.jpg", tags: ["watercolor"], title: "Watercolor Lavender Field",               year: 2025 }, // PLACEHOLDER
    { fileName: "mini-62.jpg", tags: ["watercolor"], title: "Watercolor Mountain Stream",              year: 2025 }, // PLACEHOLDER
    { fileName: "mini-65.jpg", tags: ["watercolor"], title: "Watercolor Roses in Crystal",             year: 2025 }, // PLACEHOLDER
    { fileName: "mini-66.jpg", tags: ["watercolor"], title: "Watercolor Pomegranates",                 year: 2025 }, // PLACEHOLDER
    { fileName: "mini-23.jpg", tags: ["acrylic"],    title: "Little Drummer",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-24.jpg", tags: ["acrylic"],    title: "Lotus on Black",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-25.jpg", tags: ["sketch"],     title: "Charcoal — Crow at Dusk",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-26.jpg", tags: ["acrylic"],    title: "Krishna's Flute",                         year: 2024 }, // PLACEHOLDER
    { fileName: "mini-71.jpg", tags: ["pastel"],     title: "Pastel Portrait — Smiling Child",         year: 2025 }, // PLACEHOLDER
    { fileName: "mini-58.jpg", tags: ["pastel"],     title: "Pastel — Dancing Peacock",                year: 2025 }, // PLACEHOLDER
    { fileName: "mini-55.jpg", tags: ["pastel"],     title: "Pastel — Autumn Leaves",                  year: 2025 }, // PLACEHOLDER
    { fileName: "mini-27.jpg", tags: ["acrylic"],    title: "Goddess Kali Miniature",                  year: 2024 }, // PLACEHOLDER
    { fileName: "mini-28.jpg", tags: ["acrylic"],    title: "Devi in Repose",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-70.jpg", tags: ["other"],      title: "Mixed Media — Mandala II",                year: 2025 }, // PLACEHOLDER
    { fileName: "mini-29.jpg", tags: ["pastel"],     title: "Pastel — Sunset on the Lake",             year: 2024 }, // PLACEHOLDER
    { fileName: "mini-30.jpg", tags: ["watercolor"], title: "Never Stop Trying — Inspiration Splash",  year: 2024 }, // PLACEHOLDER
    { fileName: "mini-31.jpg", tags: ["sketch"],     title: "Charcoal — Wrinkled Hands",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-32.jpg", tags: ["watercolor"], title: "Watercolor — Boats at Sunset",            year: 2024 }, // PLACEHOLDER
    { fileName: "mini-33.jpg", tags: ["sketch"],     title: "Charcoal — Sleeping Cat",                 year: 2024 }, // PLACEHOLDER
    { fileName: "mini-72.jpg", tags: ["sketch"],     title: "Charcoal — Lone Banyan",                  year: 2025 }, // PLACEHOLDER
    { fileName: "mini-63.jpg", tags: ["sketch"],     title: "Charcoal — Cracked Wall",                 year: 2025 }, // PLACEHOLDER
    { fileName: "mini-34.jpg", tags: ["watercolor"], title: "Watercolor — Misty Hills",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-35.jpg", tags: ["acrylic"],    title: "Lord Vishnu Miniature",                   year: 2024 }, // PLACEHOLDER
    { fileName: "mini-36.jpg", tags: ["pastel"],     title: "Pastel — Marigold Garland",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-37.jpg", tags: ["pastel"],     title: "Pastel — Wheat Field",                    year: 2024 }, // PLACEHOLDER
    { fileName: "mini-38.jpg", tags: ["acrylic"],    title: "Ganesha — Blue & Gold",                   year: 2024 }, // PLACEHOLDER
    { fileName: "mini-39.jpg", tags: ["acrylic"],    title: "Peacock in Profile",                      year: 2024 }, // PLACEHOLDER
    { fileName: "mini-40.jpg", tags: ["acrylic"],    title: "Diya in Cupped Hands",                    year: 2024 }, // PLACEHOLDER
    { fileName: "mini-41.jpg", tags: ["acrylic"],    title: "Krishna & Sudama",                        year: 2024 }, // PLACEHOLDER
    { fileName: "mini-67.jpg", tags: ["pastel"],     title: "Pastel — Hummingbird & Hibiscus",         year: 2025 }, // PLACEHOLDER
    { fileName: "mini-42.jpg", tags: ["acrylic"],    title: "Goddess Annapurna",                       year: 2024 }, // PLACEHOLDER
    { fileName: "mini-43.jpg", tags: ["watercolor"], title: "Watercolor — Cherry Tree",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-44.jpg", tags: ["acrylic"],    title: "Lord Jagannath",                          year: 2024 }, // PLACEHOLDER
    { fileName: "mini-45.jpg", tags: ["pencil"],     title: "Pencil — Old Man Smoking",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-46.jpg", tags: ["acrylic"],    title: "Krishna with Yashoda",                    year: 2024 }, // PLACEHOLDER
    { fileName: "mini-47.jpg", tags: ["watercolor"], title: "Watercolor — Misty Boatman",              year: 2024 }, // PLACEHOLDER
    { fileName: "mini-48.jpg", tags: ["pastel"],     title: "Pastel — Lotus Pond",                     year: 2024 }, // PLACEHOLDER
    { fileName: "mini-49.jpg", tags: ["acrylic"],    title: "Maa Tara",                                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-50.jpg", tags: ["acrylic"],    title: "Ganesha with Modak",                      year: 2024 }, // PLACEHOLDER
    { fileName: "mini-51.jpg", tags: ["acrylic"],    title: "Hanuman with the Mountain",               year: 2024 }, // PLACEHOLDER
    { fileName: "mini-52.jpg", tags: ["pencil"],     title: "Pencil — The Snake Charmer",              year: 2024 }, // PLACEHOLDER
    { fileName: "mini-53.jpg", tags: ["acrylic"],    title: "Shiva & Parvati Together",                year: 2024 }, // PLACEHOLDER
    { fileName: "mini-54.jpg", tags: ["watercolor"], title: "Watercolor — Coastal Village",            year: 2024 }, // PLACEHOLDER

    // ───── wide-* series · Panoramic format ─────
    { fileName: "wide-1.jpg",  tags: ["pencil"],  title: "Joyful Innocence — Baby Portrait",           year: 2023 }, // PLACEHOLDER
    { fileName: "wide-2.jpg",  tags: ["pencil"],  title: "The Twins",                                  year: 2024 }, // PLACEHOLDER
    { fileName: "wide-3.jpg",  tags: ["acrylic"], title: "Krishna at Sunset — Silhouette",             year: 2024 }, // PLACEHOLDER
    { fileName: "wide-4.jpg",  tags: ["acrylic"], title: "Panorama — Banaras Ghat",                    year: 2025 }  // PLACEHOLDER
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
    acrylic:    "An acrylic original, layered patiently to coax depth from a limited palette. Signed by the artist, ready to hang.",
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
    const lang = document.documentElement.lang;
    return lang === "bn" ? "/en/arts/" : "arts/";
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
    const infoLabel     = lang === "bn" ? "তথ্য" : "Info";

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
        infoBtn.innerHTML = '<i class="fas fa-info-circle"></i><span>' + infoLabel + '</span>';
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
