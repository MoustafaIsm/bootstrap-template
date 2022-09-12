// Variables
const navbar = document.querySelector("#navbar");

// On scroll function
window.onscroll = function () {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        navbar.style.padding = "5px 20px";
    } else {
        navbar.style.padding = "25px 20px";
    }
}
