
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



document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                
                if (entry.target.classList.contains('stagger')) {
                    Array.from(entry.target.children).forEach((child, i) => {
                        child.style.transitionDelay = `${i * 0.15}s`;
                    });
                }

                obs.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
});
