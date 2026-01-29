const menuBtn = document.getElementById("menu-btn");
const menuTray = document.getElementById("menu-tray");
const closeBtn = document.getElementById("close-btn");
const menuLinks = document.querySelectorAll("#menu-tray a");

menuBtn.addEventListener("click", () => {
  menuTray.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  menuBtn.setAttribute("aria-expanded", "true");
});

closeBtn.addEventListener("click", () => {
  menuTray.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  menuBtn.setAttribute("aria-expanded", "false");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuTray.classList.add("hidden");
    document.body.classList.remove("no-scroll");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* hero image slideshow */

let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");

  slideIndex = (slideIndex + 1) % slides.length;
}

showSlides();
setInterval(showSlides, 5000);
