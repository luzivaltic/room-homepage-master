

const desktopImages = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
]

const mobileImages = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg"
]

const headings = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]

const decriptions = [
    `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.
    `,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.
    `,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.
    `
]

const slideButtons = document.querySelectorAll(".slide-button button");

const headingContainer = document.querySelector(".slide-images .text-container .heading");
const decriptionContainer = document.querySelector(".slide-images .text-container .decription");
const imageContainer = document.querySelector(".slide-images .image-container img");
const mobileImage = document.querySelector(".slide-images .image-container .mobile");

var curSlide = 0;

function updatePage() {

    headingContainer.textContent = headings[curSlide];
    decriptionContainer.textContent = decriptions[curSlide];
    imageContainer.src = desktopImages[curSlide];
    mobileImage.src = mobileImages[curSlide];

}

slideButtons[0].addEventListener("click" , () =>{
    curSlide--;
    if( curSlide < 0 ) curSlide = 2;

    updatePage();
})

slideButtons[1].addEventListener("click" , () =>{
    curSlide++;
    if( curSlide > 2 ) curSlide = 0;

    updatePage();
})

const navIcons = [
    "./images/icon-hamburger.svg", 
    "./images/icon-close.svg",
]

const hamburger = document.querySelector(".nav-mobile-icon img");
const navList = document.querySelector(".nav-list");
const curImageContainer = document.querySelector(".image-container");

let curNavIcon = 0;

hamburger.addEventListener("click" , () =>{
    curNavIcon = 1 - curNavIcon;
    hamburger.src = navIcons[curNavIcon];
    navList.classList.toggle("active");

    if( curNavIcon )
        curImageContainer.style.filter = "brightness(50%)";
    else 
        curImageContainer.style.filter = "brightness(100%)";

})
