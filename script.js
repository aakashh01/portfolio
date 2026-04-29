function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
});