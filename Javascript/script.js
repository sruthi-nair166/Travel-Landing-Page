const menuBtn = document.getElementById("menu-btn");
const menuTray = document.getElementById("menu-tray");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  menuTray.classList.remove("hidden");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  menuTray.classList.add("hidden");
  document.body.classList.remove("no-scroll");
});
