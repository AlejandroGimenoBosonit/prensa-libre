// scrolling animation
$(document).ready(function () {
  
  const navListEl = ".navbar-list-element";
  var speed = 3000;

  $(navListEl).click(function () {
    scrollToElement($(this).attr("href"), speed);
  });

  // $("span").click(function () {
  //   scrollToBanner($(this).attr("href"), speed);
  // });
});

var scrollToElement = (el, ms) => {
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top,
    },
    ms
  );
};

// var scrollToBanner = (attr, ms) => {
//   $("#container").animate(
//     {
//       scrollTop: $(attr).offset().top,
//     },
//     ms
//   );
// };
/**
 * 
 * TODO: concatena clases
 */
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
