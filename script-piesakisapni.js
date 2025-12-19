
const burger = document.querySelector('.header-burger');
const burgerImg = burger.querySelector('img');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    const isOpen = mobileMenu.classList.contains('active');
    burgerImg.src = isOpen
        ? "assets/close-icon-2.png"
        : "assets/Hamburger-icon.png";
});



document.addEventListener("DOMContentLoaded", () => {
    const pageContent = document.querySelector(".page-content");

    
    setTimeout(() => {
        pageContent.classList.add("reveal");
    }, 50);
});




const form = document.querySelector('.contact-form-container');

const form_note = document.querySelector('.form-note');
const form_consent = document.querySelector('.form-consent');
const form_checkbox = document.querySelector('.form-checkbox');
const success_message = document.querySelector('.success-message');
const submit_button = document.querySelector('.submit-button');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Preventing page reload

    form_note.style.display = "none";
    form_consent.style.display = "none";
    form_checkbox.style.display = "none";
    success_message.style.display = "flex";
    submit_button.style.display = "none"

});






document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-consent");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    const hideBanner = () => {
        cookieBanner.classList.remove("show");
        cookieBanner.classList.add("hide");

        
        setTimeout(() => {
            cookieBanner.style.display = "none";
        }, 500); 
    };

    // Checking previous choice
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (cookiesAccepted === "true" || cookiesAccepted === "false") {
        cookieBanner.style.display = "none";
    } else {
        cookieBanner.style.display = "flex";
        // Animate in after delay 
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 50);
    }

    // Accept cookies
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        hideBanner();
    });

    // Decline cookies
    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        hideBanner();
    });
});





function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');

    const windowHeight = window.innerHeight;
    const revealPoint = 150; 

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}

// Run on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);