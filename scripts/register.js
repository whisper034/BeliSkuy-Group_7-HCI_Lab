const registerHandler = () => {
  // define all values first
  const getSelectedGenderValue = document.querySelector("input[name='gender']:checked") == null ? null : document.querySelector("input[name='gender']:checked").value;
  const getFirstNameValue = document.getElementById("first_name").value;
  
  const getDateOfBirthValue = document.getElementById("dob").value;
  var today = new Date();
  var birthDate = new Date(getDateOfBirthValue);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const getUsernameValue = document.getElementById("username").value;
  const getEmailValue = document.getElementById("email").value;
  const getConfirmEmailValue = document.getElementById("confirm_email").value;
  const getPasswordValue = document.getElementById("password").value;
  const getConfirmPasswordValue = document.getElementById("confirm_password").value;
  const getCheckedTermsAndConditionsValue = document.querySelector("#terms_and_conditions");
  
  // use if else so the page will not have many alerts going on, i'm tired of clicking
  // set canBeSubmitted to true first, and if it goes in with the alerts, set it to false
  let canBeSubmitted = true;
  
  if (!getSelectedGenderValue) {
    canBeSubmitted = false;
    alert("Please select your gender.");
  }
  else if (!getFirstNameValue) { // last name tidak wajib diisi
    canBeSubmitted = false;
    alert("Please input your first name.");
  }
  else if (!getDateOfBirthValue) {
    canBeSubmitted = false;
    alert("Please select your birth date.");
  }
  else if (getDateOfBirthValue && age < 0) {
    canBeSubmitted = false;
    alert("That's not even possible, right? Your age is " + age + " you know?");
  }
  else if (!getUsernameValue) {
    canBeSubmitted = false;
    alert("Please input your username.");
  }
  else if (!getEmailValue) {
    canBeSubmitted = false;
    alert("Please input your email.");
  }
  else if (!getConfirmEmailValue) {
    canBeSubmitted = false;
    alert("Please confirm your email.");
  }
  else if (getEmailValue !== getConfirmEmailValue) {
    canBeSubmitted = false;
    alert("Your email doesn't match. Please try again.");
  }
  else if (!getPasswordValue) {
    canBeSubmitted = false;
    alert("Please make a password.");
  }
  else if (!getConfirmPasswordValue) {
    canBeSubmitted = false;
    alert("Please confirm your password.");
  }
  else if (getPasswordValue !== getConfirmPasswordValue) {
    canBeSubmitted = false;
    alert("Your password doesn't match. Please try again.");
  }
  else if (!getCheckedTermsAndConditionsValue.checked) {
    canBeSubmitted = false;
    alert("You have to agree with all of our terms and conditions first.");
  }

  // this means that the form has passed all validations
  if (canBeSubmitted) {
    location.replace("../pages/thank-you.html");
  }
}
