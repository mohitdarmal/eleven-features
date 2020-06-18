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
    $(".navigation").addClass("sticky-bg-img");
  } else {
    $(".navigation").removeClass("shrink");
    $(".profile img").removeClass("shrink-img");
    $(".navigation").removeClass("sticky-bg-img");
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
  imageFlip.classList.add("image-flip-hover");
});

shinyCloseBtn.addEventListener("click", () => {
  imageFlip.classList.remove("image-flip-hover");
});


var bannerImg = document.querySelector(".banner-img-onclick img");
var bannerImgPopup = document.querySelector(".banner-img-onclick-show-this-popup");
var bannerTxtCloseBtn = document.querySelector(".bannertxt-close-btn");

bannerImg.addEventListener("click", () => {
  bannerImgPopup.classList.add("banner-tx-popup");
})

bannerTxtCloseBtn.addEventListener("click", () => {
  bannerImgPopup.classList.remove("banner-tx-popup");
})



// Owl carousel Banner

$('.book-release-carousel').owlCarousel({
  nav: true,
  items: 4,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 50000,
  autoplayHoverPause: true,
  loop: false,
  navRewind: false,
  dots: false,

});
// Owl carousel Banner

var bookReleaseCardImg = document.querySelector(".book-release-carousel .card img");
var BookRelaseimageFlip = document.querySelector(".book-release-carousel .image-flip");
var bookCloseBtn = document.querySelector(".book-release-carousel .book-close-btn");

bookReleaseCardImg.addEventListener("click", () => {
  BookRelaseimageFlip.classList.add("image-flip-hover");
});

bookCloseBtn.addEventListener("click", () => {
  BookRelaseimageFlip.classList.remove("image-flip-hover");
});



