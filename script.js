const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Matrix Effect
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "MOZILLA_FIREFOX_PRIVACY_010101";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff5f00"; // Mozilla Orange
    ctx.font = fontSize + "px monospace";

    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

// Splash Transition Logic
const statusText = document.getElementById('status-text');
const messages = [
    "BYPASSING TRACKERS...",
    "HANDSHAKE WITH DECENTRALIZED NODES...",
    "DE-SILOING DATASET...",
    "WELCOME TO THE FREE WEB."
];

let msgIndex = 0;
const interval = setInterval(() => {
    statusText.innerText = messages[msgIndex];
    msgIndex++;
    if (msgIndex === messages.length) {
        clearInterval(interval);
        setTimeout(revealSite, 1000);
    }
}, 800);

function revealSite() {
    document.getElementById('splash-overlay').style.transform = "translateY(-100%)";
    document.getElementById('app-interface').classList.remove('hidden');
}