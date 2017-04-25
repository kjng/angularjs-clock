angular.module('clock', [])
  .controller('ClockController', ['$interval', function($interval) {
    var clock = this;

    clock.time = Date.now();

    $interval(function() {
      clock.time = Date.now();
    }, 1000);
  }]);