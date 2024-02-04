const accountSid = "AC8026c1fb8fb19f9c6d132516dcc18916";
const authToken = "6d47da03157565a0c1cae804d2dc6814";
const client = require("twilio")(accountSid, authToken);
const RentBtn = document.getElementById("rent");
let Thanks = document.getElementById("thanks");
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
let Change = document.getElementById("change");
Thanks.style.display = "none";
Change.style.display = "none";
RentBtn.addEventListener("click", function Rent() {
    console.clear();
    console.log(Name.value);
    console.log(PhoneNumber.value);
    console.log(Email.value);
    console.log(Adress.value);
    console.log(Date.value + " @" + Time.value);
    client.messages
      .create({
        body: Name.value + "\n" + PhoneNumber.value + "\n" + Email.value + "\n" Adress.value + "\n" + Date.value + "@" + Time.value,
        from: "+18559592883",
        to: "+19015681855",
      })
      .then((message) => console.log(message.sid + " Sent"));
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
});