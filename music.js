const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");
const currentTimeDisplay = document.getElementById("currentTime");
const durationTimeDisplay = document.getElementById("durationTime");
const volumeIcon = document.getElementById("volumeIcon");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;
    }
});

audioPlayer.addEventListener("timeupdate", () => {
    if (audioPlayer.duration) {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    }
});

progressBar.addEventListener("input", () => {
    if (audioPlayer.duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    }
});

audioPlayer.addEventListener("loadedmetadata", () => {
    durationTimeDisplay.textContent = formatTime(audioPlayer.duration);
});

volumeControl.addEventListener("input", () => {
    audioPlayer.volume = volumeControl.value / 100;
    volumeIcon.className = audioPlayer.volume === 0 ? "fas fa-volume-mute" : "fas fa-volume-up";
});

audioPlayer.addEventListener("ended", () => {
    playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;
});


const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
