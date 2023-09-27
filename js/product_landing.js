// JavaScript for image slider
let currentIndex = 0;
const images = document.querySelectorAll(".image-slider img");
const totalImages = images.length;
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");

function showImage(index) {
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    }

    images.forEach((img, i) => {
        if (i === currentIndex) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

nextButton.addEventListener("click", () => {
    currentIndex++;
    showImage(currentIndex);
});

prevButton.addEventListener("click", () => {
    currentIndex--;
    showImage(currentIndex);
});

// Show the initial image
showImage(currentIndex);
