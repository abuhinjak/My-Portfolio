// Sticky Navbar
window.addEventListener("scroll", function() {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// End Sticky Navbar

// Active Navigation Link
const li = document.querySelectorAll(".header-link");
const sec = document.querySelectorAll("section");

function activeLink() {
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("current"));
  li[len].classList.add("current");
}
activeLink();
window.addEventListener("scroll", activeLink);
// End Active Navigation Link