document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    const playButton = document.getElementById('play');
    const progress = document.getElementById('progress');
    
    // Toggle play/pause functionality
    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            audio.pause();
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    });
    
    // Update progress bar as the audio plays
    audio.addEventListener('timeupdate', () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });
    
    // Change audio current time when progress bar is clicked
    progress.addEventListener('input', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
});