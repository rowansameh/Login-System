"use strict";

// ~Inputs
let emailInput = document.querySelector("#signinEmail");
let passwordInput = document.querySelector("#signinPassword");

// ~Go to signup button
let signUpPage = document.querySelector(".toSignup");

// ~Login button
let loginBtn = document.querySelector(".loginBtn");

// ~Errors
// let emailError = document.querySelector(".emailError");
// let passwordError = document.querySelector(".passwordError");

// ~Go to the sign up page
signUpPage.addEventListener('click', function toSignupPage() {
    window.open("pages/signUp.html", "_self");
});

// ~Login button function
loginBtn.addEventListener('click', function login() {
    let email = emailInput.value;
    let password = passwordInput.value;

    if (isUserValid(email, password)) {
        window.open("pages/home.html", "_self");  
    } else {
        Swal.fire({
            title: "Oops!!😑",
            text: "Wrong email or password, please try again",
            imageUrl: "./images/invalidInputsLogin.jpg",
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: "Custom image"
        });
    }
});

// ~Check if the user exists and the password is correct
function isUserValid(email, password) {
    let usersInfo = JSON.parse(localStorage.getItem("newUser")) || [];
    
    for (let i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].email === email && usersInfo[i].password === password) {
            localStorage.setItem("userName", usersInfo[i].name);
            return true;  // User is valid
        }
    }
    return false;  // User not found or password doesn't match
}

// ~Validation function for email and password (optional)
function isValid(input, regex) {
    return regex.test(input.value);
}

// ~Regex patterns (you can reuse these from your signup form)
// let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
// let regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

// ~Input field validation for email and password
emailInput.addEventListener("input", function () {
    validateInputs(emailInput, regexEmail, emailError);
});

passwordInput.addEventListener("input", function () {
    validateInputs(passwordInput, regexPass, passwordError);
});

// ~Validation feedback for input fields
function validateInputs(inputElement, regex, errorElement) {
    const isValidInput = regex.test(inputElement.value);
    inputElement.classList.toggle("is-valid", isValidInput);
    inputElement.classList.toggle("is-invalid", !isValidInput);
    errorElement.classList.toggle("d-none", isValidInput);
    errorElement.classList.toggle("d-block", !isValidInput);

    if(isValid) {
        validationFlags[flag] = true;
    }
    else {
        validationFlags[flag] = false;
    }

    checkInputsValidation()
}

function checkInputsValidation() {
    // Check if all flags are true
    if (validationFlags.isEmailValid && validationFlags.isPasswordValid) {
        loginBtn.classList.remove("disabled");  
    } else {
        loginBtn.classList.add("disabled");  
    }
}
