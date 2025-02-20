function showDate() {
    let today = new Date();
    let formattedDate = today.getDate() + "/" + 
                        today.toLocaleString('default', { month: 'long' }) + "/" + 
                        today.getFullYear();
    document.getElementById("dateDisplay").innerText = formattedDate;
}

function showTime() {
    let currentTime = new Date();
    document.getElementById("timeDisplay").innerText = currentTime;
}
