
/* HAMBURGER-MENU SELECTOR */

const menu_hamburger = document.querySelector(".hamburger");
const hamburger_nav = document.querySelector(".navigation-hamburger");

menu_hamburger.addEventListener('click', function(){
    menu_hamburger.classList.toggle("active");
    hamburger_nav.classList.toggle('active');
});

/* END */

/* CAROUSEL TRACKER */


function currentSlide(n) {
    showSlides(slideIndex = n);
    clearTimeout(timeout);
}

 var slideIndex = 0;
 showSlides();

 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("slide");
     var tracker = document.getElementsByClassName("tracker");
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display ="none";
     }
     for (i = 0; i < tracker.length; i++) {
        tracker[i].className = tracker[i].className.replace(" clicked", "");
    }

     slideIndex++;
     if (slideIndex > slides.length) { slideIndex = 1 }
     slides[slideIndex - 1].style.display = "block";
     tracker[slideIndex - 1].className += " clicked";
      // Change image every 3 seconds
    const timeout = setTimeout(showSlides, 3000);
    
 }
 