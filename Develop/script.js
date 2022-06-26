var todaysDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").html(todaysDate);
var currentHourBlock = moment().hour();

// sets the current day & time in the currentDay html element using moment.js
$(document).ready(function () {

    function hourColorCode() {

        $(".time-block").each( function () {  
            var currentHourBlock = moment().hour();

            var taskHour = $(this).attr("id").split("-")[1];

            if (taskHour == currentHourBlock) {
                $(this).addClass("present");
                $(this).removeClass("future");
            } else if (taskHour < currentHourBlock) {
                $(this).removeClass("present");
                $(this).addClass("past");
            } else {
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    console.log(currentHourBlock);

    $(".saveBtn").click(function(event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    $(".clear-button").click(function(event){
        event.preventDefault();
        $("textarea").val("");
        localStorage.clear();
    });

    $("#hour-8 .description").val(localStorage.getItem("8"));
    $("#hour-9 .description").val(localStorage.getItem("9"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));

    hourColorCode();

});











