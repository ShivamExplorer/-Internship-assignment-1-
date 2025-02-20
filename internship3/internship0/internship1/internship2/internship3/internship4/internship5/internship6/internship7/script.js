document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name validation
    let name = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        name.classList.add("invalid");
        nameError.textContent = "This field is required";
        isValid = false;
    } else {
        name.classList.remove("invalid");
        nameError.textContent = "";
    }

    // Email validation
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        email.classList.add("invalid");
        emailError.textContent = "A valid email address is required";
        isValid = false;
    } else if (!email.value.match(emailPattern)) {
        email.classList.add("invalid");
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        email.classList.remove("invalid");
        emailError.textContent = "";
    }

    // Website validation
    let website = document.getElementById("website");
    let websiteError = document.getElementById("websiteError");
    let websitePattern = /^(https?:\/\/)?([\w\-]+\.)+[\w-]{2,4}\/?$/;
    if (website.value.trim() === "") {
        website.classList.add("invalid");
        websiteError.textContent = "A valid URL is required";
        isValid = false;
    } else if (!website.value.match(websitePattern)) {
        website.classList.add("invalid");
        websiteError.textContent = "Invalid URL format";
        isValid = false;
    } else {
        website.classList.remove("invalid");
        websiteError.textContent = "";
    }

    // Message validation
    let message = document.getElementById("message");
    let messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
        message.classList.add("invalid");
        messageError.textContent = "This field is required";
        isValid = false;
    } else {
        message.classList.remove("invalid");
        messageError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
