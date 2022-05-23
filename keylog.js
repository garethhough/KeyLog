const displayKey = document.querySelector(".key h3");
const displayKeyCode = document.querySelector(".keyCode h3");
const keyCodeDive = document.querySelector(".keyCode");

window.addEventListener("keydown", (e) => {
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    if (e.keyCode === 32) {
        displayKey.innerText = "Space Bar";
    }
})