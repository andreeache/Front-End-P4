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


// get the parent element for errors
const firstNameParent = firstName.parentNode;
const lastNameParent = lastName.parentNode;
const emailParent = email.parentNode;
const birthdateParent = birthdate.parentNode;
const tournamentsParent = tournaments.parentNode;
const locationsParent = locations.parentNode;
const termsParent = terms.parentNode;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// add the close form action
modalClose.forEach((btn) => btn.addEventListener("click", hideModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// email validation -  from w3resource.com
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
  if (firstName.value.length < 2) {
    firstNameParent.setAttribute("data-error-visible", true);
    return false;
  } else {
    firstNameParent.removeAttribute("data-error-visible");
  }

  if (lastName.value.length < 2){
    lastNameParent.setAttribute("data-error-visible", true);
    return false;
  }

  if (email.value == null || email.value == "" || !ValidateEmail(email.value)) {
    // add data-error attribute to parent div of email input
    emailParent.setAttribute("data-error-visible", true);
    return false;
  }

  if (birthdate.value == null || birthdate.value == "") {
    birthdateParent.setAttribute("data-error-visible", true);
    return false;
  }

  if (tournaments.value == null || tournaments.value == "") {
    tournamentsParent.setAttribute("data-error-visible", true);
    return false;
  }

  if (!terms.checked) {
    termsParent.setAttribute("data-error-visible", true);
    return false;
  }

  return true;
}

// hide the modal form
function hideModal() {
  modalbg.style.display = "none";
}


