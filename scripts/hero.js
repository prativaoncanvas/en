// ============================================================
// HOME-PAGE HERO — featured painting rotator
//
// Add or remove painting filenames in the list below. The hero
// image auto-rotates every 10 seconds (no page reload needed)
// and updates the small caption tag underneath the image.
//
// File names should match files inside /app/arts/
//   • Standard A3 works:     "art-1.jpg" … "art-56.jpg"
//   • Miniature works:       "mini-1.jpg" … "mini-72.jpg"
//   • Panoramic / wide:      "wide-1.jpg" … "wide-4.jpg"
//
// Optional `title` overrides what is shown in the bottom-left tag.
// If `title` is omitted, the default brand "— Prativa" is shown.
// ============================================================

window.HERO_FEATURED = [
   { file: "art-1.jpg",  title: "Glow of the Goddess" },
   { file: "art-46.jpg", title: "Devi Durga" },
   { file: "art-41.jpg", title: "Siddhidata Ganesh" },
   { file: "art-43.jpg", title: "Lord Hanuman" },
   { file: "art-11.jpg", title: "Krishna Kanhaiya" }
];

(function initHeroFeatured() {
   const ROTATE_MS = 10000;
   let idx = -1;

   function nextIndex() {
      const list = window.HERO_FEATURED || [];
      if (!list.length) return -1;
      if (list.length === 1) return 0;
      // pick a different one than current
      let n;
      do {
         n = Math.floor(Math.random() * list.length);
      } while (n === idx);
      return n;
   }

   function apply() {
      const img = document.getElementById("hero-art-img");
      if (!img) return;
      const list = window.HERO_FEATURED || [];
      if (!list.length) return;

      const nextIdx = nextIndex();
      const choice = list[nextIdx];
      idx = nextIdx;

      // Use absolute /arts/ on Bengali pages, relative arts/ on English.
      const base = document.documentElement.lang === "bn" ? "/arts/" : "arts/";

      // Preload then swap with a small fade for a smoother transition.
      const preloader = new Image();
      preloader.onload = () => {
         img.classList.add("is-swapping");
         setTimeout(() => {
            img.src = preloader.src;
            img.alt = choice.title || img.alt;
            const tag = document.querySelector(".hero-art .hero-tag");
            if (tag && choice.title) tag.textContent = choice.title;
            img.classList.remove("is-swapping");
         }, 220);
      };
      preloader.src = base + choice.file;
   }

   function start() {
      apply();
      setInterval(apply, ROTATE_MS);
   }

   if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", start);
   } else {
      start();
   }
})();
