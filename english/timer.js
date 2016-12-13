$(document).ready(function(){
  // initialize timer with given value


  // isolate scope from unwanted changes
  var time = 185; // seconds

  setInterval(function () {
    $('.assessment-timer-value').text(
      formatValue(time));

    time--; //decrease 1 second
  }, 1000);

  var formatValue = function(seconds) {
    if(seconds > 0) {
      // calculate
      var min = parseInt(seconds / 60);
      var sec = seconds - (min * 60);

      //format numbers 2 decimal cases
      min = ("0" + min).slice(-2);
      sec = ("0" + sec).slice(-2);

      var display = [min, sec].join(':');
      return display;
    }
  }

});
