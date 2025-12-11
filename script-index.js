const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});
