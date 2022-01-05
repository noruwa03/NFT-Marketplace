// NFT card links function
const card_menu = document.querySelector(".nft_card_menu");
const nft_card = document.querySelector(".nft_card_links");

if (card_menu) {
  card_menu.onclick = () => {
    card_menu.classList.toggle("active");
    nft_card.classList.toggle("active");
  };
}

// Navigation function
const icon_menu = document.querySelector(".icon_menu");
const nav = document.querySelector(".nav_");
const back_btn = document.querySelector(".back_btn");

if (icon_menu) {
  icon_menu.onclick = () => {
    icon_menu.classList.toggle("active");
    nav.classList.toggle("active");
  };
}

if (back_btn) {
  back_btn.onclick = () => {
    icon_menu.classList.toggle("active");
    nav.classList.toggle("active");
  };
}

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
  scrollFunction();
  scrollFunctionBTT(); // back to top button
};

window.onload = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.querySelector("nav");
  } else if (document.documentElement.scrollTop < 30) {
    document.querySelector("nav");
  }
}

/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
