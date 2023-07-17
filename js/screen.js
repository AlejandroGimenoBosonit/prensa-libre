(function (window, document, undefined) {
  "use strict";
  var MatchMedia = debounce(function () {
    deviceCheck();
  }, 250);
  window.addEventListener("resize", MatchMedia);
  window.addEventListener("load", MatchMedia);
})(window, document);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function deviceCheck() {
  
  refreshClassList("banner-1");
  refreshClassList("banner-2");
  refreshClassList("banner-3");
  refreshClassList("sections");
  
  const isMobile = window.matchMedia("(max-width: 767px)");
  const isTablet = window.matchMedia("(max-width: 1092px)");
  const isDesktop = window.matchMedia("(min-width: 1093px)");

  if (isMobile.matches) {
    responsiveMobileFunc("mobile");
    return "mobile";



  } else if (isTablet.matches) {
    responsiveTabletFunc("tablet");
    return "tablet";




  } else if (isDesktop.matches) {
    desktopDesktopFunc();
    return "desktop";
  }
}







function desktopDesktopFunc(){
  console.log('desktop view');
  // navbar
  var navbar = document.getElementById("pl-navbar");
  navbar.classList.remove("responsive");
  navbar.classList.add("no-responsive");
  document.getElementById("myTopnavResponsive").style.display = "none";

  // navegation
  displayElement("navigation-alternative", "none");
  displayElement("navigation", "flex");

  document.getElementById("banner-1").classList.add("banner-1-desktop");
  document.getElementById("banner-2").classList.add("banner-2-desktop");
  document.getElementById("banner-3").classList.add("banner-3-desktop");

  // sections
  document.getElementById("sections").classList.add("sections-desktop");
}




function responsiveTabletFunc(){
  console.log('Tablet view');
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
function responsiveMobileFunc(){
  console.log('mobile view');
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
  displayElement("myTopnavResponsive", "flex");
  displayElement("navigation", "none");
  displayElement("navigation-alternative", "flex");
}
function refreshClassList(id) {
  var element = document.getElementById(id);
  element.classList.remove(...element.classList);
}
const displayElement = (id, style) => document.getElementById(id).style.display = style;
const classToggle = (id, prev, post) => document.getElementById(id).classList.replace(prev, post);