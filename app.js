//create functions for the carousel

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000); /* Change slide every 5 seconds */

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
});

next.addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
});



// create a menu in version mobile

const hamburger = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.menu-main');
const cancel = document.querySelector('.cancel');
const linkss = document.querySelectorAll('.menu-cancel');

hamburger.addEventListener('click', () => {
  overlay.style.display = 'flex';
  mainMenu.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < linkss.length; i += 1) {
  linkss[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}
