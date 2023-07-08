// ELLIPSIS BUTTON CHANGE
const changeEllipsis = (event) =>{
  const clickedElem = event.target
  const allBtns = document.querySelectorAll('.ellipse');

  allBtns.forEach(btn => btn.classList.remove("ellipse-filled"));
  clickedElem.classList.add("ellipse-filled");
}

const clicked = (id) => {
  

  // var element = document.getElementsByClassName('elemento-bote');
  var classname = document.getElementById('bote-img').className;

  if(id==='button_a' && document.getElementById('bote-img').className=='animate-boat'){

    document.getElementById('bote-img').className='animate-boat-2';
    // if(classname == 'animate-boat'){
    //   classname = 'animate-boat-2';
    // }else{
    //   classname = 'animate-boat';
    // }
    // poner nueva
    // element.classList.add('animate-boat');
  }else if(id==='button_b'){
    document.getElementById('bote-img').className='animate-boat';
    // quitar clase
    // element.classList.remove('animate-boat');
    // poner nueva
    // element.classList.add('animate-boat-2');
  
    
  }else{
    document.getElementById('bote-img').className='animate-boat';
    // quitar clase
    // element.classList.remove('animate-boat-2');
    // poner nueva
    // element.classList.add('animate-boat');
  
  }
}
// // onlick
// const clicked = (id) => {
//   // check id
//   console.log(id);
//   var element = document.getElementById(id);

//   if(id==='button_a'){
//     // posicion inicial
//     element.classList.toggle('posBoteInicial');
//     // animacion
//     element.classList.add('animate-boat');

//   }else if(id==='button_b'){
//     element.classList.toggle('posBoteInicial');
    
//   }else{
//     element.classList.toggle('posBoteInicial');
    
//   }
// }
// //cuando el documento este isto...
// $(document).ready(function(e){
//   // cuando uno de los botones es pulsado
//   $('.ellipse').on('click', function() {

//     // checkeo queboton ha sido pulsado
//     var id = $(this).attr('id');

//     // en funcion de que boton se ha pulsado se procede a cambiar a clase animada
//     if(id==="button_a"){
//       $('.elemento-bote').addClass('animate-boat');


//     }else if(id==="button_b"){
//       // reiniciar posiciones de los demas





//       // animation slider 2

//     }else{
//       // animation slider 3

//     }
//   })
// })