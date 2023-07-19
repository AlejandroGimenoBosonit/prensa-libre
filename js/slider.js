
var showed_box = 0;
$(function() {
  initMovements();
  
});
function initMovements(){
  // event listener to ellipsis
  const sliderButtons = document.querySelectorAll('[id^="button_"]');
  sliderButtons.forEach((sliderButton) => {
    sliderButton.addEventListener("click", function() {
      clicked(sliderButton.id);
    });
  });
  // arrows
  const sliderArrows = document.querySelectorAll('#slider-arrow');
  sliderArrows.forEach((sliderArrow) => {
    sliderArrow.addEventListener("click", function() {
      let arrUp = document.getElementsByClassName("arrowUp")[0];
      if(sliderArrow.className === "arrowUp"){
        arrowUp(arrUp);
      }else if(sliderArrow.className === "arrowDown"){
        arrowDown(arrUp);
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
    document.getElementById("banner-1-title").classList.replace("animate-title-2", "animate-title");
    // banner-2
    document.getElementById("banner-2-title").classList.replace("animate-banner-2-title-inverted", "animate-banner-2-title");



    // let elementA = document.querySelector(".grupo-a");
    // elementA.classList.replace("grupo-a", "grupo-a-inverted");
    // let elementB = document.querySelector(".grupo-b");
    // elementB.classList.replace("grupo-b", "grupo-b-inverted");
    // selectMultiElements("#container", "grid-container","grid-container-inverted");
    let elementA = document.querySelector(".grupo-a");
    let elementB = document.querySelector(".grupo-b");

    if(elementA.classList.contains("alpha") && elementB.classList.contains("betha")){
      console.log('TIENEN ALPHA Y BETHA');
       elementA.classList.replace("alpha","alpha-inverted");
       elementB.classList.replace("betha", "betha-inverted");
    }else{
      elementA.classList.add("alpha-inverted");
      elementB.classList.add("betha-inverted");
    }




    // banner-3
    document.getElementById("bote2-img").className = "animate-bote2-2";
    document.getElementById("banner-3-title").classList.replace("animate-banner-3-title", "inverted-animate-banner-3-title")
  } else if (
    id === "button_b" &&
    document.getElementById("banner-2-title").classList.contains("animate-banner-2-title")
  ) {
    // banner-2
    document.getElementById("banner-2-title").classList.replace("animate-banner-2-title", "animate-banner-2-title-inverted");

    // elegir elemento grupo-a
    // elegir elemento grupo-b
    // cambiarles las clases
    // selectMultiElements("#container", "grid-container-inverted","grid-container");
    let elementA = document.querySelector(".grupo-a");
    let elementB = document.querySelector(".grupo-b");

    if(elementA.classList.contains("alpha-inverted") && elementB.classList.contains("betha-inverted")){
       elementA.classList.replace("alpha-inverted","alpha");
       elementB.classList.replace("betha-inverted", "betha");
    }else{
      elementA.classList.add("alpha");
      elementB.classList.add("betha");
    }
   
  
    

    // banner-1
    document.getElementById("bote-img").className = "animate-bote";
    document.getElementById("banner-1-title").classList.replace("animate-title", "animate-title-2");
    // banner-3
    document.getElementById("bote2-img").className = "animate-bote2-2";
    document.getElementById("banner-3-title").classList.replace("animate-banner-3-title", "inverted-animate-banner-3-title");
  } else if (
    id === "button_c" &&
    document.getElementById("bote2-img").className == "animate-bote2-2"
  ) {
    // banner-3
    document.getElementById("bote2-img").className = "animate-bote2";
    document.getElementById("banner-3-title").classList.replace("inverted-animate-banner-3-title", "animate-banner-3-title")
    // banner-1
    document.getElementById("bote-img").className = "animate-bote";


    document.getElementById("banner-1-title").classList.replace("animate-title", "animate-title-2");
    document.getElementById("banner-2-title").classList.replace("animate-banner-2-title-inverted", "animate-banner-2-title");
    // selectMultiElements("#container", "grid-container","grid-container-inverted");
    
    let elementA = document.querySelector(".grupo-a");
    let elementB = document.querySelector(".grupo-b");

    if(elementA.classList.contains("alpha") && elementB.classList.contains("betha")){
       elementA.classList.replace("alpha","alpha-inverted");
       elementB.classList.replace("betha", "betha-inverted");
    }else{
      elementA.classList.add("alpha-inverted");
      elementB.classList.add("betha-inverted");
    }
  }
};

function arrowUp(arrUp) {
  console.log('ey');
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
      arrUp.style.visibility = "hidden";
  }
}

function arrowDown(arrowUp) {
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
