function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar-list") {
    x.className += " responsive";
  } else {
    x.className = "navbar-list";
  }
}

// scrolling animation

$(document).ready(function (e) {
  // e.preventDefault();
  const element = ".navbar-list-element";
  $(element).click(function () {
    scrollToElement($(this).attr("href"), 3000);
  });
});

var scrollToElement = function (el, ms) {
  var speed = ms ? ms : 3000;
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top,
    },
    speed
  );
};
