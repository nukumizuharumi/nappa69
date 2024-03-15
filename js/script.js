document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle-box");
  const nav = document.getElementById("header-nav");
  const menuItems = nav.querySelectorAll(".header-nav-list a");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    nav.classList.toggle("show");
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      toggle.classList.remove("open");
      nav.classList.remove("show");
    });
  });
});

//スライダー
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  fade: true,
  dots: true,
  arrows: false,
  dotsClass: "slide-dots",
});

//フェード
window.addEventListener("load", () => {
  AOS.init({
    // initClassName: "abc",
  });
});

AOS.init();
