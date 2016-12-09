$(document).ready(function(){
  $('.multiple-option .option').on('click', function(){
    var obj = $(this).closest('.option[data-question]');
    var question_id = $(obj).data('question');
    var limiter = $($(this).closest('.multiple-option[data-min]')[0]);
    var min = limiter.data('min') > 0 ? limiter.data('min') : 0;
    var max = limiter.data('max') > 0 ? limiter.data('max') : 0;
    // debugger;

    // count selected inputs for the question
    var selected = $('.option[data-question="'+question_id+'"] input:checked').length;

    // detec if clicked input is checked or not
    var checked = obj.find('input:checkbox').prop('checked');

    // if checked, uncheck just. No need to
    // validate limit because its decreasing
    if(checked) {
      obj.removeClass('active');
      obj.find('input:checkbox').prop('checked', false);
    } else {
      // if not checked AND is above the allowed answer limit,
      // THEN check the option for user
      obj.addClass('active');
      obj.find('input:checkbox').prop('checked', true);
    }

    // recalculate selected items after checking/unchecking
    var selected = $('.option[data-question="'+question_id+'"] input:checked').length;
    if (selected >= min && selected <= max) {
      // valid answers, hide error message
      $('.button-submit').attr('disabled', false);
    } else {
      $('.button-submit').attr('disabled', true);
    }

  });
});
