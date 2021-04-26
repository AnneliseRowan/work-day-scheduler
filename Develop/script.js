let timeNow = moment().format("dddd, MMMM Do YYYY"); 
let hourNow = moment().format("h"); 
let current24 = Number(moment().format("HH")); 
let hourInterval = Number(hourNow); 

const hr9 = $("#hour1");
const hr10 = $("#hour2"); 
const hr11 = $("#hour3");
const hr12 = $("#hour4"); 
const hr1 = $("#hour5");
const hr2 = $("#hour6"); 
const hr3 = $("#hour7"); 
const hr4 = $("#hour8"); 
const hr5 = $("#hour9");  

let btn1 = $("#btn1"); 

$("#btn3").click(function() {

    localStorage.setItem($("#text3").text()); 


    //const hr11Str = JSON.stringify(hr11); 
    //localStorage.setItem(parseInt(hr11), $("#text3").val())
})

$("#currentDay").text(timeNow); 


console.log(hr11.text())
console.log(hourNow)
console.log(typeof(hr11.text()))
console.log(hr11.text() === hourNow)

function hourColor() {
    if(hr11.text() === hourNow) {
        $("#text3").css("background-color", "grey");
    }
}