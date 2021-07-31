let audio;
const links = ['projects', 'blog', 'footer', 'more']
document.addEventListener('click', function (e) {
    if (!links.includes(e.target.id)) {
        play_music()
    }
}, false);
function play_music() {
    if (audio === undefined || audio.currentTime === 0 || audio.ended) {
        audio = new Audio('hi.mp3');
        audio.volume = 0.15
        document.getElementById("music").style.display = "none";
        audio.play();
    }
}