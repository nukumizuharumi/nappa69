document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle-box");
  const nav = document.getElementById("header-nav");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    nav.classList.toggle("show");
  });
});

//スライダー
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  fade: true,
  dots:true,
  arrows: false,
});

//フェード
window.addEventListener("load", () => {
  AOS.init({
    // initClassName: "abc",
  });
});

AOS.init();
