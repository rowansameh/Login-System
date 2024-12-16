"use strict";
// ~Inputs
let nameInput = document.querySelector("#signupName");
let emailInput = document.querySelector("#signupEmail");
let passwordInput = document.querySelector("#signupPassword");
// ~regestiration button
let signupBtn = document.querySelector(".btn-signUp");
// ~errors
let nameError = document.querySelector(".nameError");
// let emailError = document.querySelector(".emailError");
// let passwordError = document.querySelector(".passwordError");
// ~array to store all users data
let usersInfo = JSON.parse(localStorage.getItem("newUser")) || [];

// ~create new account for the user
function newAccount(name,email,password) {
    return {
        name: name.value,
        email: email.value,
        password: password.value,
    };
}

// ~save users info in local storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// ~regestiration button
// signupBtn.addEventListener('click', function signUp() {
//     if (isExisted == false) {
//         // push ne account in the users info list
//         usersInfo.push(newAccount(nameInput,emailInput,passwordInput));
//         saveToLocalStorage("newUser", usersInfo);
//         console.log(usersInfo);
//         //diable the button after signing up
//         signupBtn.classList.add("disabled");

//         clear(nameInput,emailInput,passwordInput);
//     }
//     else {
//         Swal.fire({
//             title: "OOps!!😑",
//             text: "You are already registered",
//             imageUrl: "../images/invalidInputsSignup.jpg",
//             imageWidth: 300,
//             imageHeight: 300,
//             imageAlt: "Custom image"
//         });
//     }
// })
signupBtn.addEventListener('click', function signUp() {
    if (isExisted()) {
        // Show error if user is already registered
        Swal.fire({
            title: "Oops!!😑",
            text: "You are already registered",
            imageUrl: "../images/invalidInputsSignup.jpg",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Custom image"
        });
        return;
    }

    // ~Push new account in the users info list and save to localStorage
    usersInfo.push(newAccount(nameInput, emailInput, passwordInput));
    saveToLocalStorage("newUser", usersInfo);
    console.log(usersInfo);

    // Disable the button after signing up
    signupBtn.classList.add("disabled");

    // Clear inputs after signup
    clear(nameInput, emailInput, passwordInput);
});

// ~clear inputs
// function clear(name,email,password) {
// name.value = "";
// email.value = "";
// password.value = "";

// // to remove the is valid style
// name.classList.remove('is-valid', 'is-invalid');
// email.classList.remove('is-valid', 'is-invalid');
// password.classList.remove('is-valid', 'is-invalid');
// }

// ~check if this email is already registered or not
//!to be edited
function isExisted() {
    return usersInfo.some(user => user.email === emailInput.value);
}

// ~inputs validation
// let validationFlags =  {
//     isNameValid : false,
//     isEmailValid : false,
//     isPasswordValid : false
// }

function validateInputs(inputElement, regex, errorElement, flag) {
    const isValid = regex.test(inputElement.value);

    inputElement.classList.toggle("is-valid", isValid);
    inputElement.classList.toggle("is-invalid", !isValid);
    errorElement.classList.toggle("d-none", isValid);
    inputElement.classList.toggle("d-block", !isValid);

        if(isValid) {
        validationFlags[flag] = true;
    }
    else {
        validationFlags[flag] = false;
    }

    checkInputsValidation(); 
}

function checkInputsValidation() {
    // Check if all flags are true
    if (validationFlags.isNameValid && validationFlags.isEmailValid && validationFlags.isPasswordValid) {
        signupBtn.classList.remove("disabled");  
    } else {
        signupBtn.classList.add("disabled");  
    }
}

nameInput.addEventListener("input", function() {
    validateInputs(nameInput, /^[A-Z][A-Za-z0-9 ]{2,24}$/, nameError, "isNameValid");
});
emailInput.addEventListener("input", function() {
    validateInputs(emailInput, regexEmail, emailError, "isEmailValid");
});
passwordInput.addEventListener("input", function() {
    validateInputs(passwordInput, regexPass, passwordError, "isPasswordValid");
});