let slides = document.querySelectorAll(".sider > div");
let slideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);
function Menu() {
    var names = document.querySelectorAll('.names');
    names.forEach(function(name) {
        name.classList.toggle('active');
    });
}
