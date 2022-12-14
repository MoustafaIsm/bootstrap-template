// Variables
const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero-section");
const portfolio = document.getElementById("portfolio-section");
const about = document.getElementById("about-section");
const contact = document.getElementById("contact-section");
const portfolioItem = document.getElementById("portfolio-item");
const aboutItem = document.getElementById("about-item");
const contactItem = document.getElementById("contact-item");
// Contact variables
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneNumberError = document.getElementById("phone-number-error");
const messageError = document.getElementById("message-error");

// Contact input validations
sendBtn.addEventListener("click", validateInputs);
// Sending message
let validInputs = true;
const sendingResult = document.getElementById("sending-result");

function validateInputs() {
    if (fullName.value != "") {
        fullName.style.border = "none";
        fullName.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validateName(fullName.value);
    } else {
        fullName.style.border = "2px solid red";
        validInputs = false;
    }
    if (email.value != "") {
        email.style.border = "none";
        email.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validateEmail(email.value);
    } else {
        email.style.border = "2px solid red";
        validInputs = false;
    }
    if (phoneNumber.value != "") {
        phoneNumber.style.border = "none";
        phoneNumber.style.borderBottom = "1px solid rgb(159, 159, 159)"
        //validatePhoneNumber(phoneNumber.value);
    } else {
        phoneNumber.style.border = "2px solid red";
        validInputs = false;
    }
    if (message.value != "") {
        message.style.border = "none";
        message.style.borderBottom = "1px solid rgb(159, 159, 159)"
        validateMessage(message.value);
    } else {
        message.style.border = "2px solid red";
        validInputs = false;
    }
    if (validInputs) {
        sendMessage();
    }
}
// Sending message
function sendMessage() {
    let formData = new FormData();
    formData.append("fullName", fullName.value);
    formData.append("email", email.value);
    formData.append("phoneNumber", phoneNumber.value);
    formData.append("message", message.value);
    fetch("http://localhost/SEF/bootstrap-template-backend/add_message.php", {
        method: 'post',
        body: formData
    });
    sendingResult.textContent = "Sent Successfully";
    sendingResult.style.color = "green";
}

// Validation functions
function validateName(name) {
    if (name.length < 5) {
        validInputs = false;
        nameError.style.backgroundColor = "red";
        nameError.textContent = "Name should be minimum 5 characters";
    } else {
        nameError.style.backgroundColor = "white";
        nameError.textContent = "";
    }
}

function validateEmail(email) {
    const pattern = "[a-zA-Z0-9+_.-]{3,}@[a-zA-Z.]{5,}";
    if (!email.match(pattern)) {
        validInputs = false;
        emailError.style.backgroundColor = "red";
        emailError.textContent = "Email should have a minimum of 3 characters before the @ and 5 characters after the @";
    } else {
        emailError.style.backgroundColor = "white";
        emailError.textContent = "";
    }
}

function validatePhoneNumber(phoneNumber) {
    const pattern = /[+][9][6][1][3]\d{6}\Z|[+][9][6][1]\d{8}\Z/;
    if (!phoneNumber.match(pattern)) {
        validInputs = false;
        phoneNumberError.style.backgroundColor = "red";
        phoneNumberError.textContent = "Phone Number should start with +961 and followed by either 6 digits after a 3 (for 03) or. followed by 8 digits";
    } else {
        phoneNumberError.style.backgroundColor = "white";
        phoneNumberError.textContent = "";
    }
}

function validateMessage(message) {
    if (message.length < 100) {
        validInputs = false;
        messageError.style.backgroundColor = "red";
        messageError.textContent = "Message should be minimum 100 characters";
    } else {
        messageError.style.backgroundColor = "white";
        messageError.textContent = "";
    }
}

// On scroll function
window.onscroll = function () {
    adjustNavBar();
    let top = window.scrollY;
    let heroSize = getSectionSize("hero-section");
    let potfolioSize = getSectionSize("portfolio-section");
    let aboutSize = getSectionSize("about-section");
    if (top > heroSize + potfolioSize + aboutSize) {
        aboutItem.classList.remove("green-background");
        portfolioItem.classList.remove("green-background");
        contactItem.classList.add("green-background");
    } else {
        if (top > heroSize + potfolioSize) {
            portfolioItem.classList.remove("green-background");
            contactItem.classList.remove("green-background");
            aboutItem.classList.add("green-background");
        } else {
            if (top > heroSize) {
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


// Functions
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