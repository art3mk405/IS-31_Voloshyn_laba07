// task 9

let widget = document.querySelector(".widget");
(widget.querySelector("button.change-color")).addEventListener("click",()=>{
    let newColor = getRandomHexColor();
    widget.querySelector("span.color").innerText = newColor;
    widget.style.backgroundColor = newColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


