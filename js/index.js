//Upcoming Tasks

// Create event listener to enter items below
$("#enter").on("click", function(){
    var task = $("#todoItem").val();
    $("#todoList").append("<div class='task'><div class='far fa-circle'></div>" + task + "<div class='x fas fa-times'></div></div>")
});
// Create event listener to delete items below
$(document).on("click", ".x", function(){
    $(this).parent().remove();
});
// Create event listener to toggle 
$(document).on("click", ".fa-circle", function(){
    $(this).parent().toggleClass("done");
    if ($(this).parent().hasClass("done")) {
       $(this).removeClass("fa-circle");
       $(this).addClass("fa-check-circle");
    }
    else {
        $(this).addClass("fa-circle");
    }
});