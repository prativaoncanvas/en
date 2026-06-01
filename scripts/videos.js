// ============================================================
// Videos page — modern player with playlist
// Each entry: { id, title?, description? }. Title is fetched
// from YouTube's noembed endpoint as a progressive enhancement
// (with graceful fallback to a generic label if it fails).
// ============================================================

const videos = [
    { id: "WXoirl1ByzQ" },
    { id: "5lRLCOIR4r0" },
    { id: "dNkMJhp54C0" },
    { id: "znQx3vOhEG4" },
    { id: "4CtPodTGMFc" },
    { id: "q8Zbi9PiFHY" }
];

function embedUrl(id, autoplay) {
    const base = `https://www.youtube.com/embed/${id}`;
    return autoplay ? `${base}?autoplay=1&rel=0` : `${base}?rel=0`;
}

function thumbUrl(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function fallbackTitle(index) {
    return `Prativa on Canvas — Episode ${index + 1}`;
}

async function fetchYouTubeMeta(id) {
    // noembed is CORS-friendly and does not require an API key.
    try {
        const res = await fetch(
            `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`,
            { mode: "cors" }
        );
        if (!res.ok) return null;
        const data = await res.json();
        if (data && data.title) {
            return {
                title: data.title,
                author: data.author_name || ""
            };
        }
        return null;
    } catch (e) {
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const playerIframe = document.getElementById("main-video-iframe");
    const titleEl      = document.getElementById("main-video-title");
    const metaEl       = document.getElementById("main-video-meta");
    const listEl       = document.getElementById("playlist-scroll");
    const countEl      = document.getElementById("playlist-count");

    if (!playerIframe || !listEl) return;

    let currentIndex = 0;

    function selectVideo(index, { autoplay = true } = {}) {
        currentIndex = index;
        const v = videos[index];
        playerIframe.src = embedUrl(v.id, autoplay);
        titleEl.textContent = v.title || fallbackTitle(index);
        metaEl.textContent = (v.author ? v.author + " · " : "") + "YouTube · Prativa on Canvas";

        listEl.querySelectorAll(".playlist-item").forEach((el, i) => {
            el.classList.toggle("active", i === index);
        });

        // Bring the active item into view inside the playlist scroll.
        const activeEl = listEl.querySelector(".playlist-item.active");
        if (activeEl) {
            activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    }

    function renderPlaylist() {
        listEl.innerHTML = "";
        videos.forEach((v, index) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = "playlist-item" + (index === 0 ? " active" : "");
            item.setAttribute("data-testid", `playlist-item-${index}`);

            const thumb = document.createElement("div");
            thumb.className = "playlist-thumb";

            const img = document.createElement("img");
            img.src = thumbUrl(v.id);
            img.alt = v.title || fallbackTitle(index);
            img.loading = "lazy";

            const glyph = document.createElement("span");
            glyph.className = "play-glyph";
            glyph.innerHTML = '<i class="fas fa-play-circle"></i>';

            thumb.appendChild(img);
            thumb.appendChild(glyph);

            const body = document.createElement("div");
            body.className = "playlist-item-body";

            const title = document.createElement("div");
            title.className = "playlist-item-title";
            title.textContent = v.title || fallbackTitle(index);
            title.setAttribute("data-testid", `playlist-item-title-${index}`);

            const meta = document.createElement("div");
            meta.className = "playlist-item-meta";
            meta.textContent = `Episode ${index + 1}`;

            body.appendChild(title);
            body.appendChild(meta);

            item.appendChild(thumb);
            item.appendChild(body);

            item.addEventListener("click", () => selectVideo(index, { autoplay: true }));
            listEl.appendChild(item);
        });

        if (countEl) countEl.textContent = `${videos.length} videos`;
    }

    function refreshActiveLabels() {
        listEl.querySelectorAll(".playlist-item").forEach((el, i) => {
            const v = videos[i];
            const t = el.querySelector(".playlist-item-title");
            if (t) t.textContent = v.title || fallbackTitle(i);
        });
        const v = videos[currentIndex];
        titleEl.textContent = v.title || fallbackTitle(currentIndex);
        metaEl.textContent = (v.author ? v.author + " · " : "") + "YouTube · Prativa on Canvas";
    }

    // ---- Render skeleton immediately so user sees the gallery ----
    renderPlaylist();
    selectVideo(0, { autoplay: false });

    // ---- Enhance with real YouTube titles in the background ----
    Promise.all(videos.map(v => fetchYouTubeMeta(v.id))).then(metas => {
        metas.forEach((m, i) => {
            if (m && m.title) {
                videos[i].title = m.title;
                videos[i].author = m.author;
            }
        });
        refreshActiveLabels();
    });
});
