function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// match the close class button
const modalClose = document.querySelectorAll(".close")
const formData = document.querySelectorAll(".formData");

// form elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournaments = document.getElementById("quantity");
const locations = document.querySelectorAll(".checkbox-input")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// add the close form action
modalClose.forEach((btn) => btn.addEventListener("click", hideModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide the modal form
function hideModal() {
  modalbg.style.display = "none";
}


