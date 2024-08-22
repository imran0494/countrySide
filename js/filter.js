document.addEventListener("DOMContentLoaded", function () {
  // Default values for room filters
  const defaultValues = {
    bedrooms: "Any",
    beds: "Any",
    bathrooms: "Any",
  };

  // Current values for room filters
  const roomValues = { ...defaultValues };

  // Function to open the filter
  function openFilter() {
    const filterElement = document.querySelector(".filter");
    filterElement.style.display = "flex";
    filterElement.style.overflowY = "scroll"; // Enable vertical scrolling inside the filter
    filterElement.style.maxHeight = "100vh"; // Ensure it doesn't exceed the viewport height
    document.body.style.overflow = "hidden"; // Prevent scrolling on the body
  }

  // Function to close the filter
  function closeFilter() {
    const filterElement = document.querySelector(".filter");
    filterElement.style.display = "none";
    filterElement.style.overflowY = ""; // Reset overflow
    document.body.style.overflow = ""; // Re-enable scrolling on the body
  }

  // Add event listeners to buttons
  document
    .getElementById("openFilterBtn")
    .addEventListener("click", openFilter);
  document.getElementById("close-btn").addEventListener("click", closeFilter);

  // Function to update graph based on the selected button
  function updateGraph(type) {
    const graphBars = document.querySelectorAll(".bar");
    let heights;
    switch (type) {
      case "any":
      case "room":
      case "entire":
        heights = Array.from({ length: 30 }, () =>
          Math.floor(Math.random() * 100)
        );
        break;
      default:
        heights = [];
    }
    graphBars.forEach((bar, index) => {
      if (heights[index] !== undefined) {
        bar.style.height = `${heights[index]}%`;
      }
    });
  }

  // Event listeners for filter buttons
  document.getElementById("any-type-btn").addEventListener("click", () => {
    updateGraph("any");
    setActiveFilterButton("any-type-btn");
  });

  document.getElementById("room-btn").addEventListener("click", () => {
    updateGraph("room");
    setActiveFilterButton("room-btn");
  });

  document.getElementById("entire-home-btn").addEventListener("click", () => {
    updateGraph("entire");
    setActiveFilterButton("entire-home-btn");
  });

  // Function to set active class for filter buttons
  function setActiveFilterButton(activeId) {
    ["any-type-btn", "room-btn", "entire-home-btn"].forEach((id) => {
      document.getElementById(id).classList.toggle("active", id === activeId);
    });
  }

  // Function to update bars based on price range
  function updateBars() {
    const minPrice = parseInt(document.getElementById("min-price").value);
    const maxPrice = parseInt(document.getElementById("max-price").value);
    const minValueSpan = document.getElementById("min-value");
    const maxValueSpan = document.getElementById("max-value");
    const bars = document.querySelectorAll(".bar");

    minValueSpan.textContent = `₹${minPrice}`;
    maxValueSpan.textContent = `₹${maxPrice}`;

    const minPercent = ((minPrice - 4200) / (58000 - 4200)) * 100;
    const maxPercent = ((maxPrice - 4200) / (58000 - 4200)) * 100;

    bars.forEach((bar, index) => {
      const barPosition = (index + 1) * (100 / bars.length);
      bar.style.backgroundColor =
        barPosition >= minPercent && barPosition <= maxPercent
          ? "#ff0066"
          : "grey";
    });
  }

  // Event listeners for price range sliders
  document.getElementById("min-price").addEventListener("input", updateBars);
  document.getElementById("max-price").addEventListener("input", updateBars);

  // Function to update display for room values
  function updateDisplay() {
    document.querySelectorAll(".room-value").forEach((element) => {
      const type = element.getAttribute("data-type");
      element.textContent = roomValues[type];
    });
  }

  // Functions to change room values
  function increaseValue(type) {
    roomValues[type] = roomValues[type] === "Any" ? 1 : roomValues[type] + 1;
    updateDisplay();
  }

  function decreaseValue(type) {
    roomValues[type] = roomValues[type] === 1 ? "Any" : roomValues[type] - 1;
    updateDisplay();
  }

  // Event listeners for room value buttons
  document.querySelectorAll(".plus-btn").forEach((button) => {
    button.addEventListener("click", (e) =>
      increaseValue(e.target.getAttribute("data-type"))
    );
  });

  document.querySelectorAll(".minus-btn").forEach((button) => {
    button.addEventListener("click", (e) =>
      decreaseValue(e.target.getAttribute("data-type"))
    );
  });

  // Event listener for clear button
  document.querySelector(".clear-btn").addEventListener("click", () => {
    // Reset room values
    Object.assign(roomValues, defaultValues);
    updateDisplay();

    // Reset amenities
    document
      .querySelectorAll(".amenity-btn")
      .forEach((button) => button.classList.remove("selected"));

    // Reset price range
    document.getElementById("min-price").value = "4200";
    document.getElementById("max-price").value = "45000";
    document.getElementById("min-value").textContent = "₹4200";
    document.getElementById("max-value").textContent = "₹45000";
    updateBars();

    // Reset filter type buttons
    setActiveFilterButton("any-type-btn");
  });

  // Event listener for amenity buttons
  document.querySelectorAll(".amenity-btn").forEach((button) => {
    button.addEventListener("click", () => button.classList.toggle("selected"));
  });

  // Initial display update
  updateDisplay();
  updateBars();
});

// toggle button js

document.getElementById("toggleSwitch").addEventListener("change", function () {
  if (this.checked) {
    console.log("Toggle is ON");
  } else {
    console.log("Toggle is OFF");
  }
});
