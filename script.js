// ===== Sticky Navbar Effect =====
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Fade-In Animation on Scroll =====
const fadeElements = document.querySelectorAll(".hero, .community, .reflections");

function fadeInOnScroll() {
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// ===== "Read More" Button Popup =====
document.querySelectorAll(".btn-read").forEach(button => {
  button.addEventListener("click", () => {
    alert("Full article coming soon! Stay tuned for updates from Mount Way Church.");
  });
});



//*contactpage js *//

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let website = document.getElementById("website").value.trim();
    let message = document.getElementById("message").value.trim();

    // Name validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email address.");
        return;
    }

    // Website validation (optional)
    if (website !== "") {
        let urlPattern = /^(https?:\/\/)?([\w\-])+(\.[\w\-]+)+[/#?]?.*$/;
        if (!website.match(urlPattern)) {
            alert("Enter a valid website URL.");
            return;
        }
    }

    // Message validation
    if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    // If all valid
    alert("Form submitted successfully!");
    this.submit();
});







/*gallery*/
const thumbnails = document.querySelectorAll('.thumbnails img');
const currentImage = document.getElementById('currentImage');

let currentIndex = 0;

function showImage(img){
    currentImage.src = img.src;

    thumbnails.forEach(item=>{
        item.style.borderColor = "transparent";
    });

    img.style.borderColor = "#4b2d52";

    currentIndex = [...thumbnails].indexOf(img);
}

function nextImage(){
    currentIndex++;

    if(currentIndex >= thumbnails.length){
        currentIndex = 0;
    }

    showImage(thumbnails[currentIndex]);
}

function prevImage(){
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = thumbnails.length - 1;
    }

    showImage(thumbnails[currentIndex]);
}

window.onload = () =>{
    showImage(thumbnails[0]);
}

// Function to open the Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imageSrc; // Set the full screen image src
    lightbox.classList.add('active'); // Display the lightbox
}

// Function to close the Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active'); // Hide the lightbox
}

// Optional: Close the lightbox if user clicks anywhere outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});




