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
  var body = document.body;
  const isMobile = window.matchMedia("(max-width: 767px)");
  const isTablet = window.matchMedia("(max-width: 1024px)");
  const isDesktop = window.matchMedia("(min-width: 1025px)");

  if (isMobile.matches) {
    console.log("mobile");
    responsiveFunc();
    return "mobile";
  } else if (isTablet.matches) {
    console.log("tablet");
    responsiveFunc();
    return "tablet";
  } else if (isDesktop.matches) {
    console.log("desktop");
    desktopFunc();
    return "desktop";
  }
}

function desktopFunc() {
  // responsive-navbar -> navbar
  var navbar = document.getElementById("pl-navbar");
  navbar.classList.remove("responsive");
  navbar.classList.add("no-responsive");
  document.getElementById("myTopnavResponsive").style.display = "none";

  // navegation-alternative -> navigation
  var responsiveNavigation = document.getElementById("navigation-alternative");
  responsiveNavigation.style.display = "none";

  var navigation = document.getElementById("navigation");
  navigation.style.display = "flex";

  // fadeIn - banner-2
  var responsiveBanner = document.getElementById("banner-2");
  responsiveBanner.classList.replace("banner-2-responsive", "banner-2");

  var containers = document.getElementById("containers");
  containers.classList.replace("containers-responsive", "containers");

  // sections
  var responsiveSections = document.getElementById("sections");
  responsiveSections.classList.replace("responsive-sections", "sections");
}

function responsiveFunc() {
  // navbar -> responsive-navbar
  var navbar = document.getElementById("pl-navbar");
  navbar.classList.remove("no-responsive");
  navbar.classList.add("responsive");

  // navegation -> navigation-alternative
  var navigation = document.getElementById("navigation");
  navigation.style.display = "none";

  var responsiveNavigation = document.getElementById("navigation-alternative");
  responsiveNavigation.style.display = "flex";

  // fadeOut - banner-2
  var responsiveBanner = document.getElementById("banner-2");
  responsiveBanner.classList.replace("banner-2", "banner-2-responsive");

  var responsiveContainers = document.getElementById("containers");
  responsiveContainers.classList.replace("containers", "containers-responsive");

  // sections
  var sections = document.getElementById("sections");
  sections.classList.replace("sections", "responsive-sections");
}
