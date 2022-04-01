$(document).ready(function() {
  // tweet input area
  const $textArea = $('.new-tweet textarea');

  $('textarea').on("keyup", function() {
    //Total chars in textarea
    const currentLength = $(this).val().length;
    const maxlength = 140
  
    if (currentLength > maxlength) {
      return console.log("Uh Oh, too many characters and not enough space!");
      CountQueuingStrategy.addClass("over");
    } else {
      count.removeClass('over');
    }
      console.log(maxlength - currentLength);
  });
  
});

