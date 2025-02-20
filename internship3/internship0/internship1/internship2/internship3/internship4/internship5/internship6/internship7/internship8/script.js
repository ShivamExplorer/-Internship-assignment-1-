document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let address = document.getElementById("address").value;

    if (name && email && contact && address) {
        let userTableBody = document.getElementById("userTableBody");
        let newRow = userTableBody.insertRow();
        
        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = contact;
        newRow.insertCell(3).textContent = address;
        
        document.getElementById("userForm").reset();
        showUsers();
    } else {
        alert("Please fill all the fields.");
    }
});

function showRegistration() {
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("usersList").style.display = "none";
}

function showUsers() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("usersList").style.display = "block";
}
