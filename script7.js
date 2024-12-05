// task 7

let categoriesElementsCollection = document.querySelectorAll("#categories .item");
console.log("Task 7");
console.log(`Number of categories in ul#categories is ${categoriesElementsCollection.length}`);
let categoriesArray = [...categoriesElementsCollection];
categoriesArray.forEach((category)=>{
    console.log(`Category: ${category.querySelector("h2").innerText}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`)
})

