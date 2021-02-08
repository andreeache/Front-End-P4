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

//DOM Elements for confirmation modal
const confirmationModal = document.querySelector(".confirmation-modal");
const hideConfirmationBtn = document.querySelectorAll(".hide-confirmation");


// form elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournaments = document.getElementById("quantity");
const locations = document.querySelectorAll(".radiobutton");
const terms = document.getElementById("checkbox1");
const newsletterSignUP = document.getElementById("checkbox2");



// get the parent element for errors
const firstNameParent = firstName.parentNode;
const lastNameParent = lastName.parentNode;
const emailParent = email.parentNode;
const birthdateParent = birthdate.parentNode;
const tournamentsParent = tournaments.parentNode;
const locationsParent = locations[0].parentNode;
const termsParent = terms.parentNode;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// add the close form action
modalClose.forEach((btn) => btn.addEventListener("click", hideModal));

// add the close confirmation modala-action
hideConfirmationBtn.forEach((btn) => btn.addEventListener("click", hideModalConfirmation));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide the modal form
function hideModal() {
  modalbg.style.display = "none";
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

// submit function - validate all the fields
function validateForm(){
  //assumed that all the fields are valid, will set it to false in case any of them is not
  let isFormValid = true;

  //if condition will be applied for each field
  if (firstName.value.length < 2) {
    // set the error attribute on the parent
    // display an erro if field is invalid
    firstName.parentNode.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    //clear the error message if data is correct
    firstNameParent.removeAttribute("data-error-visible");
  }

  if (lastName.value.length < 2){
    lastNameParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    lastNameParent.removeAttribute("data-error-visible");
  } 

  if (email.value == null || email.value == "" || !ValidateEmail(email.value)) {
    // add data-error attribute to parent div of email input
    emailParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    emailParent.removeAttribute("data-error-visible");
  }

  if (birthdate.value == null || birthdate.value == "") {
    birthdateParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    birthdateParent.removeAttribute("data-error-visible");
  }

  if (tournaments.value == null || tournaments.value == "") {
    tournamentsParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    tournamentsParent.removeAttribute("data-error-visible");
  }
  // Validate location radio buttons

  //Creates hasChecked variable
  let hasChecked = false;

  // apply a function on all elements
  locations.forEach((rb) => {if (rb.checked) { hasChecked = true};})
  if (!hasChecked) {
    locationsParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    locationsParent.removeAttribute("data-error-visible");
  }

  if (!terms.checked) {
    termsParent.setAttribute("data-error-visible", true);
    isFormValid = false;
  } else {
    termsParent.removeAttribute("data-error-visible");
  }

  if (!isFormValid) {
    return false;
  }
  //display a form with confirmation message
  confirmationModal.style.display = "flex";
  //if form is validated, clear all the text fields
  firstName.value = lastName.value = email.value = birthdate.value = tournaments.value = "";
  //if form is validated uncheck all radio buttons
  locations.forEach((rb) => {rb.checked = false;});
  //uncheck the sign up checkbox
  newsletterSignUP.checked = false;
  //hide the form modal
  hideModal();
  // form is valid but return false because we manage ourselves the form display & hide
  return false;
}



// closes the cofirmation modal 
function hideModalConfirmation(){
  confirmationModal.style.display = "none";
  hideModal();
}
