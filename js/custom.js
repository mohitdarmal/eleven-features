function setNewImage() {
  document.getElementById("footer-logo").src = "img/Let's_Dive_after_hover.png";
}

function setOldImage() {
  document.getElementById("footer-logo").src = "img/Let's_Dive_before_hover.png";
}

function getFearureClick() {
  document.querySelector(".get-feature-popup").classList.add("get-feature-popup-hover");
  var getFeatureHoverBoxClose = document.querySelector(".get-feature-hover-box-close");
  document.querySelector("body").classList.add("onclick-bg-color");
  getFeatureHoverBoxClose.addEventListener("click", () => {
    document.querySelector(".get-feature-popup").classList.remove("get-feature-popup-hover");
    document.querySelector("body").classList.remove("onclick-bg-color");
  })

}

function getFearureHover() {
  document.getElementById("feature-img").src = "img/get-feture-after.png";
}


function getFeatureOut() {
  document.getElementById("feature-img").src = "img/get-feture-before.png";
}





// sticky bavar
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 20) {
    $(".navigation").addClass("shrink");
    $(".profile img").addClass("shrink-img");
  } else {
    $(".navigation").removeClass("shrink");
    $(".profile img").removeClass("shrink-img");
  }
});
// sticky bavar


// Owl carousel Banner
$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 14000,
    autoplayHoverPause: true,
    nav: true,
  });

})
// Owl carousel Banner


var shinnyLetsGo = document.querySelector(".shinny-lets-go");
var imageFlip = document.querySelector(".image-flip");
var shinyCloseBtn = document.querySelector(".shiny-close-btn");


shinnyLetsGo.addEventListener("click", () => {
  imageFlip.classList.add("image-flip-hover")
});

shinyCloseBtn.addEventListener("click", () => {
  imageFlip.classList.remove("image-flip-hover")
});