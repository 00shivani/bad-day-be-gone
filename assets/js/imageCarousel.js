// -office hours 7/24 
// divs needed caoursel box, slides,
// https://betterprogramming.pub/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9

var carousel = document.querySelector(".carouselbox");

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else  {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval (function(){plusSlides(n+2)}, 4000)
    } else {
        myTimer = setInterval(function(){plusSlides(n+1)},4000);
    };
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none"
    } 
    for (i =0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = this.setInterval(function(){plusSlides(1)}, 4000);
})