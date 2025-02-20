function sortString() {
    let input = document.getElementById("inputString").value;
    let sortedString = input.split('').sort().join('');
    document.getElementById("result").innerText = "Sorted String: " + sortedString;
}
