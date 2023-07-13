// scrolling animation
$(document).ready(function () {

  const navListEl = ".navbar-list-element";
  var speed = 3000;

  $(navListEl).click(function () {
    scrollToElement($(this).attr("href"), speed);
  });

  $("span").click(function() {
    scrollToBanner($(this).attr("href"), speed);
  })

});

var scrollToElement = (el, ms) => {
  
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top,
    },
    ms
  );
};

var scrollToBanner = (attr, ms) => {
  console.log('patata');
  $("#container").animate(
    {
      scrollTop: $(attr).offset().top,
    },
    ms
  );
}

function NavResponsive() {
  
  var x = document.getElementById("myTopnavResponsive");
  if (x.className === "hide") {
    x.className += "show";
  } else {
    x.className = "hide";
  }
}
