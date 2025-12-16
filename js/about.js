document.addEventListener("scroll", function() {
  const header = document.querySelector(".about-main");
  const hero = document.querySelector(".hero"); 

  if (window.scrollY > hero.offsetHeight - 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

$(document).ready(function() {
  $(".about-menu > li").hover(
    function() {
      $(this).find(".about-submenu").stop(true, true).slideDown(250);
    },
    function() {
      $(this).find(".about-submenu").stop(true, true).slideUp(200);
    }
  );
});