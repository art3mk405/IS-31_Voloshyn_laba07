// task 6

let btnDouble = document.querySelector("#double");
btnDouble.addEventListener("click", doubleIncrease);

function doubleIncrease() {
    let listElementsCollection = document.querySelectorAll("ul li");
    
    for (const element of listElementsCollection) {
        element.innerText = Number(element.innerText) * 2;
    }
}

