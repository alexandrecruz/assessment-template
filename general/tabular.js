$(document).ready(function(){
  $('.tabular-group .option').on('click', function(){
    var obj = $(this).closest('.option[data-answer]');
    var question = $(obj).data('question');

    // uncheck other radios in this question
    $('[data-question="'+question+'"]').removeClass('active');

    // mark selected one
    var checked = obj.find('input:radio').prop('checked');
    var new_val = '';

    if(checked) {
      new_val = false;
      obj.removeClass('active');
    } else {
      new_val = true;
      obj.addClass('active');
    }

    // add computed value to input
    obj.find('input:radio').prop('checked', new_val);
  });
});
