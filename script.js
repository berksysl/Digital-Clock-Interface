var newHour = document.getElementById("chour");
var newMinute = document.getElementById("cminute");
var newSecond = document.getElementById("csecond");
var btn24 = document.getElementById("btn24");
var btn12 = document.getElementById("btn12");

setInterval(newDateWrite, 1000);

function formatChange(chour){
    if(chour > 12)
        chour -= 12;
    return chour; 
}

function newDateWrite(){

var DATE = new Date();

var cHour = DATE.getHours();
var cMinutes = DATE.getMinutes();
var cSeconds = DATE.getSeconds();

var today = DATE.getDay();

if(today == 0)
{
  var sunday = document.getElementById("sunday");
  sunday.classList.add("today");
}
else if(today == 1)
{
    var monday = document.getElementById("monday");
    monday.classList.add("today");
}
else if(today == 2)
{
    var tuesday = document.getElementById("tuesday");
    tuesday.classList.add("today");
}
else if(today == 3)
{
    var wednesday = document.getElementById("wednesday");
    wednesday.classList.add("today");
}
else if(today == 4)
{
    var thursday = document.getElementById("thursday");
    thursday.classList.add("today");
}
else if(today == 5)
{
    var friday = document.getElementById("friday");
    friday.classList.add("today");
}
else if(today == 6)
{
    var saturday = document.getElementById("saturday");
    saturday.classList.add("today");
}

btn12.addEventListener("click", function(){return formatChange(cHour)});
console.log(cHour);

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