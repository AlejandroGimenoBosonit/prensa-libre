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
  let navbarResp = document.getElementById("myTopNavResponsive").classList;
  
  if(navbarResp.contains("hide")){
    navbarResp.replace("hide", "show");
  }else{
    navbarResp.replace("show", "hide");
  }
}


