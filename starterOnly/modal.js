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
const locations = document.querySelectorAll(".checkbox-input");
const terms = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// add the close form action
modalClose.forEach((btn) => btn.addEventListener("click", hideModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// email validation - copy pasted from w3resource.com
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}

// submit function
function validateForm(){
  if (firstName.value == null || firstName.value == "" || lastName.value == null || lastName.value == "") {
    return false;
  }

  if (email.value == null || email.value == "" || !ValidateEmail(email.value)) {
    return false;
  }

  if (birthdate.value == null || birthdate.value == "") {
    return false;
  }

  if (tournaments.value == null || tournaments.value == "") {
    return false;
  }

  if (!terms.checked) {
    return false;
  }

  return true;
}

// hide the modal form
function hideModal() {
  modalbg.style.display = "none";
}


