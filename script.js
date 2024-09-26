const urls = ["/menu.mp3", "/menu2.mp3", "/menu3.mp3", "/menu4.mp3"];

let played = false;

function play() {
    if (played) return;
    const adio = new Audio(urls[Math.floor(Math.random() * urls.length)]);
    adio.play();
    played = true;
}

document.onclick = play;
document.onkeydown = play;