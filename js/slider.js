// ELLIPSIS BUTTON CHANGE
const changeEllipsis = (event) =>{
  const clickedElem = event.target
  const allBtns = document.querySelectorAll('.ellipse');

  allBtns.forEach(btn => btn.classList.remove("ellipse-filled"));
  clickedElem.classList.add("ellipse-filled");
}



$(document).ready(function(e){
  
  $('.ellipse').on('click', function() {

    // animations
    var attr = $(this).attr('href');
    // console.log(attr);
    if(attr==="#slider1"){
      // animation slider 1

    }else if(attr==="#slider2"){
      // animation slider 2

    }else{
      // animation slider 3

    }
  })
})