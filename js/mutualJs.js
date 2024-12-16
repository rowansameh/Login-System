"use strict";
// ~Regular Expressions
const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

// ~Errors
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");
// ~flags
let validationFlags =  {
    isNameValid : false,
    isEmailValid : false,
    isPasswordValid : false
}

// ~Clear inputs
function clear(name,email,password) {
    name.value = "";
    email.value = "";
    password.value = "";
    
    // to remove the is valid style
    name.classList.remove('is-valid', 'is-invalid');
    email.classList.remove('is-valid', 'is-invalid');
    password.classList.remove('is-valid', 'is-invalid');
    }

// ----------------------------
let userName = document.querySelector("#username");

