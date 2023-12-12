const LoginBtn = document.getElementById("Lgbtn");
const Username = document.getElementById("User").value;
let existingLogin = false;
const list = 'login.txt';
LoginBtn.addEventListener("click", function Login() {
 console.log(Username);
});