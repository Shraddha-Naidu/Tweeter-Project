$(document).ready(function() {
  // .attr refrences attribute
  //.val will get text area input length
  //link maxLength in HTML with max chars
  $('textarea').on("input", function() {
    var maxlength = $(this).attr("maxlength");
    var currentLength = $(this).val().length;
  
    if (currentLength > maxlength) {
      return console.log("Uh Oh, too many characters and not enough space!");
    }
  
    console.log(maxlength - currentLength);
  });
  
});