const LoginBtn = document.getElementById("Lgbtn");
const CreateBtn = document.getElementById("Cabtn");
const Username = document.getElementById("User").value;
const Password = document.getElementById("Pass").value;
let existingLogin = false;
const list = 'login.txt';
LoginBtn.addEventListener("click", function Login() {
    console.log(Username);
});
CreateBtn.addEventListener("click", function Create() {
    console.log("Create button clicked");
});