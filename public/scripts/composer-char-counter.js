$(document).ready(function() {

  const textInput = function(){
    const $input = $(this)
    const $form = $input.closest('form');
    const $counter = $form.find('counter');

    const currentLength = $(this).val().length;
    const maxlength = 140;

    $counter.text(maxlength - currentLength);

    if (maxlength < currentLength) {
      return $counter.addClass('over')
    }
    $counter.removeClass('over');
}
  //switched to input, so its not tied to keyboard as input method
  $('textarea').on("input", textInput);
});


