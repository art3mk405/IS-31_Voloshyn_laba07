// task 4
let btnSmaller = document.querySelector("#makeSmaller");
let btnBigger = document.querySelector("#makeBigger");
let squareDiv = document.querySelector("#square");
let defaultSize = 50;
squareDiv.style.width = `${defaultSize}px`;
squareDiv.style.height = `${defaultSize}px`;

btnSmaller.addEventListener("click", makeSmaller);
btnBigger.addEventListener("click", makeBigger);

function makeSmaller(){
    let sizeStr = squareDiv.style.width
    let size = Number(sizeStr.slice(0, sizeStr.length-2)); 
    squareDiv.style.width = `${size-15}px`;
    squareDiv.style.height = `${size-15}px`;    
}
function makeBigger(){
    let sizeStr = squareDiv.style.width
    let size = Number(sizeStr.slice(0, sizeStr.length-2));     
    squareDiv.style.width = `${size+15}px`;
    squareDiv.style.height = `${size+15}px`;  
}

