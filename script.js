const newHour = document.getElementById("chour");
const newMinute = document.getElementById("cminute");
const newSecond = document.getElementById("csecond");
const btn24 = document.getElementById("btn24");
const btn12 = document.getElementById("btn12");

setInterval(newDateWrite, 1000);

function newDateWrite(){

const DATE = new Date();

let cHour = DATE.getHours();
let cMinutes = DATE.getMinutes();
let cSeconds = DATE.getSeconds();

let today = DATE.getDay();

switch(today)
{
    case 0:
        let sunday = document.getElementById("sunday");
        sunday.classList.add("today");
        break;
    
    case 1:
        let monday = document.getElementById("monday");
        monday.classList.add("today");
        break;
    
    case 2:
        let tuesday = document.getElementById("tuesday");
        tuesday.classList.add("today");
        break;
    
    case 3:
        let wednesday = document.getElementById("wednesday");
        wednesday.classList.add("today");
        break;

    case 4:
        let thursday = document.getElementById("thursday");
        thursday.classList.add("today");
        break;

    case 5:
        let friday = document.getElementById("friday");
        friday.classList.add("today");
        break;

    case 6:
        let saturday = document.getElementById("saturday");
        saturday.classList.add("today");
        break;
}

if(cHour < 10){
    cHour = "0" + cHour;
}
if(cMinutes < 10){
    cMinutes = "0" + cMinutes;
}
if(cSeconds < 10){
    cSeconds = "0" + cSeconds;
}

newHour.innerHTML = cHour;
newMinute.innerHTML = cMinutes;
newSecond.innerHTML = cSeconds;
}