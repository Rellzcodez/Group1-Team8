
/* HAMBURGER-MENU SELECTOR */

const menu_hamburger = document.querySelector(".hamburger");
const hamburger_nav = document.querySelector(".navigation-hamburger");

menu_hamburger.addEventListener('click', function(){
    menu_hamburger.classList.toggle("active");
    hamburger_nav.classList.toggle('active');
})

/* END */

/* CAROUSEL TRACKER */
// const carousel_track = document.querySelectorAll(".tracker");

// carousel_track.addEventListener('click', function(){
//     carousel_track.classList.toggle('active-track');
// })