const wrapper = document.querySelector('.traffic-light-wrapper');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

function makeGreen() {
    first.style.background = ('green');
    third.style.background = ('black');

    wrapper.removeEventListener('click', makeGreen);
    wrapper.addEventListener('click', makeYellow);
}

function makeYellow() {
    second.style.background = ('yellow');
    first.style.background = ('black');

    wrapper.removeEventListener('click', makeYellow);
    wrapper.addEventListener('click', makeRed);
}

function makeRed() {
    third.style.background = ('red');
    second.style.background = ('black');

    wrapper.removeEventListener('click', makeRed);
    wrapper.addEventListener('click', makeGreen);
}

function resetTraffic(e) {
    if (e.target.nodeName === 'DIV') {
        return
    }
    first.style.background = ('black');
    second.style.background = ('black');
    third.style.background = ('black');
}

wrapper.addEventListener('click', makeGreen);
document.addEventListener('click', resetTraffic)
