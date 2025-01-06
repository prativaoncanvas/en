document.addEventListener("DOMContentLoaded", function() {
    // Get the language attribute from the <html> tag
    let pageLang = document.documentElement.lang || "en";  // Default to English if lang is not set

    // Define header content for English
    let headerContentEN = `
        <header>
		   <div class="logo">
			  <a href="index.html"><img src="icons/logo.png" alt="Prativa on Canvas Logo"></a>
			  <h1>Prativa on Canvas</h1>
			  <div class="language-toggle">
				 <a href="index.html" id="toggleEN">EN</a> &nbsp|&nbsp <a href="/bn/index.html" id="toggleBN">বাংলা</a>
			  </div>
		   </div>
		   <nav>
			  <ul>
				 <li><a href="index.html">Home</a></li>
				 <li><a href="paintings.html">Paintings</a></li>
				 <li><a href="videos.html">Videos</a></li>
				 <li><a href="contact.html">Contact</a></li>
			  </ul>
		   </nav>
		</header>
    `;

    // Define header content for Bengali
    let headerContentBN = `
      <header>
         <div class="logo">
            <a href="index.html"><img src="/en/icons/logo.png" alt="প্রতিভার ক্যানভাস লোগো"></a>
            <h1>প্রতিভার ক্যানভাস</h1>
            <div class="language-toggle">
                <a href="index.html" id="toggleBN">বাংলা</a> &nbsp|&nbsp <a href="/en/index.html" id="toggleEN">EN</a>
            </div>
         </div>
         <nav>
            <ul>
               <li><a href="index.html">শুরু</a></li>
               <li><a href="paintings.html">চিত্রকর্ম</a></li>
               <li><a href="videos.html">ভিডিও</a></li>
               <li><a href="contact.html">যোগাযোগ</a></li>
            </ul>
         </nav>
      </header>
    `;

    // Insert the appropriate header content based on language
    document.getElementById("header-container").innerHTML = pageLang === "bn" ? headerContentBN : headerContentEN;
});