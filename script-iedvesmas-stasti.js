
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


const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.gallery-item');
const closebtn = document.querySelector('.close-icon');


closebtn.addEventListener('click', () => {
    modal.style.display = "none";
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 
            modal.style.display === "flex" ? "none" : "flex";
    });
});


const additional_cards = [
  document.querySelector('#i13'),
  document.querySelector('#i14'),
  document.querySelector('#i15'),
  document.querySelector('#i16'),
  document.querySelector('#i17')
];

const view_more_btn = document.querySelector('.view-more-btn');

view_more_btn.addEventListener('click', () => {
 
  const isVisible = additional_cards[0].style.display === "block";

  
  additional_cards.forEach(card => {
    card.style.display = isVisible ? "none" : "block";
  });

  
  view_more_btn.textContent = isVisible ? "Skatīt vairāk" : "Skatīt mazāk";
});



document.addEventListener("DOMContentLoaded", () => {
    const pageContent = document.querySelector(".page-content");

    
    setTimeout(() => {
        pageContent.classList.add("reveal");
    }, 50);
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