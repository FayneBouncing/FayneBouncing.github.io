const LoginBtn = document.getElementById("Lgbtn");
const CreateBtn = document.getElementById("Cabtn");
let Username = document.getElementById("User").value;
let Password = document.getElementById("Pass").value;
let existingLogin = false;
const list = 'login.txt';
LoginBtn.addEventListener("click", function Login() {
    console.log("Login button clicked");
});
CreateBtn.addEventListener("click", function Create() {
    console.log("Create button clicked");
});