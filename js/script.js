let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// indicateur de si le menu est fermé ou ouvert
let openMenu = false;

const clickHandler = function (event) {
    // Check if the clicked element is not part of the navbar
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
      // If not, close the navbar (hide it)
      // navbar.style.display = 'none';
      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    }
  };


menuIcon.addEventListener("click", function (event) {
  // si le menu est fermé, on l'ouvre et crée un event pour qu'il soit possible de le fermer en cliquant sur le document
  if (!openMenu) {
    menuIcon.classList.add("bx-x");
    navbar.classList.add("active");

    document.addEventListener("click", clickHandler);

    openMenu = true;
  } else {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    document.removeEventListener("click", clickHandler);

    openMenu = false;
  }
});