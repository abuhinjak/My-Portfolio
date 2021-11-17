// AOS
/*
AOS.init({
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});
*/
// End AOS

// Active Navigation Link
const li = document.querySelectorAll(".header-link");
const sec = document.querySelectorAll("section");

function activeLink() {
  let len = sec.length;
  while(--len && window.scrollY + 400 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("current"));
  li[len].classList.add("current");
}
activeLink();
window.addEventListener("scroll", activeLink);
// End Active Navigation Link

// Mobile Menu 
const navSlide = () => {
  const mobileMenu = document.querySelector(".mobile-menu-toggle");
  const headerNav = document.querySelector(".header-nav");
  const nav = document.querySelector(".header-links");
  const navLinks = document.querySelectorAll(".header-links li");

    // Toggle Nav
  mobileMenu.addEventListener("click", () => {
    // Hamburger Animation
    mobileMenu.classList.toggle("toggle");
    nav.classList.toggle("mobile-active");
  });
    // Animate Links
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 1s ease ${index / 7 + 2}s forwards`;
    }
  });

  // Close menu when clicking outside
 document.addEventListener('click', function(event) {
  if (event.target !== headerNav && !headerNav.contains(event.target)) {
      // hide the menu
    nav.classList.remove("mobile-active");
    mobileMenu.classList.remove("toggle");
  }
});

}
navSlide();
// End Mobile Menu


// Sticky Navbar
window.addEventListener("scroll", function() {
  let header = document.querySelector(".header, .project-header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// End Sticky Navbar

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800
});
var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
// End Smooth Scroll





/*
// Project Page - Contact Modal
var modal = document.querySelector(".modal-wrapper");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
      toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// End Contact Modal
*/
/*
// EmailJS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || msg.value == "") {
      emptyerror();
    } else if (!(re.test(email.value.trim()))) {
      error();  
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
      name.value = "";
      email.value = "";
      msg.value = "";
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_qxqxyxi", "template_njaj7of", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Molimo popunite sva polja!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Molimo Vas unesite ispravnu Email adresu!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Poslano!",
    text: "Poruka je uspješno poslana",
  });
}
// End EmailJS
*/