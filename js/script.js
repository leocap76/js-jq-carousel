$(document).ready(function(){
  //gestione delle frecce grige dx & sx

//indietro
  $(".prev").click(function(){

    prevImage();

  });
//avanti
  $(".next").click(function(){

    nextImage();

  });
});

//funzioni
function nextImage(){
  console.log("img a destra");

  var activeImage = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeImage.removeClass("active");
  activeCircle.removeClass("active");

  if(activeImage.hasClass("last")==true){
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else{
    activeImage.next().addClass("active");
    activeCircle.next().addClass("active");
  }
}

function prevImage() {
  var activeImage = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeImage.removeClass("active");
  activeCircle.removeClass("active");

  if(activeImage.hasClass("first")==true){
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else{
    activeImage.prev().addClass("active");
    activeCircle.prev().addClass("active");
  }
}
