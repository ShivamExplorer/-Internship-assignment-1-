document.addEventListener("DOMContentLoaded", function () {
    let train = document.getElementById("train");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");

    let position = 0;
    let interval = null;

    function startTrain() {
        clearInterval(interval); // Stop any existing animation
        interval = setInterval(() => {
            if (position < window.innerWidth) {
                position += 5; // Adjust speed
                train.style.left = position + "px";
            } else {
                position = -200; // Reset position when reaching the end
            }
        }, 50);
    }

    function stopTrain() {
        clearInterval(interval);
    }

    startBtn.addEventListener("click", startTrain);
    stopBtn.addEventListener("click", stopTrain);
});
