$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 900);
});
$("#menu").onePageNav({
  currentClass: "active",
  changeHash: false,
  scrollSpeed: 400,
  scrollThreshold: .3,
  filter: "",
  easing: "swing",
});
//hide toggle menu on click :
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
//carousel transition
$(document).ready(function () {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3000; // 3 seconds
});

//preloader
$(document).ready(function ($) {
  var Body = $("body");
  Body.addClass("preloader-site");
});
$(window).on("load", function () {
  $(".preloader-wrapper").fadeOut(2000);
  $("body").removeClass("preloader-site");
});


