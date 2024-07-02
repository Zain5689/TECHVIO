// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links ul");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};

///////////////////////////////
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all the filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Get all the boxes containing the images
  const boxes = document.querySelectorAll(".box");

  // Add click event listener to each filter button
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove the "active" class from all buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add the "active" class to the clicked button
      button.classList.add("active");

      // Get the filter value from the data-filter attribute of the clicked button
      const filter = button.getAttribute("data-filter");

      // Loop through all the boxes and show/hide them based on the filter value
      boxes.forEach(function (box) {
        if (filter === "all" || box.classList.contains(filter)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
