const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const projects = document.querySelectorAll('.portfolio-box');
const footerYear = document.querySelector('.year');
const popBtn = document.querySelector('.contact-popup-btn');
const contactPopup = document.querySelector('.contact-popup');
/********** navigation toggle ************/
menu.addEventListener('click',(e)=>{
  main.classList.toggle('active');
  e.preventDefault();
    e.stopPropagation();
  
});
let linksLength = navLinks.length;
for(var i = 0; i < linksLength; i++) {
  navLinks[i].addEventListener('click', function() {
    main.classList.toggle('active');
  });
}

/*********** Footer year update *********/
let year = new Date().getFullYear();
footerYear.textContent = year;

popBtn.addEventListener('click',(e)=>{
 e.preventDefault();
    e.stopPropagation();
  contactPopup.classList.add('active');
});


/** Close nav & popups when click outside */
$(document).on("click", function() {
   $('.main').removeClass('active');
   $('.contact-popup').removeClass('active');
   $('.popup-wraper').removeClass('active');
}); 


window.onload = ()=>{
 const hero = document.querySelector('.hero');
 const body = document.querySelector('body');
 const logo = document.querySelector('.main-img');
 hero.classList.add('active');
 body.classList.add('active');
 setTimeout(function() {
  logo.src = 'images/logo-1.png';
}, 1800);

}

/********** Download Cv *********/
const cvBtn = document.querySelector('.cv-btn');
cvBtn.onclick = (e)=>{
  e.preventDefault();
  alert('Sorry...CV is not available now')
}