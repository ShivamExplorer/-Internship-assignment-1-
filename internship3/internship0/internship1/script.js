function validateForm() {
    let isValid = true;

    // Get input values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let country = document.getElementById("country").value;
    let declaration = document.getElementById("declaration").checked;

    // Reset all error messages
    document.querySelectorAll(".error").forEach(e => e.style.display = "none");

    // Validations
    if (firstName === "") {
        document.getElementById("firstNameError").style.display = "inline";
        isValid = false;
    }
    if (lastName === "") {
        document.getElementById("lastNameError").style.display = "inline";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").style.display = "inline";
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "inline";
        isValid = false;
    }
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").style.display = "inline";
        isValid = false;
    }
    if (age === "" || age < 18) {
        document.getElementById("ageError").style.display = "inline";
        isValid = false;
    }
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById("phoneError").style.display = "inline";
        isValid = false;
    }
    if (address === "") {
        document.getElementById("addressError").style.display = "inline";
        isValid = false;
    }
    if (state === "") {
        document.getElementById("stateError").style.display = "inline";
        isValid = false;
    }
    if (country === "") {
        alert("Please select a country");
        isValid = false;
    }
    if (!declaration) {
        alert("You must agree to the declaration");
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
}
