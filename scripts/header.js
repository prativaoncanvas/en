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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 110" role="img" aria-label="Prativa on Canvas" data-testid="brand-logo-svg">
         <title>Prativa on Canvas</title>
         <defs>
            <linearGradient id="canvasFill" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stop-color="#fbf5e6"/>
               <stop offset="100%" stop-color="#f1e7d0"/>
            </linearGradient>
            <linearGradient id="canvasFrame" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stop-color="#b65a3c"/>
               <stop offset="50%" stop-color="#c9763f"/>
               <stop offset="100%" stop-color="#b78a44"/>
            </linearGradient>
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
            <pattern id="weave" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
               <rect width="6" height="6" fill="transparent"/>
               <path d="M0 3 H6 M3 0 V6" stroke="#b78a44" stroke-width="0.25" opacity="0.18"/>
            </pattern>
            <filter id="canvasShadow" x="-10%" y="-10%" width="120%" height="140%">
               <feGaussianBlur stdDeviation="1.6"/>
               <feOffset dx="0" dy="2"/>
               <feComponentTransfer><feFuncA type="linear" slope="0.35"/></feComponentTransfer>
               <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <clipPath id="prtReveal">
               <rect x="20" y="10" height="90" width="0">
                  <animate attributeName="width" from="0" to="280" dur="2.1s" begin="0.4s" fill="freeze"
                           calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
               </rect>
            </clipPath>
            <clipPath id="prtShineClip">
               <text x="32" y="64" class="brand-svg-script">Prativa</text>
            </clipPath>
         </defs>

         <!-- Canvas with frame + drop shadow -->
         <g filter="url(#canvasShadow)">
            <rect x="10" y="12" width="300" height="86" rx="4" ry="4" fill="url(#canvasFrame)"/>
            <rect x="14" y="16" width="292" height="78" rx="2" ry="2" fill="url(#canvasFill)"/>
            <rect x="14" y="16" width="292" height="78" rx="2" ry="2" fill="url(#weave)"/>
            <rect x="14" y="16" width="292" height="78" rx="2" ry="2"
                  fill="none" stroke="#b78a44" stroke-width="0.4" opacity="0.35"/>
         </g>

         <!-- Ghost (fallback for non-animating viewers) -->
         <text x="32" y="64" class="brand-svg-script" fill="url(#prtInk)" opacity="0.08">Prativa</text>

         <!-- Animated handwritten "Prativa" reveal -->
         <g clip-path="url(#prtReveal)">
            <text x="32" y="64" class="brand-svg-script" fill="url(#prtInk)">Prativa</text>
         </g>

         <!-- Gold shimmer sweep (loops) -->
         <g clip-path="url(#prtShineClip)" opacity="0.45" style="mix-blend-mode: overlay;">
            <rect x="-90" y="0" width="90" height="110" fill="url(#prtShine)">
               <animate attributeName="x" from="-90" to="330" dur="3.4s" begin="2.6s" repeatCount="indefinite"/>
            </rect>
         </g>

         <!-- Brush-stroke underline drawn after the writing -->
         <path d="M30 80 Q160 75 286 80" fill="none" stroke="url(#prtBrush)" stroke-width="2.6"
               stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.95s" begin="1.85s" fill="freeze"/>
         </path>

         <!-- Signature paint dot -->
         <circle cx="290" cy="25" r="0" fill="#b65a3c">
            <animate attributeName="r" from="0" to="3.4" dur="0.32s" begin="2.6s" fill="freeze"/>
            <animate attributeName="r" values="3.4;4.8;3.4" dur="2.4s" begin="3.1s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="1;0.55;1" dur="2.4s" begin="3.1s" repeatCount="indefinite"/>
         </circle>
         <circle cx="290" cy="25" r="0" fill="#fbf5e6">
            <animate attributeName="r" from="0" to="1.1" dur="0.32s" begin="2.75s" fill="freeze"/>
         </circle>

         <!-- Painter's brush peeking from the canvas corner -->
         <g opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.4s" fill="freeze"/>
            <line x1="298" y1="92" x2="316" y2="106" stroke="#8b3e22" stroke-width="3" stroke-linecap="round"/>
            <line x1="295" y1="89" x2="301" y2="95" stroke="#b78a44" stroke-width="3.4" stroke-linecap="round"/>
            <circle cx="292" cy="86" r="2" fill="#b65a3c"/>
         </g>
      </svg>
   `;

   const headerHTML = `
      <header data-testid="site-header">
         <div class="nav-wrap">
            <a href="index.html" class="brand" data-testid="brand-link" aria-label="Prativa on Canvas — home">
               <span class="brand-wordmark" aria-hidden="true">${logoSVG}</span>
               <span class="brand-name brand-name--compact">
                  <span class="brand-sub">${L.brandLine2}</span>
               </span>
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
