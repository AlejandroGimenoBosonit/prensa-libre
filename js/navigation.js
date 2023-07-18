// scrolling animation

$(function () {

  initNavigation();
  const iconBars  = document.getElementById("icon-bars")
  iconBars.addEventListener("click", () => NavResponsive())
});
function initNavigation() {
  const navListEl = ".navbar-list-element";
  let speed = 3000;

  $(navListEl).click(function () {
    scrollToElement($(this).attr("href"), speed);
  });
  
}
var scrollToElement = (el, ms) => {
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top,
    },
    ms
  );
};

function NavResponsive() {
  let navbarResp = document.getElementById("myTopNavResponsive");
  if (navbarResp.className === "hide") {
    navbarResp.classList.remove("hide");
    navbarResp.classList.add("show");

  } else {
    navbarResp.classList.remove("show");
    navbarResp.classList.add("hide");
  }
}


