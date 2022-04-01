$(document).ready(function() {
  // tweet input area
  const $textArea = $('.new-tweet textarea');

  $('textarea').on("keyup", function() {
    //Total chars in textarea
    const currentLength = $(this).val().length;
    const maxlength = 140
    const count = $(this).siblings('.counter');
  
    if (currentLength > maxlength) {
      count.addClass("over");
    } else {
      count.removeClass("over");
    }
      console.log(maxlength - currentLength);
  });
});

