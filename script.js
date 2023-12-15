let menuicon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuicon.addEventListener("click", () => {
  navbar.classList.toggle("showmenu");
});

navbar.addEventListener("click", () => {
  navbar.classList.remove("showmenu");
});
