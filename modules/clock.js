angular.module('clock', [])
  .controller('ClockController', function() {
    var clock = this;

    clock.time = Date.now();
  });