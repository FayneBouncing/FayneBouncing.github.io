const LoginBtn = document.getElementById("Lgbtn");
const CreateBtn = document.getElementById("Cabtn");
const Username = document.getElementById("User").value;
let existingLogin = false;
const list = 'login.txt';
const fs = require('fs')
LoginBtn.addEventListener("click", function Login() {
    list.writeFile(list,"Sup");
});
CreateBtn.addEventListener("click", function Create() {
    console.log("Create button clicked");
});