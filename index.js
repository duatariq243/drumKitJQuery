
     
     $("button").on("click" , function (){
           makeSound(this.innerHTML);
       makeAnimation(this.innerHTML);
     })
     
     

    $(document).on("keydown" , function(event){
      
      makeSound(event.key);
  makeAnimation(event.key);
    })

   


function makeSound(key) {
  if (key == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } 
  else if (key == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } 
  else if (key == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } 
  else if (key == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } 
  else if (key == "j") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } 
  else if (key == "k") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } 
  else if (key == "l") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
};

function makeAnimation(currentKey) {
  var activeButton = $("." + currentKey);
  activeButton.addClass("pressed");
  setTimeout(function () {
    activeButton.removeClass("pressed");
  }, 100);
}