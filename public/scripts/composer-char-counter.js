$(document).ready(function() {
  const maxLength = 140;
  $('char-count').text(maxLength)

  $("textarea").on("input", function(){
    const count = $('#char-count')
    const input = $(this).val().length;

    if (input > maxLength) {
      return count.addClass('#char-count--red')
    } else {
      return count.removeClass('#char-count--red')
    }

    count.text(maxLength - input)

  });
});