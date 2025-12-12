const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
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
