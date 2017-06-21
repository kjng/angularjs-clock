angular.module('clock', [])
  .controller('ClockController', ['$interval', function($interval) {
    this.time = Date.now();

    $interval(function() {
      this.time = Date.now();
    }, 1000);
  }]);
