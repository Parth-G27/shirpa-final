let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Display the current slide
  slides[slideIndex].style.display = 'block';

  slideIndex++;

  // Reset index if it goes out of bounds
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Start slideshow
showSlides();
