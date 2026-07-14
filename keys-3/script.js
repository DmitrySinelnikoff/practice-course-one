// для простоты я использовал массив с путями к изображениям, но по хорошему эти пути нужно 
// получать с сервера, чтобы не хранить их в коде, но в задании про это не сказано
const images = [
  "images/image-1.jpg",
  "images/image-2.jpg",
  "images/image-3.webp",
  "images/image-4.jpg",
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const counter = document.getElementById("counter");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showImage() {
  sliderImage.src = images[currentIndex];
  counter.textContent = "Изображение " + (currentIndex + 1) + " из " + images.length;
}

function showNextImage() {
  currentIndex++;

  if (currentIndex === images.length) {
    currentIndex = 0;
  }

  showImage();
}

function showPrevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();
}

nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

showImage();
