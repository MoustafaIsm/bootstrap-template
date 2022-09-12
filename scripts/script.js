// Variables
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero-section");
const portfolio = document.getElementById("portfolio-section");
const about = document.getElementById("about-section");
const contact = document.getElementById("contact-section");

// On scroll function
window.onscroll = function () {
    adjustNavBar();
    let top = window.scrollY;
    let navbarSize = getSectionSize("navbar");
    let heroSize = getSectionSize("hero-section");
    let potfolioSize = getSectionSize("portfolio-section");
    let aboutSize = getSectionSize("contact-section");
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
    elementHeight += parseInt(window.getComputedStyle(element).getPropertyValue("margin-top"));
    elementHeight += parseInt(window.getComputedStyle(element).getPropertyValue("margin-bottom"));
    return elementHeight;
}