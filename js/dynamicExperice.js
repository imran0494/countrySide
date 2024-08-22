document.addEventListener("DOMContentLoaded", function () {
  const stayButton = document.getElementById("stayButton");
  const experienceButton = document.getElementById("experienceButton");
  const stayDiv = document.getElementById("stayButtonDisplay");
  const experienceDiv = document.getElementById("experienceButtonDisplay");

  // Show stayDiv by default
  stayDiv.style.display = "block";

  stayButton.addEventListener("click", function () {
    stayDiv.style.display = "block";
    experienceDiv.style.display = "none";
  });

  experienceButton.addEventListener("click", function () {
    stayDiv.style.display = "none";
    experienceDiv.style.display = "block";
  });
});
