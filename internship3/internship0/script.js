function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    
    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    let reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    
    document.getElementById("result").innerText = "Reversed Number: " + reversed;
}
