// dynamic-content.js

document.addEventListener("DOMContentLoaded", function () {
  var iconsItem = document.getElementById("icons-item");
  var dynamicContent = document.getElementById("dynamic-content");

  iconsItem.addEventListener("click", function () {
    fetch("Dynamic.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        dynamicContent.innerHTML = html;
        dynamicContent.style.display = "block"; // Show dynamic-content
        document.querySelector(".container-custom").style.display = "none"; // Hide container-custom
        initializeCarousel();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        dynamicContent.innerHTML = "<p>Failed to load content.</p>";
      });
  });

  function initializeCarousel() {
    document.querySelectorAll(".carousel-container").forEach((container) => {
      const previous = container.querySelector(".previous");
      const next = container.querySelector(".next");
      const images = Array.from(
        container.querySelectorAll(".slider-carousel .images")
      );
      const totalImages = images.length;
      let currentIndex = 0;

      // Show the first image
      images[currentIndex].classList.add("main");

      // Event Listeners for previous and next buttons
      previous.addEventListener("click", () => {
        previousImage();
      });

      next.addEventListener("click", () => {
        nextImage();
      });

      // Function to go to next Image
      function nextImage() {
        images[currentIndex].classList.remove("main");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("main");
      }

      // Function to go to previous Image
      function previousImage() {
        images[currentIndex].classList.remove("main");
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].classList.add("main");
      }
    });
  }
});
