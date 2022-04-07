$(document).ready(function() {
  const maxLength = 140;
  $('char-count').text(maxLength)

  $("textarea").on("input", function(){
    const count = $('#char-count')
    const input = $(this).val().length;
    count.text(maxLength - input)

    if (input > maxLength) {
      count.addClass('red')
    } else {
      count.removeClass('red')
    }

  });
});