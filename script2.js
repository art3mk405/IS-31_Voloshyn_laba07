// Task 2

let firstValInput = document.querySelector("#firstValue");
let secondValInput = document.querySelector("#secondValue");
let swapBtn = document.querySelector("#swapButton");
swapBtn.addEventListener("click", swapValues);
function swapValues(){    
    let tmp = firstValInput.value;
    firstValInput.value = secondValInput.value;
    secondValInput.value=tmp;
}






