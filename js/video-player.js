const line = document.querySelector('.line');
const volume = document.querySelector('.volume');

const videoPlayer = function(strip) {
    strip.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #710707 ${value}%, #C4C4C4 ${value}%)`
    })
};

videoPlayer(line);
videoPlayer(volume);