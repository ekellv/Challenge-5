// displaying the date using moments.js in the Current Day id from the HTML
var todaysDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").html(todaysDate);

// declaring variable containing the hour of the day
var currentHourBlock = moment().hour();

// function will run the hour color coding, the save & clear buttons, as well as storing and accessing the information in local storage
$(document).ready(function () {

    // function to assign color code to the hours of the day
    function hourColorCode() {

        // for each time block class in the html, run this function 
        $(".time-block").each( function () {  

            // adding in current hour variable
            var currentHourBlock = moment().hour();
            // defining the task hour by splitting the hour-x id tag, so the loop will run for the hour of every time block 
            var taskHour = $(this).attr("id").split("-")[1];
            // if the hour on the schedule is the same as the current hour of the day then add the present hour styling
            if (taskHour == currentHourBlock) {
                $(this).addClass("present");
                $(this).removeClass("future");
            // but if the schedule hour is less than the current hour of the day remove the present hour styling and add the past hour styling
            } else if (taskHour < currentHourBlock) {
                $(this).removeClass("present");
                $(this).addClass("past");
            // if neither of these are true, remove the past hour styling and add the future hour styling
            } else {
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }

    // function to run when user clicks on the save button, saving to local storage so information is not lost
    $(".saveBtn").click(function(event) {
        // don't resubmit the page 
        event.preventDefault();
        // the value variable is the description class in the html (what the user wrote in the text box), because it is the save button's DOM sibling
        var value = $(this).siblings(".description").val();
        // the time variable is set by splitting the hour-x id tag the same way it is in the hourColorCode function, so it uses the time attached to the hour tag
        var time = $(this).parent().attr("id").split("-")[1];
        // save these two variable in local storage
        localStorage.setItem(time, value);
    });

    // function to clear data from page when user clicks on the clear tasks button 
    $(".clear-button").click(function(event){
        // don't resubmit the page
        event.preventDefault();
        // take the text area html tag and effectively reset it to nothing
        $("textarea").val("");
        // clear the time & value variables from local storage
        localStorage.clear();
    });

    // returns all the saved values from local storage for each hour
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

    // run the color code function 
    hourColorCode();

});











