// Define the function to be called on click
function enlargeImage(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");

    modal.style.display = "block";
    modalImg.src = img.src;
}

// When the user clicks on <span> (x), close the modal
function closeImage() {
    modal.style.display = "none";
}