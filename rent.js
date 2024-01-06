const RentBtn = document.getElementById("rent");
let NameLabel = document.getElementById("fname");
let Name = document.getElementById("name");
let Pnumber = document.getElementById("Pnumber");
let PhoneNumber = document.getElementById("phone");
let EmailLabel = document.getElementById("EA");
let Email = document.getElementById("email");
let AddressLabel = document.getElementById("address");
let Adress = document.getElementById("adress");
let DateLabel = document.getElementById("Date");
let Date = document.getElementById("date");
let TimeLabel = document.getElementById("Time");
let Time = document.getElementById("time");
let BH = document.getElementById("BH");
let BounceHouse = document.getElementById("bounceHouse");
let PS = document.getElementById("PS");
let PurpleSlide = document.getElementById("purpleSlide");
let RS = document.getElementById("RS");
let RainbowSlide = document.getElementById("rainbowSlide");
let SS = document.getElementById("SS");
let SlipSlide = document.getElementById("slipSlide");
let VB = document.getElementById("VB");
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
    NameLabel.style.display = "none";
    Name.style.display = "none";
    Pnumber.style.display = "none";
    PhoneNumber.style.display = "none";
    EmailLabel.style.display = "none";
    Email.style.display = "none";
    AddressLabel.style.display = "none";
    Adress.style.display = "none";
    DateLabel.style.display = "none";
    Date.style.display = "none";
    TimeLabel.style.display = "none";
    Time.style.display = "none";
    BH.style.display = "none";
    BounceHouse.style.display = "none";
    PS.style.display = "none";
    PurpleSlide.style.display = "none";
    RS.style.display = "none";
    RainbowSlide.style.display = "none";
    SS.style.display = "none";
    SlipSlide.style.display = "none";
    VB.style.display = "none";
    Volleyball.style.display = "none";
});