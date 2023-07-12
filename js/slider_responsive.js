var showed_box = 0;

function fUp() {
  document.getElementById("arrow-down").style.color = "white";
  showed_box += -570;
  if (showed_box > 0) {
    document.getElementById("sld").style.transform =
      "translateY(" + -showed_box + "px)";
    if (showed_box === 570) {
      clicked("button_b");
    }
  } else {
    clicked("button_a");
    document.getElementById("sld").style.transform =
      "translateY(" + -showed_box + "px)";
    document.getElementById("arrowUp").style.visibility = "hidden";
  }
}

function fDown() {
  let icon = document.getElementById("arrowUp");
  icon.style.visibility = "visible";
  if (showed_box < 1140) {
    showed_box += 570;

    if (showed_box === 570) {
      clicked("button_b");
    } else if (showed_box === 1140) {
      clicked("button_c");
    }
    document.getElementById("sld").style.transform =
      "translateY(" + -showed_box + "px)";
    if (showed_box > 570) {
      document.getElementById("arrow-down").style.color = "black";
    }
  }
}
