function formRegistration() {
  formValidation();
}

function formValidation() {
  let firstname = document.getElementById("firstName").value;
  let lastname = document.getElementById("lastName").value;
  let username = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirm_password = document.getElementById("cPass").value;

  let fname_error = document.getElementById("fnameError");
  let lname_error = document.getElementById("lnameError");
  let user_error = document.getElementById("usernameError");
  let email_error = document.getElementById("emailError");
  let pass_error = document.getElementById("passError");
  let cpass_error = document.getElementById("cpassError");

  firstname = firstname.trim();
  lastname = lastname.trim();
  username = username.trim();
  email = email.trim();

  const onlyStringRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
  const usernameRegex = /^[A-Za-z0-9_]+$/;

  if (!firstname) {
    console.log("First name is required.");
    errorHandlingText(fname_error, "First name is required.");
  } else if (!onlyStringRegex.test(firstname)) {
    console.log("Please use only letters (A-Z or a-z).");
    errorHandlingText(fname_error, "Please use only letters (A-Z or a-z).");
  } else if (firstname.length < 2) {
    console.log("First name must be at least 2 characters long.");
    errorHandlingText(
      fname_error,
      "First name must be at least 2 characters long."
    );
  }

  if (!lastname) {
    console.log("Last name is required.");
    errorHandlingText(lname_error, "Last name is required.");
  } else if (!onlyStringRegex.test(lastname)) {
    console.log("Please use only letters (A-Z or a-z).");
    errorHandlingText(lname_error, "Please use only letters (A-Z or a-z).");
  }

  if (!username) {
    console.log("Username is required.");
    errorHandlingText(user_error, "Username is required.");
  } else if (!usernameRegex.test(username)) {
    console.log("Username can only contain letters, numbers, and underscores.");
    errorHandlingText(
      user_error,
      "Username can only contain letters, numbers, and underscores."
    );
  } else if (username.length < 4 || username.length > 15) {
    console.log("username must be 4-15 characters long.");
    errorHandlingText(user_error, "username must be 4-15 characters long.");
  } else if (password === username) {
    console.log("Password cannot be the same as username.");
    errorHandlingText(user_error, "Password cannot be the same as username.");
  }

  if (!email) {
    console.log("Email is required.");
    errorHandlingText(email_error, "Email is required.");
  } else if (!emailRegex.test(email)) {
    console.log("Please enter a valid email address.");
    errorHandlingText(email_error, "Please enter a valid email address.");
  }

  if (!password) {
    console.log("Password is required");
    errorHandlingText(pass_error, "Password is required.");
  } else if (password.length < 8) {
    console.log("Password must be at least 8 characters long.");

    errorHandlingText(
      pass_error,
      "Password must be at least 8 characters long."
    );
  } else if (!passwordRegex.test(password)) {
    console.log(
      "Password must contain at least one uppercase letter, one number, and one special character."
    );
    errorHandlingText(
      pass_error,
      "Password must contain at least one uppercase letter, one number, and one special character."
    );
  }

  if (!confirm_password) {
    console.log("Confirm password is required");
    errorHandlingText(cpass_error, "Confirm password is required");
  } else if (password != confirm_password) {
    console.log("Passwords do not match.");
    errorHandlingText(cpass_error, "Passwords do not match.");
  }

  console.log("-------------------");
}

function errorHandlingText(element, text) {
  element.innerHTML = text;
}
