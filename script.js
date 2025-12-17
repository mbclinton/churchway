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