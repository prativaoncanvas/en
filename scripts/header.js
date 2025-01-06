document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-container").innerHTML = `
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
});
