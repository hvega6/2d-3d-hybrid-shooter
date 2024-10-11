window.onload = function() {
    const progressBar = document.querySelector('.progress');
    let width = 0;
  
    const interval = setInterval(function() {
      if (width >= 100) {
        clearInterval(interval);
        // Trigger the API download function here
      } else {
        width += 10;
        progressBar.style.width = width + '%';
      }
    }, 1000); // Adjust this interval as needed
  
    // Example for slideshow functionality (replace with your actual images)
    const slides = document.querySelector('.slides');
    const images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.style.backgroundImage = `url(${images[index]})`;
    }
  
    setInterval(function() {
      currentSlide = (currentSlide + 1) % images.length;
      showSlide(currentSlide);
    }, 3000); // Change slide every 3 seconds
  };
  