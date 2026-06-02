// ============================================================
// HOME-PAGE HERO — featured painting rotator
//
// Add or remove painting filenames in the list below. On every
// page load / refresh the home hero picks one at random and
// updates the optional title shown in the corner tag.
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
   function pick() {
      const list = window.HERO_FEATURED || [];
      if (!list.length) return null;
      return list[Math.floor(Math.random() * list.length)];
   }

   function apply() {
      const img = document.getElementById("hero-art-img");
      if (!img) return;
      const choice = pick();
      if (!choice) return;

      // Use absolute /arts/ on Bengali pages, relative arts/ on English.
      const base = document.documentElement.lang === "bn" ? "/arts/" : "arts/";
      img.src = base + choice.file;
      img.alt = choice.title || img.alt;

      const tag = document.querySelector(".hero-art .hero-tag");
      if (tag && choice.title) tag.textContent = choice.title;
   }

   if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", apply);
   } else {
      apply();
   }
})();
