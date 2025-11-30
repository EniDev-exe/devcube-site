// ano dinâmico no footer
document.getElementById("year").textContent = new Date().getFullYear();

// CARROSSEL SIMPLES
const track = document.querySelector(".carousel-track");
const dots = Array.from(document.querySelectorAll(".dot"));
const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

let currentIndex = 0;
const totalSlides = dots.length;

function updateCarousel(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index);
    updateCarousel(index);
  });
});

prevBtn.addEventListener("click", () => {
  updateCarousel(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  updateCarousel(currentIndex + 1);
});
