const displayKey = document.querySelector(".key h3");
const displayKeyCode = document.querySelector(".keyCode h3");
const displayEventCode = document.querySelector(".eventCode h3");


window.addEventListener("keydown", (e) => {
    displayKey.innerText = e.key;
    displayEventCode.innerText = e.code;
    displayKeyCode.innerText = e.keyCode;
    if (e.keyCode === 32) {
        displayKey.innerText = "Space Bar";
    }
})