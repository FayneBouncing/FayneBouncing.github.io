const RentBtn = document.getElementById("rent");
const Thanks = document.getElementById("thanks");
const NameLabel = document.getElementById("fname");
const Pnumber = document.getElementById("Pnumber");
const EmailLabel = document.getElementById("EA");
const AddressLabel = document.getElementById("address");
const DateLabel = document.getElementById("Date");
const TimeLabel = document.getElementById("Time");
const BH = document.getElementById("BH");
const PS = document.getElementById("PS");
const RS = document.getElementById("RS");
const SS = document.getElementById("SS");
const VB = document.getElementById("VB");
const Change = document.getElementById("change");
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
Thanks.style.display = "none";
Change.style.display = "none";
RentBtn.addEventListener("click", function Rent() {
    if (confirm("Confirm Rental?")) {
        console.clear();
        console.log(Name.value);
        console.log(PhoneNumber.value);
        console.log(Email.value);
        console.log(Adress.value);
        console.log(Date.value + " @" + Time.value);
        Thanks.style.display = "block";
        Change.style.display = "block";
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
        RentBtn.style.display = "none";
        if (BounceHouse.checked) {
            console.log("Bounce House");
            BH.style.display = "block";
        }
        if (PurpleSlide.checked) {
            console.log("Purple Slide");
            PS.style.display = "block";
        }
        if (RainbowSlide.checked) {
            console.log("Rainbow Slide");
            RS.style.display = "block";
        }
        if (SlipSlide.checked) {
            console.log("Slip Slide");
            SS.style.display = "block";
        }
        if (Volleyball.checked) {
            console.log("Volleyball");
            VB.style.display = "block";
        }
    } else {
        console.clear();
        Thanks.style.display = "none";
        Change.style.display = "none";
        NameLabel.style.display = "block";
        Name.style.display = "block";
        Pnumber.style.display = "block";
        PhoneNumber.style.display = "block";
        EmailLabel.style.display = "block";
        Email.style.display = "block";
        AddressLabel.style.display = "block";
        Adress.style.display = "block";
        DateLabel.style.display = "block";
        Date.style.display = "block";
        TimeLabel.style.display = "block";
        Time.style.display = "block";
        BH.style.display = "block";
        BounceHouse.style.display = "block";
        PS.style.display = "block";
        PurpleSlide.style.display = "block";
        RS.style.display = "block";
        RainbowSlide.style.display = "block";
        SS.style.display = "block";
        SlipSlide.style.display = "block";
        VB.style.display = "block";
        Volleyball.style.display = "block";
        RentBtn.style.display = "block";
    }
});