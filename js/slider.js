
var showed_box = 0;
$(function() {
  initMovements();
  
});
function initMovements(){
  // event listener to ellipsis
  const sliderButtons = document.querySelectorAll('[id^="button_"]');
  sliderButtons.forEach((sliderButton) => {
    sliderButton.addEventListener("click", function() {
      clicked(sliderButton.id)
    });
  });


  // arrows
  const sliderArrows = document.querySelectorAll('#slider-arrow');
  sliderArrows.forEach((sliderArrow) => {
    sliderArrow.addEventListener("click", function() {
      let arrowUp = document.getElementsByClassName("arrowUp")[0];
      if(sliderArrow.className === "arrowUp"){
        fUp(arrowUp);
      }else if(sliderArrow.className === "arrowDown"){
        fDown(arrowUp);
      }
    })
    
  })
}

const clicked = (id) => {
  if (
    id === "button_a" &&
    document.getElementById("bote-img").className == "animate-bote"
  ) {
    // banner-1
    document.getElementById("bote-img").className = "animate-bote-2";
    document.getElementById("banner-1-title").className = "animate-title";

    // banner-2
    document.getElementById("banner-2-title").className =
      "animate-banner-2-title";
    selectMultiElements("#container", "grid-container-inverted");

    // banner-3
    document.getElementById("bote2-img").className = "animate-bote2-2";
    document.getElementById("banner-3-title").className =
      "animate-banner-3-title-inverted";
  } else if (
    id === "button_b" &&
    document.getElementById("banner-2-title").className ==
      "animate-banner-2-title"
  ) {
    // banner-2
    document.getElementById("banner-2-title").className =
      "animate-banner-2-title-inverted";
    selectMultiElements("#container", "grid-container");

    // banner-1
    document.getElementById("bote-img").className = "animate-bote";
    document.getElementById("banner-1-title").className = "animate-title-2";
    // banner-3
    document.getElementById("bote2-img").className = "animate-bote2-2";
    document.getElementById("banner-3-title").className =
      "animate-banner-3-title-inverted";
  } else if (
    id === "button_c" &&
    document.getElementById("bote2-img").className == "animate-bote2-2"
  ) {
    // banner-3
    document.getElementById("bote2-img").className = "animate-bote2";
    document.getElementById("banner-3-title").className =
      "animate-banner-3-title";
    // banner-1
    document.getElementById("bote-img").className = "animate-bote";
    document.getElementById("banner-1-title").className = "animate-title-2";
    // banner-2
    document.getElementById("banner-2-title").className =
      "animate-banner-2-title";
    selectMultiElements("#container", "grid-container-inverted");
  }
};
const selectMultiElements = (id, newClass) => {
  const elements = document.querySelectorAll(id);
  elements.forEach((el) => {
    el.className = newClass;
  });
};
function fUp(arrowUp) {
  let whiteArrow = document.querySelector(".fa-chevron-down");
  whiteArrow.style.color = "white";
  showed_box += -570;
  if (showed_box > 0) {
    document.getElementById("sld").style.transform =
      "translateY(" + -showed_box + "px)";
    if (showed_box === 570) {
      clicked("button_b");
    }
  } else {
    clicked("button_a");
    document.getElementById("sld").style.transform =
      "translateY(" + -showed_box + "px)";
      arrowUp.style.visibility = "hidden";
  }
}

function fDown(arrowUp) {
  arrowUp.style.visibility = "visible";

  if (showed_box < 1140) {
    showed_box += 570;

    if (showed_box === 570) {
      clicked("button_b");
    } else if (showed_box === 1140) {
      clicked("button_c");
    }
    document.getElementById("sld").style.transform =
      "translateY(" + -showed_box + "px)";
    if (showed_box > 570) {
      let blackArrow = document.querySelector(".fa-chevron-down");
      blackArrow.style.color = "black"
    }
  }
}
