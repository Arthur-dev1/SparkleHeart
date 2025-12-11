
const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});


const dropdowns = document.querySelectorAll('.dropdown');
const results = document.querySelector('.search-results-area');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', () => {
        results.style.display = "block"; 
    });
});
