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

