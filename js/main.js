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
    // Animate Links
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade .7s ease forwards ${index / 7 + 0.3}s`;
    }
  });
  });

  // Close menu when clicking outside

 document.addEventListener('click', function(event) {
  if (event.target !== headerNav && !headerNav.contains(event.target)) {
      // hide the menu
    nav.classList.remove("mobile-active");
    mobileMenu.classList.remove("toggle");
  }

  document.onclick = function(e) {
    if(e.target !== mobileMenu && e.target !== navLinks) 
  {
    mobileMenu.classList.remove('toggle');
    nav.classList.remove('mobile-active')
  } 
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

// Project Page - Contact Modal
var modalActive = document.querySelector(".trigger");
var modal = document.querySelector(".modal-wrapper");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
if(modalActive){
modalActive.addEventListener("click", toggleModal);
}
if(closeButton){
closeButton.addEventListener("click", toggleModal);
}
window.addEventListener("click", windowOnClick);

// End Contact Modal

// Intersection Observer
const cards = document.querySelectorAll('.card');
    // card callback function
const cardObserverCallback = (cardsToWatch, cardObserver) => {
  cardsToWatch.forEach(cardToWatch => {
    if(cardToWatch.isIntersecting) {
      cardToWatch.target.classList.add('fade-in');
      cardObserver.unobserve(cardToWatch.target);
    }
  })
};
    // card options
const cardObserverOptions = {
  threshold: .5
}
    // card observer
const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
    // card observer on cards
cards.forEach(card => {
  cardObserver.observe(card);
});
// End Intersection Observer

// Current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;