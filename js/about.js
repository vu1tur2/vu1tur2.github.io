document.addEventListener("scroll", function() {
  const header = document.querySelector(".about-main");
  const hero = document.querySelector(".hero"); 

  if (window.scrollY > hero.offsetHeight - 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
