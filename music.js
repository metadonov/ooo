const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");
const currentTimeDisplay = document.getElementById("currentTime");
const durationTimeDisplay = document.getElementById("durationTime");
const volumeIcon = document.getElementById("volumeIcon");

// Форматируем время в MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

// Обновляем кнопки Play/Pause
playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;
    }
});

// Обновляем прогресс-бар
audioPlayer.addEventListener("timeupdate", () => {
    if (audioPlayer.duration) {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    }
});

// Изменяем время через прогресс-бар
progressBar.addEventListener("input", () => {
    if (audioPlayer.duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    }
});

// Устанавливаем общее время трека
audioPlayer.addEventListener("loadedmetadata", () => {
    durationTimeDisplay.textContent = formatTime(audioPlayer.duration);
});

// Управляем громкостью
volumeControl.addEventListener("input", () => {
    audioPlayer.volume = volumeControl.value / 100;
    volumeIcon.className = audioPlayer.volume === 0 ? "fas fa-volume-mute" : "fas fa-volume-up";
});

// Обновляем кнопку после завершения трека
audioPlayer.addEventListener("ended", () => {
    playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;
});


// Получаем элементы
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Открытие модального окна
openModal.addEventListener('click', () => {
    modal.style.display = 'flex'; // Делаем модальное окно видимым
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
