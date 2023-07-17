// scrolling animation
$(document).ready(function () {
  
  const navListEl = ".navbar-list-element";
  var speed = 3000;

  $(navListEl).click(function () {
    scrollToElement($(this).attr("href"), speed);
  });
});

var scrollToElement = (el, ms) => {
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top,
    },
    ms
  );
};
function NavResponsive() {
  var x = document.getElementById("myTopnavResponsive");
  if (x.className === "hide") {

    x.classList.remove("hide");
    x.classList.add("show");

  } else {
    x.classList.remove("show");
    x.classList.add("hide");
  }
}
