const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        // Stop currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get sound name from data-sound attribute
        const soundName = button.getAttribute("data-sound");

        // Create and play new audio
        currentAudio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio.play();
    });
});

// Stop button functionality
stopButton.addEventListener("click", function () {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});