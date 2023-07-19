(function (window) {
  "use strict";
  window.addEventListener("resize", deviceCheck);
  window.addEventListener("load", deviceCheck);
})(window, document);

function deviceCheck() {
  refreshClassList("banner-1");
  refreshClassList("banner-2");
  refreshClassList("banner-3");
  refreshClassList("sections");

  const isMobile = window.matchMedia("(max-width: 575px)");
  const isTablet = window.matchMedia("(max-width: 1092px)");
  const isDesktop = window.matchMedia("(min-width: 1093px)");

  if (isMobile.matches) {
    // restartCoordinates();
    responsiveMobileFunc("mobile");
    return "mobile";
  } else if (isTablet.matches) {
    // restartCoordinates();
    responsiveTabletFunc("tablet");
    return "tablet";
  } else if (isDesktop.matches) {
    // restartCoordinates();
    desktopDesktopFunc();
    return "desktop";
  }
}
function desktopDesktopFunc() {
  // navbar
  var navbar = document.getElementById("pl-navbar");
  navbar.classList.remove("responsive");
  navbar.classList.add("no-responsive");
  document.getElementById("myTopNavResponsive").style.display = "none";
  // navegation
  displayElement("navigation-alternative", "none");
  displayElement("navigation", "flex");
  document.getElementById("banner-1").classList.add("banner-1-desktop");
  document.getElementById("banner-2").classList.add("banner-2-desktop");
  document.getElementById("banner-3").classList.add("banner-3-desktop");
  // sections
  document.getElementById("sections").classList.add("sections-desktop");
}
function responsiveTabletFunc() {
  // responsive navbar
  responsiveNavbar();
  // responsive navigation
  responsiveNavigation();
  // banner-1
  document.getElementById("banner-1").classList.add("banner-1-tablet");
  document.getElementById("banner-2").classList.add("banner-2-tablet");
  document.getElementById("banner-3").classList.add("banner-3-tablet");
  // sections
  document.getElementById("sections").classList.add("sections-tablet");
}
function responsiveMobileFunc() {
  // responsive navbar
  responsiveNavbar();
  responsiveNavigation();
  // banner-1
  document.getElementById("banner-1").classList.add("banner-1-mobile");
  document.getElementById("banner-2").classList.add("banner-2-mobile");
  document.getElementById("banner-3").classList.add("banner-3-mobile");
  // sections
  document.getElementById("sections").classList.add("sections-mobile");
}
function responsiveNavbar() {
  var navbar = document.getElementById("pl-navbar");
  navbar.classList.remove("no-responsive");
  navbar.classList.add("responsive");
}
function responsiveNavigation() {
  // navigation
  displayElement("myTopNavResponsive", "flex");
  displayElement("navigation", "none");
  displayElement("navigation-alternative", "flex");
}
function refreshClassList(id) {
  var element = document.getElementById(id);
  element.classList.remove(...element.classList);
}
// function restartCoordinates() {
//   // pag coordinates to y=0
//   window.scrollTo(0, 0);
//   // slider
//   let banner1Coords = document
//     .getElementById("banner-1")
//     .getBoundingClientRect();
//   document.getElementById("sld").scrollTo(0, 0);
//   // buttons
// }
const displayElement = (id, style) =>
  (document.getElementById(id).style.display = style);
const classToggle = (id, prev, post) =>
  document.getElementById(id).classList.replace(prev, post);
