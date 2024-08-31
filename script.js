const images = [
    'jisca-lucia-C5TXGtfEk4c-unsplash.jpg',
    'daniel-sessler-xHxfXRbTG1Y-unsplash.jpg',
    'joe-gadd-E3KIeEtnyEk-unsplash.jpg',
    'leo_visions-PdSC80K2g6c-unsplash.jpg',
    'luke-miller-Dh2JPrwGRsk-unsplash.jpg',
    'peter-thomas-Jzp2co_XXGg-unsplash.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const currentImage = document.getElementById('current-image');
    currentImage.src = images[index];
    currentIndex = index;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

function openLightbox() {
    document.getElementById('lightbox').style.display = "block";
    currentImage(currentIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

function currentImage(index) {
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[index];
    currentIndex = index;
    updateCaption(index);
}

function updateCaption(index) {
    const caption = document.getElementById('caption');
    caption.innerHTML = `Image ${index + 1} of ${images.length}`;
}
