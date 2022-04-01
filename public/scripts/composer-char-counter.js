$(document).ready(function() {

  $('textarea').on("keyup", function(e) {
    //Total chars in textarea
    let currentLength = $(this).val().length;
    const count = 140 - currentLength;
  
    if (currentLength > maxlength) {
      return console.log("Uh Oh, too many characters and not enough space!");
    }
  
    console.log(maxlength - currentLength);
  });
  
});