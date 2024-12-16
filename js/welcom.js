"use strict";

let welcome = document.querySelector("#hello");
let logoutBtn = document.querySelector("#logout");

function getUserName(){
    let username = localStorage.getItem("userName");
    welcome.innerHTML = `hello ${username}`;


}

getUserName();
// if (localStorage.getItem("userName") != null) {
//     let username = localStorage.getItem("userName");
//     welcome.innerHTML = `hello ${username}`;
// }

logoutBtn.addEventListener('click', logout);

function logout() {
    localStorage.removeItem("userName");
    window.open("../index.html", "_self"); 
}