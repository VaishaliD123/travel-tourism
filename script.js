// Loader
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1000);
};

// Toggle menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// Close menu after click
function closeMenu() {
  document.getElementById("navMenu").classList.remove("show");
}

// Scroll to top
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark / Light mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Form validation
document.getElementById("contactForm").onsubmit = e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("formMsg");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
  }
};
