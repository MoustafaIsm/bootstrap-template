// Variables
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero-section");
const portfolio = document.getElementById("portfolio-section");
const about = document.getElementById("about-section");
const contact = document.getElementById("contact-section");
const portfolioItem = document.getElementById("portfolio-item");
const aboutItem = document.getElementById("about-item");
const contactItem = document.getElementById("contact-item");

// On scroll function
window.onscroll = function () {
    adjustNavBar();
    let top = window.scrollY;
    let heroSize = getSectionSize("hero-section");
    let potfolioSize = getSectionSize("portfolio-section");
    let aboutSize = getSectionSize("about-section");
    if (top > navbarSize + heroSize + potfolioSize + aboutSize) {
        aboutItem.classList.remove("green-background");
        portfolioItem.classList.remove("green-background");
        contactItem.classList.add("green-background");
    } else {
        if (top > navbarSize + heroSize + potfolioSize) {
            portfolioItem.classList.remove("green-background");
            contactItem.classList.remove("green-background");
            aboutItem.classList.add("green-background");
        } else {
            if (top > navbarSize + heroSize) {
                contactItem.classList.remove("green-background");
                aboutItem.classList.remove("green-background");
                portfolioItem.classList.add("green-background");
            } else {
                contactItem.classList.remove("green-background");
                aboutItem.classList.remove("green-background");
                portfolioItem.classList.remove("green-background");
            }
        }
    }

}


// Function
function adjustNavBar() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        navbar.style.padding = "5px 20px";
    } else {
        navbar.style.padding = "25px 20px";
    }
}

function getSectionSize(id) {
    let element = document.getElementById(id);
    let elementHeight = element.offsetHeight;
    return elementHeight;
}