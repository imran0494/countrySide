document.addEventListener("DOMContentLoaded", function () {
  const iconList = document.getElementById("icon-list");
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");
  const scrollAmount = 600; // Adjust the scroll amount as needed

  // Scroll functionality for left and right buttons
  if (iconList && leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      console.log("Left button clicked");
      iconList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      console.log("Right button clicked");
      iconList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  } else {
    console.error("Element not found: Ensure the IDs are correct.");
  }

  // Functionality for clicking on icons
  document.querySelectorAll(".icon-item").forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'active' class from all items
      document
        .querySelectorAll(".icon-item")
        .forEach((el) => el.classList.remove("active"));
      // Add 'active' class to the clicked item
      this.classList.add("active");
    });
  });
});
