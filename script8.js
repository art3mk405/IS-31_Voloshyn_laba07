
// task 8

let loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();  
    let loginFormElements = loginForm.elements;
    let userEmail = loginFormElements["email"].value;
    let userPassword = loginFormElements["password"].value

    if(userEmail == "" || userPassword == "")
        alert("All form fields must be filled in");
    else{
        let logedUser = {};
        logedUser["email"] = userEmail.trim();
        logedUser["password"] = userPassword.trim();
        console.log(logedUser);
        loginForm.reset();
    }
})


