const RentBtn = document.getElementById("rent");
let Name = document.getElementById("name");
let PhoneNumber = document.getElementById("phone");
let Email = document.getElementById("email");
let Adress = document.getElementById("adress");
let Date = document.getElementById("date");
let Time = document.getElementById("time");
RentBtn.addEventListener("click", function Rent() {
    console.log(Name.value);
    console.log(PhoneNumber.value);
    console.log(Email.value);
    console.log(Adress.value);
    console.log(Date.value + " @" + Time.value);
});