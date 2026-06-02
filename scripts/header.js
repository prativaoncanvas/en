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

   const headerHTML = `
      <header data-testid="site-header">
         <div class="nav-wrap">
            <a href="index.html" class="brand" data-testid="brand-link" aria-label="Prativa on Canvas — home">
               <span class="brand-mark" aria-hidden="true">
				  <img src="icons/logo.png" alt="Prativa on Canvas">
			   </span>
               <span class="brand-name">
                  <span class="brand-script">${L.brandLine1}</span>
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
