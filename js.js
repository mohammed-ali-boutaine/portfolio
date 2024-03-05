

$(document).ready(function () {
  $(".menu").on("click", () => {
    $("nav").toggleClass("active");

    $("nav .menu .fa-bars").toggleClass("active");
    $("nav .menu .fa-x").toggleClass("active");
  });

  window.onscroll = () => {
    $("nav").removeClass("active");
    $("nav .menu .fa-x").removeClass("active");
    $("nav .menu .fa-bars").addClass("active");
  };

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".nav").addClass("shrink");
    } else {
      $(".nav").removeClass("shrink");
    }
  });

  $(".nav a").on("click", () => {
    $("nav .menu .fa-x").removeClass("active");
    $("nav .menu .fa-bars").addClass("active");

    $(".nav").removeClass("active");
  });
});
