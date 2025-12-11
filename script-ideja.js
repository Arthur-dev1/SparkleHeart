

const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});








// Reviews data


const reviews = [
    {
        header: "Ken Ludden",
        subheader: "Director, Margot Fonteyn Academy of Ballet",
        text: "For it is Juris work that is the light the human race needs so badly these days. His vision is inspired and talent is beyond measure."
    },
    {
        header: "Anna Smith",
        subheader: "Choreographer, Global Dance Company",
        text: "Juris’s creativity and dedication inspire everyone around him. His work brings joy and passion to the dance community."
    },
    {
        header: "Michael Brown",
        subheader: "Art Director, Dream Arts Foundation",
        text: "Working with Juris is a privilege. His vision is bold and his talent unmatched. Every project shines with his touch."
    }
];

let currentIndex = 0; 

// Elements
const reviewHeader = document.querySelector('.review-header');
const reviewSubheader = document.querySelector('.review-subheader');
const reviewText = document.querySelector('.review-text');

const btnLeftNA = document.querySelector('.switch-icon-left-na').parentElement;
const btnLeftA  = document.querySelector('.switch-icon-left-a').parentElement;
const btnRightA = document.querySelector('.switch-icon-right-a').parentElement;
const btnRightNA= document.querySelector('.switch-icon-right-na').parentElement;

// Function to update review content
function updateReview() {
    const review = reviews[currentIndex];
    reviewHeader.textContent = review.header;
    reviewSubheader.textContent = review.subheader;
    reviewText.textContent = review.text;

    // Update button visibility
    if (currentIndex === 0) {
        // At first review
        btnLeftNA.style.display = "inline-block";
        btnLeftA.style.display = "none";
        btnRightA.style.display = "inline-block";
        btnRightNA.style.display = "none";
    } else if (currentIndex === reviews.length - 1) {
        // At last review
        btnLeftNA.style.display = "none";
        btnLeftA.style.display = "inline-block";
        btnRightA.style.display = "none";
        btnRightNA.style.display = "inline-block";
    } else {
        // Middle reviews
        btnLeftNA.style.display = "none";
        btnLeftA.style.display = "inline-block";
        btnRightA.style.display = "inline-block";
        btnRightNA.style.display = "none";
    }
}

// Event listeners
btnLeftA.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateReview();
    }
});

btnRightA.addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
        currentIndex++;
        updateReview();
    }
});

// Initialize first review
updateReview();