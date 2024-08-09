document.querySelectorAll(".carousel-container-custom").forEach((container) => {
  const previous = container.querySelector(".previous");
  const next = container.querySelector(".next");
  const images = Array.from(
    container.querySelectorAll(".slider-carousel-custom .images")
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

  // Function to go to the next image
  function nextImage() {
    images[currentIndex].classList.remove("main");
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add("main");
  }

  // Function to go to the previous image
  function previousImage() {
    images[currentIndex].classList.remove("main");
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images[currentIndex].classList.add("main");
  }
});

function showImage(experienceNumber, imageNumber) {
  const images = document.querySelectorAll(
    ".experience:nth-child(" + experienceNumber + ") img"
  );
  images.forEach((img) => img.classList.remove("pastExperience-active"));
  document
    .querySelector(
      ".experience:nth-child(" +
        experienceNumber +
        ") img:nth-child(" +
        (imageNumber + 1) +
        ")"
    )
    .classList.add("pastExperience-active");
}

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

// carousel.js

function initializeCarousel() {
  document
    .querySelectorAll(".carousel-container-custom")
    .forEach((container) => {
      const previous = container.querySelector(".previous");
      const next = container.querySelector(".next");
      const images = Array.from(
        container.querySelectorAll(".slider-carousel-custom .images")
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

      // Function to go to the next image
      function nextImage() {
        images[currentIndex].classList.remove("main");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("main");
      }

      // Function to go to the previous image
      function previousImage() {
        images[currentIndex].classList.remove("main");
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images[currentIndex].classList.add("main");
      }
    });
}
// custom-container.js

document.addEventListener("DOMContentLoaded", function () {
  var iconItem = document.querySelector(".icon-item"); // Adjust selector if needed
  var dynamicContent = document.getElementById("dynamic-content");
  var containerCustom = document.querySelector(".container-custom");

  iconItem.addEventListener("click", function () {
    dynamicContent.style.display = "none"; // Hide dynamic-content
    containerCustom.style.display = "block"; // Show container-custom
  });
});
