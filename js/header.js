$('input[name="dates"]').daterangepicker({
  buttonClasses: "datepicker-btn",
  applyButtonClasses: "btn-apply",
  cancelButtonClasses: "btn-cancel",
});

function toggleModal() {
  document.getElementById("modal").classList.toggle("active");
}

function closeModal(event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").classList.remove("active");
  }
}

// Close modal if clicked outside the menu
document.addEventListener("click", function (event) {
  var isClickInside =
    document.querySelector(".navbar").contains(event.target) ||
    document.querySelector(".menu").contains(event.target);

  if (!isClickInside) {
    document.getElementById("modal").classList.remove("active");
  }
});

// Close modal on scroll
window.addEventListener("scroll", function () {
  document.getElementById("modal").classList.remove("active");
});
