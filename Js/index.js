const navtoggle = document.querySelector("#openn");
const openmenu = document.querySelector("#openmenu");
const closemenu = document.querySelector("#closemenu");
const navul = document.querySelector(".nav-ul");
const navlinks = document.querySelectorAll(".nav-links");
navtoggle.addEventListener("click", () => {
  navul.classList.toggle("show-nav-ul");
});
