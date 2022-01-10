$(document).ready(function(){ 
    $('.row').each(function(){
currenttimeblock = parseInt($(this).attr("id"));
var meeting = localStorage.getItem(currenttimeblock);
if (meeting) {
$(this).children(".time-block").val(localStorage.getItem(currenttimeblock));
    }

$(".saveBtn").on("click", function(){
        var meeting = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, meeting);
});

$(".removeBtn").on("click", function() {
        var meeting = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");
        localStorage.removeItem(time, meeting);
        $(this).siblings('textarea').val('');
});


function currenttime() {
    $('.row').each(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currenttime").text(moment().format("HH:mm:ss"));
    var currenttimeblock =  parseInt($(this).attr("id"));
    var currenttime = moment().hour();
 if (currenttimeblock < currenttime) {
     $(this).addClass("past");
 } else if (currenttime === currenttimeblock) {
     $(this).addClass("present");
 } else {
    $(this).addClass("future");
    }
  })
}
 currenttime();
 setInterval(currenttime,1000);
    })
})
