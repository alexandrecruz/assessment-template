$(document).ready(function(){
  $('.multiple-option:not([data-limit]) .option').on('click', function(){
    var obj = $(this).closest('.option[data-answer]');
    var question = $(obj).data('question');

    // mark selected one
    var checked = obj.find('input:checkbox').prop('checked');
    var new_val = '';

    if(checked) {
      new_val = false;
      obj.removeClass('active');
    } else {
      new_val = true;
      obj.addClass('active');
    }

    // add computed value to input
    obj.find('input:checkbox').prop('checked', new_val);
  });

  $('.multiple-option[data-limit] .option').on('click', function(){
    var obj = $(this).closest('.option[data-answer]');
    var question_id = $(obj).data('question');
    var limiter = $($(this).closest('.multiple-option[data-limit]')[0]);
    var limit = limiter.data('limit') > 0 ? limiter.data('limit') : 1;

    // count selected inputs for the question
    var selected = $('.option[data-question="'+question_id+'"] input:checked').length;

    // detec if clicked input is checked or not
    var checked = obj.find('input:checkbox').prop('checked');

    // if checked, uncheck just. No need to
    // validate limit because its decreasing
    if(checked) {
      obj.removeClass('active');
      obj.find('input:checkbox').prop('checked', false);
    }

    // if not checked AND is above the allowed answer limit,
    // THEN check the option for user
    if(!checked && selected < limit) {
      console.log('Select itens are under limit, checking..');

      obj.addClass('active');
      obj.find('input:checkbox').prop('checked', true);
    } else {
      console.error('Unable to check after reaching the answers limit');
    }

    if (selected <= limit) {
      // valid answers, hide error message
      $('#notification').stop(1000).hide();
    }
  });
});
