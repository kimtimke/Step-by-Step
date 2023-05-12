// Show submenu on hover for the "Walkita" dropdown item
const walkitaDropdown = document.querySelector(".walkita");
const walkitaDropdownMenu = walkitaDropdown.nextElementSibling;
let isWalkitaMenuOpen = false;

walkitaDropdown.addEventListener("mouseenter", function () {
  walkitaDropdownMenu.classList.add("show");
  isWalkitaMenuOpen = true;
});

walkitaDropdownMenu.addEventListener("mouseleave", function () {
  walkitaDropdownMenu.classList.remove("show");
  isWalkitaMenuOpen = false;
});

walkitaDropdown.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = walkitaDropdown.getAttribute("href");
});

// Close other dropdowns when a dropdown item is clicked
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const dropdownMenu = item.closest(".dropdown-menu");
    if (dropdownMenu) {
      e.stopPropagation();
    }
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach(function (menu) {
      if (menu !== dropdownMenu) {
        menu.classList.remove("show");
      }
    });
  });
});

// Show submenu when clicking on a dropdown item with a submenu
const dropdownItemsWithSubmenu = document.querySelectorAll(
  ".dropdown-item.dropdown-toggle"
);
dropdownItemsWithSubmenu.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const submenu = item.nextElementSibling;
    if (submenu) {
      submenu.classList.toggle("show");
      item.classList.toggle("active");

      // Add code to remove active class from other dropdown items
      const dropdownItems = document.querySelectorAll(
        ".dropdown-item.dropdown-toggle"
      );
      dropdownItems.forEach(function (dropdownItem) {
        if (dropdownItem !== item) {
          dropdownItem.classList.remove("active");
        }
      });
    }
  });
});

// Close submenu when mouse leaves the parent item
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
dropdownMenus.forEach(function (menu) {
  menu.addEventListener("mouseleave", function () {
    menu.classList.remove("show");
    const parentItem = menu.parentElement.querySelector(
      ".dropdown-item.dropdown-toggle"
    );
    if (parentItem) {
      parentItem.classList.remove("active");
    }
  });
});

// Close submenu when clicking outside
document.addEventListener("click", function (event) {
  const dropdownItems = document.querySelectorAll(
    ".dropdown-item.dropdown-toggle"
  );
  dropdownItems.forEach(function (item) {
    const submenu = item.nextElementSibling;
    if (!item.contains(event.target) && !submenu.contains(event.target)) {
      submenu.classList.remove("show");
      item.classList.remove("active");
    }
  });
});
