let timeNow = moment().format("dddd, MMMM Do YYYY"); 
let hourNow = moment().format("h"); 
let current24 = Number(moment().format("HH")); 
let hourInterval = Number(hourNow); 

const hr9 = $("#hour9").text();
const hr10 = $("#hour10").text(); 
const hr11 = $("#hour11").text();
const hr12 = $("#hour12").text(); 
const hr13 = $("#hour13").text();
const hr14 = $("#hour14").text(); 
const hr15 = $("#hour15").text(); 
const hr16 = $("#hour16").text(); 
const hr17 = $("#hour17").text();  


$("#currentDay").text(timeNow); 

/*
if ($("#currentDay").text(timeNow) !== $("#currentDay").text(timeNow)) {
    reset(); 
}
*/

$("#text9").val(localStorage.getItem(JSON.stringify(hr9))); 
$("#text10").val(localStorage.getItem(JSON.stringify(hr10)));
$("#text11").val(localStorage.getItem(JSON.stringify(hr11)));
$("#text12").val(localStorage.getItem(JSON.stringify(hr12)));
$("#text13").val(localStorage.getItem(JSON.stringify(hr13)));
$("#text14").val(localStorage.getItem(JSON.stringify(hr14)));
$("#text15").val(localStorage.getItem(JSON.stringify(hr15)));
$("#text16").val(localStorage.getItem(JSON.stringify(hr16)));
$("#text17").val(localStorage.getItem(JSON.stringify(hr17)));



$("#btn1").click(function() {
    localStorage.setItem(hr9, $("#text1").val());
})
$("#btn2").click(function() {
    localStorage.setItem(hr10, $("#text2").val());;
})
$("#btn3").click(function() {
    localStorage.setItem(hr11, $("#text3").val());
})
$("#btn4").click(function() {
    localStorage.setItem(hr12, $("#text4").val());
})
$("#btn5").click(function() {
    localStorage.setItem(hr13, $("#text5").val());
})
$("#btn6").click(function() {
    localStorage.setItem(hr14, $("#text6").val());
})
$("#btn7").click(function() {
    localStorage.setItem(hr15, $("#text7").val());
})
$("#btn8").click(function() {
    localStorage.setItem(hr16, $("#text8").val());
})
$("#btn9").click(function() {
    localStorage.setItem(hr17, $("#text9").val());
})


hourColor();

function hourColor() {
    if(Number(hr9) <= current24) {
        $("#text9").addClass("past")
    }
    if(Number(hr9) > current24) {
        $("#text9").addClass("future")
    }
    if(Number(hr9) === current24) {
        $("#text9").addClass("present")
    }
    if(Number(hr10) <= current24) {
        $("#text10").addClass("past")
    }
    if(Number(hr10) > current24) {
        $("#text10").addClass("future")
    }
    if(Number(hr10) === current24) {
        $("#text10").addClass("present")
    }
    if(Number(hr11) <= current24) {
        $("#text11").addClass("past")
    }
    if(Number(hr11) > current24) {
        $("#text11").addClass("future")
    }
    if(Number(hr11) === current24) {
        $("#text11").addClass("present")
    }
    if(Number(hr12) <= current24) {
        $("#text12").addClass("past")
    }
    if(Number(hr12) > current24) {
        $("#text12").addClass("future")
    }
    if(Number(hr12) === current24) {
        $("#text12").addClass("present")
    }
    if(Number(hr13) <= current24) {
        $("#text13").addClass("past")
    }
    if(Number(hr13) > current24) {
        $("#text13").addClass("future")
    }
    if(Number(hr13) === current24) {
        $("#text13").addClass("present")
    }
    if(Number(hr14) <= current24) {
        $("#text14").addClass("past")
    }
    if(Number(hr14) > current24) {
        $("#text14").addClass("future")
    }
    if(Number(hr14) === current24) {
        $("#text14").addClass("present")
    }
    if(Number(hr15) <= current24) {
        $("#text15").addClass("past")
    }
    if(Number(hr15) > current24) {
        $("#text15").addClass("future")
    }
    if(Number(hr15) === current24) {
        $("#text15").addClass("present")
    }
    if(Number(hr16) <= current24) {
        $("#text16").addClass("past")
    }
    if(Number(hr16) > current24) {
        $("#text16").addClass("future")
    }
    if(Number(hr16) === current24) {
        $("#text16").addClass("present")
    }
    if(Number(hr17) <= current24) {
        $("#text17").addClass("past")
    }
    if(Number(hr17) > current24) {
        $("#text17").addClass("future")
    }
    if(Number(hr17) === current24) {
        $("#text17").addClass("present")
    }
}

var addHr = function() {
    return $(".time").text() + "H"; 
}

