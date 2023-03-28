function clickPro() {
    var element = document.getElementById('startup');
    element.parentNode.removeChild(element);
    playMusico()
}

function playMusico() {
    var music = eatNutz()
    console.log(music)
    if (music == 1) {
        var car = "./music/heart.mp3";
    }
    if (music == 2) {
        var car = "./music/lacies_theme.mp3";
    }
    var audio = new Audio(car);
    audio.play();
}

function eatNutz() {
    let music = Math.floor((Math.random() * 2) + 1)
    return music
}


function goTop() {
    setTimeout(() => {  window.scrollTo(0,0); }, 200);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}