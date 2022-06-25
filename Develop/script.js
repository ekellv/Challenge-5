    // sets the current day & time in the currentDay html element using moment.js
 var todaysDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").html(todaysDate);

function hourColorCode() {
        // setting the current hour in moment.js to set up past, present, future hour color coordination
        var currentHour = moment().format("HH");
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            
            if (hourBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
}

$(".saveBtn").click(function(event) {
    event.preventDefault();
    var task = $(this).siblings(".time-block").val();
    var time = $(this).parent("id").val();
    localStorage.setItem(time, task);
});

$("#8 .task-entry").val(localStorage.getItem("8"))
$("#9 .task-entry").val(localStorage.getItem("9"))
$("#10 .task-entry").val(localStorage.getItem("10"))
$("#11 .task-entry").val(localStorage.getItem("11"))
$("#12 .task-entry").val(localStorage.getItem("12"))
$("#13 .task-entry").val(localStorage.getItem("13"))
$("#14 .task-entry").val(localStorage.getItem("14"))
$("#15 .task-entry").val(localStorage.getItem("15"))
$("#16 .task-entry").val(localStorage.getItem("16"))
$("#17 .task-entry").val(localStorage.getItem("17"))

hourColorCode();













