$(function() {
  $("submit-button").click(function() {
    var url = "/reverse?wordinput=" + string;
    var presentResult = $(".result").html(reverseString); 
    $.get(url, presentResult); 
    }
});
