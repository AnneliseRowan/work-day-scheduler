let timeNow = moment().format("dddd, MMMM Do YYYY"); 
let hourNow = moment().format("h"); 
let current24 = Number(moment().format("HH")); 
let hourInterval = Number(hourNow); 

const hr9 = $("#hour1").text();
const hr10 = $("#hour2").text(); 
const hr11 = $("#hour3").text();
const hr12 = $("#hour4").text(); 
const hr13 = $("#hour5").text();
const hr14 = $("#hour6").text(); 
const hr15 = $("#hour7").text(); 
const hr16 = $("#hour8").text(); 
const hr17 = $("#hour9").text();  


$("#currentDay").text(timeNow); 


$("#btn1").click(function() {
    preventDefault();
    const hr9Str = JSON.stringify(hr9);
    localStorage.setItem(hr9Str, $("#text1").val())
})
$("#btn2").click(function() {
    const hr10Str = JSON.stringify(hr10);
    localStorage.setItem(hr10Str, $("#text2").val())
})
$("#btn3").click(function() {
    const hr3Str = JSON.stringify(hr11);
    localStorage.setItem(hr3Str, $("#text3").val())
})
$("#btn4").click(function() {
    const hr12Str = JSON.stringify(hr12);
    localStorage.setItem(hr12Str, $("#text4").val())
})
$("#btn5").click(function() {
    const hr13Str = JSON.stringify(hr13);
    localStorage.setItem(hr13Str, $("#text5").val())
})
$("#btn6").click(function() {
    const hr14Str = JSON.stringify(hr14);
    localStorage.setItem(hr14Str, $("#text6").val())
})
$("#btn7").click(function() {
    const hr15Str = JSON.stringify(hr15);
    localStorage.setItem(hr15Str, $("#text7").val())
})
$("#btn8").click(function() {
    const hr16Str = JSON.stringify(hr16);
    localStorage.setItem(hr16Str, $("#text8").val())
})
$("#btn9").click(function() {
    const hr17tr = JSON.stringify(hr17);
    localStorage.setItem(hr17tr, $("#text9").val())
})


hourColor();

function hourColor() {
    if(Number(hr9) <= current24) {
        $("#text1").addClass("past")
    }
    if(Number(hr9) > current24) {
        $("#text1").addClass("future")
    }
    if(Number(hr9) === current24) {
        $("#text1").addClass("present")
    }
    if(Number(hr10) <= current24) {
        $("#text2").addClass("past")
    }
    if(Number(hr10) > current24) {
        $("#text2").addClass("future")
    }
    if(Number(hr10) === current24) {
        $("#text2").addClass("present")
    }
    if(Number(hr11) <= current24) {
        $("#text3").addClass("past")
    }
    if(Number(hr11) > current24) {
        $("#text3").addClass("future")
    }
    if(Number(hr11) === current24) {
        $("#text3").addClass("present")
    }
    if(Number(hr12) <= current24) {
        $("#text4").addClass("past")
    }
    if(Number(hr12) > current24) {
        $("#text4").addClass("future")
    }
    if(Number(hr12) === current24) {
        $("#text4").addClass("present")
    }
    if(Number(hr13) <= current24) {
        $("#text5").addClass("past")
    }
    if(Number(hr13) > current24) {
        $("#text5").addClass("future")
    }
    if(Number(hr13) === current24) {
        $("#text5").addClass("present")
    }
    if(Number(hr14) <= current24) {
        $("#text6").addClass("past")
    }
    if(Number(hr14) > current24) {
        $("#text6").addClass("future")
    }
    if(Number(hr14) === current24) {
        $("#text6").addClass("present")
    }
    if(Number(hr15) <= current24) {
        $("#text7").addClass("past")
    }
    if(Number(hr15) > current24) {
        $("#text7").addClass("future")
    }
    if(Number(hr15) === current24) {
        $("#text7").addClass("present")
    }
    if(Number(hr16) <= current24) {
        $("#text8").addClass("past")
    }
    if(Number(hr16) > current24) {
        $("#text8").addClass("future")
    }
    if(Number(hr16) === current24) {
        $("#text8").addClass("present")
    }
    if(Number(hr17) <= current24) {
        $("#text9").addClass("past")
    }
    if(Number(hr17) > current24) {
        $("#text9").addClass("future")
    }
    if(Number(hr17) === current24) {
        $("#text9").addClass("present")
    }
}