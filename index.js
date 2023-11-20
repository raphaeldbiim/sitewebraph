document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var slides = document.querySelector(".slides");
  
    function showSlide(index) {
      slides.style.transform = "translateX(" + -index * 100 + "%)";
    }
  
    
    document.querySelector(".prev").addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = document.querySelectorAll(".slide").length - 1;
      }
      showSlide(currentIndex);
    });
  
    
    document.querySelector(".next").addEventListener("click", function () {
      if (currentIndex < document.querySelectorAll(".slide").length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    });
  });