const RentBtn = document.getElementById("rent");
let Name = document.getElementById("name");
let PhoneNumber = document.getElementById("phone");
let Email = document.getElementById("email");
let Adress = document.getElementById("adress");
let Date = document.getElementById("date");
let Time = document.getElementById("time");
let BounceHouse = document.getElementById("bounceHouse");
let PurpleSlide = document.getElementById("purpleSlide");
let RainbowSlide = document.getElementById("rainbowSlide");
let SlipSlide = document.getElementById("slipSlide");
let Volleyball = document.getElementById("volleyball");
RentBtn.addEventListener("click", function Rent() {
    console.clear();
    console.log(Name.value);
    console.log(PhoneNumber.value);
    console.log(Email.value);
    console.log(Adress.value);
    console.log(Date.value + " @" + Time.value);
    if (BounceHouse.checked) {
        console.log("Bounce House");
    }
    if (PurpleSlide.checked) {
        console.log("Purple Slide");
    }
    if (RainbowSlide.checked) {
        console.log("Rainbow Slide");
    }
    if (SlipSlide.checked) {
        console.log("Slip Slide");
    }
    if (Volleyball.checked) {
        console.log("Volleyball");
    }
    Name.style.display = "none";
});