$(function() {
  var milliseconds = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  window.setInterval(function() {
    milliseconds += 1

    if (milliseconds == 100) {
      seconds += 1;
      milliseconds = 0;
    }

    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    }

    if (minutes == 60) {
      hours += 1;
      minutes = 0;
    }

      $('#hours').html(hours < 10 ? '0' + hours : hours);
      $('#minutes').html(minutes < 10 ? '0' + minutes : minutes);
      $('#seconds').html(seconds < 10 ? '0' + seconds : seconds);
      $('#milliseconds').html(milliseconds);

  }, 10)

})