let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

window.onload = () => showSlide(0);
