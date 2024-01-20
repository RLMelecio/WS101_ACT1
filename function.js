
// PROGRESS LINE BAR SECTION

function animateProgressBars(targetPercentages) {

  const progressBars = document.querySelectorAll('.progress-line span');
  progressBars.forEach((progressBar, index) => {
    const initialWidth = 0;
    const targetWidth = (targetPercentages[index] / 100) * progressBar.parentElement.offsetWidth;

    const increment = Math.ceil(targetWidth / 100);

    function increaseWidth() {
      let width = initialWidth;

      function frame() {
        width += increment;
        progressBar.style.width = `${width}px`;

        if (width < targetWidth) {
          requestAnimationFrame(frame);
        }
      }

      requestAnimationFrame(frame);
    }

    increaseWidth();
  });
}

animateProgressBars([95, 55, 33, 25, 21]);

// SCROLL PADDING

const navigation = document.querySelector(".navi");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
 "--scroll-padding",
 navigationHeight + "px"
);

// STICKY NAVBAR

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navi');
  const navbarLinks = navbar.querySelectorAll('a');

  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('sticky');
    navbarLinks.forEach(link => link.style.color = '#fff');
  } else {
    navbar.classList.remove('sticky');
    navbarLinks.forEach(link => link.style.color = '#fff');
  }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

hamburger.onclick = function () {
  nav.classList.toggle("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});


// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " actives";
}