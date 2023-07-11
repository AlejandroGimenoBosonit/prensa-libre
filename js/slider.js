// ELLIPSIS BUTTON CHANGE
const changeEllipsis = (event) => {
  const clickedElem = event.target;
  const allBtns = document.querySelectorAll(".ellipse");

  allBtns.forEach((btn) => btn.classList.remove("ellipse-filled"));
  clickedElem.classList.add("ellipse-filled");
};

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
    selectMultiElements("#img-grid", "grid-container-inverted");

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
    selectMultiElements("#img-grid", "grid-container");

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
    selectMultiElements("#img-grid", "grid-container-inverted");
  }
};



const selectMultiElements = (id, newClass) => {
  const elements = document.querySelectorAll(id);
  elements.forEach((el) => {
    el.className = newClass;
  });
};


const sliderArrow = (label) => {

  // saber en que banner estamos
  const classElement = document.getElementById('focused').className;
  console.log(label);

  



};