/// <reference path="./jquery-3.6.3.min.js" />

const images = $(".banner-image");
var containerWidth = $(".banner-image").width();
let index = 0;
var i = 0;
var clicked = false;

$(function() {
  images.hide();
  images.eq(index).show();

  autoSlide();

  $("#left").on("click", function() {
    images.eq(index).animate({
      width: 0
    });

    if(--index < 0) {
      index += images.length;
    }

    images.eq(index).animate({
      width: containerWidth
    });

    // when user change the slide manually, reset the interval
    autoSlide(true);
  })

  $("#right").on("click", function() {
    images.eq(index).animate({
      width: 0
    });

    if(++index >= images.length) {
      index -= images.length;
    }

    images.eq(index).animate({
      width: containerWidth
    });
    
    // when user change the slide manually, reset the interval
    autoSlide(true);
  })
})

// make an auto slider for the banner images (slides to the right every 8 seconds)
const autoSlide = (clicked) => {
  const sliderInterval = setInterval(function() {
    i = i + 1;
    var counter = 8 - i;
    if (counter === 0) {
      images.eq(index).animate({
        width: 0
      });
  
      if(++index >= images.length) {
        index -= images.length;
      }
  
      images.eq(index).animate({
        width: containerWidth
      });
  
      i = 0;
    }
  }, 1000);

  // when user change the slide manually, reset the interval
  if (clicked) {
    clearInterval(sliderInterval);
    i = 0;
  }
}