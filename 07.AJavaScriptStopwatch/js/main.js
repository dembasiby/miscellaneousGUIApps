var stopWatch = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  interVal: null,
  displayTime: function() {
    $('#hours').html(this.hours < 10 ? '0' + this.hours : this.hours);
    $('#minutes').html(this.minutes < 10 ? '0' + this.minutes : this.minutes);
    $('#seconds').html(this.seconds < 10 ? '0' + this.seconds : this.seconds);
    $('#milliseconds').html(this.milliseconds < 10 ? '0' + 
      this.milliseconds : this.milliseconds);
  },
  startClock: function() {
    this.interVal = setInterval(function() {
      this.milliseconds += 1
      if (this.milliseconds == 99) {
        this.seconds += 1;
        this.milliseconds = 0;
      }
      if (this.seconds == 59) {
        this.minutes += 1;
        this.seconds = 0;
      }
      if (this.minutes == 59) {
        this.hours += 1;
        this.minutes = 0;
      }
      
      this.displayTime();
    }.bind(this), 10);

    $('.start').html('Stop').removeClass('start').addClass('stop');
  },
  stopClock: function() {
    clearInterval(this.interVal);
    $('.stop').html('Start').removeClass('stop').addClass('start');
  },
  resetClock: function() {
    this.stopClock();
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.displayTime();
  },
  
  bind: function() {
    $('#buttons').on('click', '.start', $.proxy(this.startClock, this));
    $('#buttons').on('click', '.stop', $.proxy(this.stopClock, this));
    $('#buttons').on('click', '#reset', $.proxy(this.resetClock, this));
  },
  init: function() {
    this.bind();
    
  }
}

stopWatch.init();