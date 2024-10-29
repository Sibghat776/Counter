let count = 0;
function increaseHandler() {
    count++;
    document.querySelector(`.counting`).innerHTML = count;
}
function decreaseHandler() {
    count--;
    if (count >= 0) {
        document.querySelector(`.counting`).innerHTML = count;
    }
}
function resetHandler() {
    count = 0;
    if (count >= 0 && count <= 0) {
        document.querySelector(`.counting`).innerHTML = count
    }
}