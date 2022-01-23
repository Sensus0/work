$("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

$("#scheduleCon").on("click", "p", function() {
    var text = $(this)
    var textInput = $("<textarea>")
    $(this).replaceWith(textInput)
    textInput.trigger("focus")
   .addClass("form-control")
   .val(text)
    .text()
    .trim();
    console.log(text);

});

// saveto local storage
$("button").on("click", function(){
    console.log($(this).siblings("textarea").val());
    console.log($(this).attr("id"))
    localStorage.setItem($(this).attr("id"), $(this).siblings("textarea").val() )

})

// A $( document ).ready() block.
$( document ).ready(function() {
    $("#text9am").val(localStorage.getItem("9:00am"))
    $("#text10am").val(localStorage.getItem("10:00am"))
    $("#text11am").val(localStorage.getItem("11:00am"))
    $("#text12am").val(localStorage.getItem("12:00pm"))
    $("#text1pm").val(localStorage.getItem("1:00pm"))
    $("#text2pm").val(localStorage.getItem("2:00pm"))
    $("#text3pm").val(localStorage.getItem("3:00pm"))
    $("#text4pm").val(localStorage.getItem("4:00pm"))
    $("#text5pm").val(localStorage.getItem("5:00pm"))
    $("#text6pm").val(localStorage.getItem("6:00pm"))
    $("#text7pm").val(localStorage.getItem("7:00pm"))
    $("#text8pmm").val(localStorage.getItem("8:00pm"))
    
    console.log( "ready!" );
});