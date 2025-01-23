document.addEventListener("DOMContentLoaded", function () {
   let pageLang = document.documentElement.lang || "en";

   function generateContactDetails() {
      if (pageLang === "bn") {
         return `
				<div class="contact-details">
				   <p class="address">জ্যাকসনভিল, ফ্লোরিডা, মার্কিন যুক্তরাষ্ট্র</p>
				   <p class="email">prativadebsharma17@gmail.com</p>
				   <p class="mobile">(৯০৪) ৭০৩-০৭১৩</p>
				</div>
            `;
      } else {
         return `
				<div class="contact-details">
				   <p class="address">Jacksonville, Florida, United States</p>
				   <p class="email">prativadebsharma17@gmail.com</p>
				   <p class="mobile">(904) 703-0713</p>
				</div>
            `;
      }
   }
   let contactDetailsContainer = document.getElementById("contact-details");
   if (contactDetailsContainer) {
      contactDetailsContainer.innerHTML = generateContactDetails();
   }

   function generateSocialMediaSection() {
      return `
            <div class="social-links">
               <a href="https://www.youtube.com/@PrativaOnCanvas" target="_blank" class="youtube">
               <i class="fab fa-youtube"></i>
               </a>
               <a href="https://www.facebook.com/profile.php?id=100065688631460" target="_blank" class="facebook">
               <i class="fab fa-facebook"></i>
               </a>
               <a href="https://www.instagram.com/prativaoncanvas/" target="_blank" class="instagram">
               <i class="fab fa-instagram"></i>
               </a>
            </div>
        `;
   }
   let socialMediaContainer = document.getElementById("social-media");
   if (socialMediaContainer) {
      socialMediaContainer.innerHTML = generateSocialMediaSection();
   }
});