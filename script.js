$(document).ready(function(){ 
    $('.time-block').each(function(){
currenttimeblock = parseInt($(this).attr("id"));
var meeting = localStorage.getItem(currenttimeblock);
if (meeting) {
$(this).children(".description").val(localStorage.getItem(currenttimeblock));
    }

$(".saveBtn").on("click", function(){
        var meeting = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, meeting);
});

$(".removeBtn").on("click", function() {
        var meeting = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.removeItem(time, meeting);
        $(this).siblings('textarea').val('');
});


function currenttime() {
    $('.time-block').each(function(){
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

