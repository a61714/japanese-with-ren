// 1. Audio Function
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

// 2. Flashcard Toggle
function toggleTranslation() {
    const trans = document.getElementById('practiceTrans');
    trans.classList.toggle('show');
}

// 3. Scroll Progress Bar
window.onscroll = function () { moveProgressBar() };

function moveProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}