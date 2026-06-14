document.addEventListener("DOMContentLoaded", function () {
   const pageLang = document.documentElement.lang || "en";

   const labels = {
      en: {
         brandSub: "Watercolor · Acrylic · Pencil",
         home: "Home",
         paintings: "Paintings",
         videos: "Videos",
         contact: "Contact",
         menu: "Menu",
         logoAlt: "Prativa on Canvas Logo",
         brandLine1: "Prativa",
         brandLine2: "on Canvas",
         enLink: "#",
         bnLink: "/bn/"
      }
   };

   const L = labels[pageLang] || labels.en;

   // Inlined SVG so it inherits the page's loaded "Pinyon Script" font
   // and the SMIL animations run alongside the page.
   const logoSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 120" role="img" aria-label="Prativa on Canvas" data-testid="brand-logo-svg">
         <title>Prativa on Canvas</title>
         <defs>
            <linearGradient id="prtInk" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stop-color="#1c1f2a"/>
               <stop offset="100%" stop-color="#8b3e22"/>
            </linearGradient>
            <linearGradient id="prtShine" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stop-color="#b78a44" stop-opacity="0"/>
               <stop offset="50%" stop-color="#f5d690" stop-opacity="0.95"/>
               <stop offset="100%" stop-color="#b78a44" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="prtBrush" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stop-color="#b65a3c" stop-opacity="0"/>
               <stop offset="25%" stop-color="#b65a3c" stop-opacity="0.95"/>
               <stop offset="75%" stop-color="#b78a44" stop-opacity="0.95"/>
               <stop offset="100%" stop-color="#b78a44" stop-opacity="0"/>
            </linearGradient>
            <clipPath id="prtReveal">
               <rect x="0" y="0" height="120" width="0">
                  <animate attributeName="width" from="0" to="220" dur="2.1s" begin="0.4s" fill="freeze"
                           calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
               </rect>
            </clipPath>
            <clipPath id="prtShineClip">
               <text x="110" y="64" text-anchor="middle" class="brand-svg-script">Prativa</text>
            </clipPath>
         </defs>

         <!-- Ghost (fallback for non-animating viewers) -->
         <text x="110" y="64" text-anchor="middle" class="brand-svg-script brand-svg-script--bold"
               fill="url(#prtInk)" opacity="0.08">Prativa</text>

         <!-- Animated handwritten "Prativa" reveal (bolder via paint-order stroke) -->
         <g clip-path="url(#prtReveal)">
            <text x="110" y="64" text-anchor="middle" class="brand-svg-script brand-svg-script--bold"
                  fill="url(#prtInk)" stroke="#1c1f2a" stroke-width="2.6"
                  stroke-linejoin="round" paint-order="stroke fill">Prativa</text>
         </g>

         <!-- Gold shimmer sweep (loops) -->
         <g clip-path="url(#prtShineClip)" opacity="0.5" style="mix-blend-mode: overlay;">
            <rect x="-90" y="0" width="90" height="120" fill="url(#prtShine)">
               <animate attributeName="x" from="-90" to="240" dur="3.4s" begin="2.6s" repeatCount="indefinite"/>
            </rect>
         </g>

         <!-- Brush-stroke underline drawn after the writing -->
         <path d="M30 82 Q110 77 190 82" fill="none" stroke="url(#prtBrush)" stroke-width="2.8"
               stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.95s" begin="1.85s" fill="freeze"/>
         </path>

         <!-- "on Canvas" sub-wordmark (always visible, integrated into the mark) -->
         <g opacity="0" data-testid="brand-logo-subtext">
            <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="2.0s" fill="freeze"/>
            <text x="110" y="108" text-anchor="middle" class="brand-svg-sub" fill="#8b3e22">ON CANVAS</text>
         </g>
      </svg>
   `;

   const headerHTML = `
      <header data-testid="site-header">
         <div class="nav-wrap">
            <a href="index.html" class="brand" data-testid="brand-link" aria-label="Prativa on Canvas — home">
               <span class="brand-wordmark" aria-hidden="true">${logoSVG}</span>
            </a>

            <nav id="primary-nav" data-testid="primary-nav" aria-label="Primary">
               <ul>
                  <li><a href="index.html" data-testid="nav-home">${L.home}</a></li>
                  <li><a href="paintings.html" data-testid="nav-paintings">${L.paintings}</a></li>
                  <li><a href="videos.html" data-testid="nav-videos">${L.videos}</a></li>
                  <li><a href="contact.html" data-testid="nav-contact">${L.contact}</a></li>
               </ul>
            </nav>

            <div class="language-toggle" data-testid="language-toggle">
               <a href="${L.enLink}" id="toggleEN" aria-label="English">EN</a>
            </div>
         </div>
      </header>
   `;

   const headerContainer = document.getElementById("header-container");
   if (headerContainer) {
      headerContainer.innerHTML = headerHTML;

      // Highlight active nav link
      const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
      document.querySelectorAll('nav ul li a').forEach((a) => {
         const target = (a.getAttribute("href") || "").toLowerCase();
         if (target === here || (here === "" && target === "index.html")) {
            a.style.color = "var(--accent-deep)";
            a.style.background = "rgba(182, 90, 60, 0.08)";
         }
      });
   }
});
