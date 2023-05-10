// Prevent nested dropdown menu from closing when clicked
document.querySelectorAll(".dropdown-menu").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// Enable nested dropdown menu toggle
document
  .querySelectorAll(".dropdown-submenu .dropdown-toggle")
  .forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parentMenu = this.closest(".dropdown-submenu");
      const submenu = parentMenu.querySelector(".dropdown-menu");
      submenu.classList.toggle("show");
    });
  });

// Collapse submenus when clicking outside
document.addEventListener("click", function (e) {
  const submenus = document.querySelectorAll(
    ".dropdown-submenu .dropdown-menu"
  );
  submenus.forEach(function (submenu) {
    if (!submenu.contains(e.target)) {
      submenu.classList.remove("show");
    }
  });
});
