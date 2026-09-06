
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-btn");
    const nav = document.getElementById("nav-link");
    const navItems = document.querySelectorAll("#nav-link a");

    // Open menu
    menuToggle.addEventListener("click", function () {
        nav.classList.add("active");
    });

    // Close menu
    closeBtn.addEventListener("click", function () {
        nav.classList.remove("active");
    });

    // Close menu when clicking a navigation link
    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });

});
