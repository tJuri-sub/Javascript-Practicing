function formRegistration() {
  formValidation();
}

function errorHandlingText(element, text) {
  element.innerHTML = text;
  element.style.color = "red";
}

function formValidation() {
  let firstname = document.getElementById("firstName").value.trim();
  let lastname = document.getElementById("lastName").value.trim();
  let username = document.getElementById("userName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("pass").value;
  let confirm_password = document.getElementById("cPass").value;

  let fname_error = document.getElementById("fnameError");
  let lname_error = document.getElementById("lnameError");
  let user_error = document.getElementById("usernameError");
  let email_error = document.getElementById("emailError");
  let pass_error = document.getElementById("passError");
  let cpass_error = document.getElementById("cpassError");

  fname_error.innerHTML = "";
  lname_error.innerHTML = "";
  user_error.innerHTML = "";
  email_error.innerHTML = "";
  pass_error.innerHTML = "";
  cpass_error.innerHTML = "";

  let isValid = true;

  const onlyStringRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
  const usernameRegex = /^[A-Za-z0-9_]+$/;

  if (!firstname) {
    errorHandlingText(fname_error, "First name is required.");
    isValid = false;
  } else if (!onlyStringRegex.test(firstname)) {
    errorHandlingText(fname_error, "Please use only letters (A-Z or a-z).");
    isValid = false;
  } else if (firstname.length < 2) {
    errorHandlingText(
      fname_error,
      "First name must be at least 2 characters long."
    );
    isValid = false;
  }

  if (!lastname) {
    errorHandlingText(lname_error, "Last name is required.");
    isValid = false;
  } else if (!onlyStringRegex.test(lastname)) {
    errorHandlingText(lname_error, "Please use only letters (A-Z or a-z).");
    isValid = false;
  }

  if (!username) {
    errorHandlingText(user_error, "Username is required.");
    isValid = false;
  } else if (!usernameRegex.test(username)) {
    errorHandlingText(
      user_error,
      "Username can only contain letters, numbers, and underscores."
    );
    isValid = false;
  } else if (username.length < 4 || username.length > 15) {
    errorHandlingText(user_error, "username must be 4-15 characters long.");
    isValid = false;
  }

  if (!email) {
    errorHandlingText(email_error, "Email is required.");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    errorHandlingText(email_error, "Please enter a valid email address.");
    isValid = false;
  }

  if (!password) {
    errorHandlingText(pass_error, "Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    errorHandlingText(
      pass_error,
      "Password must be at least 8 characters long."
    );
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    errorHandlingText(
      pass_error,
      "Password must contain at least one uppercase letter, one number, and one special character."
    );
    isValid = false;
  } else if (password === username) {
    errorHandlingText(pass_error, "Password cannot be the same as username.");
    isValid = false;
  }

  if (!confirm_password) {
    errorHandlingText(cpass_error, "Confirm password is required");
    isValid = false;
  } else if (password != confirm_password) {
    errorHandlingText(cpass_error, "Passwords do not match.");
    isValid = false;
  }

  return isValid;
}
