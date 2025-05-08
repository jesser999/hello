function MakeAccount(initial) {
    var acc  = {}
    acc.balance = initial;
    acc.withdraw = withdraw ;
    acc.deposit = deposit ;
    return acc;
}
var withdraw = function(amount) {
               if (this.balance - amount >= 0) {
                    this.balance = this.balance - amount;
                    return 'Here is your money: $' + amount;
               }
                     return 'Insufficient funds.';
          };
var deposit = function(amount) {
               this.balance = this.balance + amount;
               return 'Your balance is: $' + this.balance;
          };


            function MakeStopwatch() {
    var stopwatch = {}
     stopwatch.stop = null;
     stopwatch.time = 0;
    stopwatch.start = start;
     stopwatch.pause = pause ;
    stopwatch.reset = reset;
     return stopwatch
}
var start = function() {
    var that = this
               this.stop = setInterval(function() {
               that.time = that.time + 1;
               console.log('Elapsed time: ' + that.time + 's.');
          }, 1000);
}
var pause = function() {
               clearInterval(this.stop);
          };
var reset = function() {
               clearInterval(this.stop);
               this.time = 0;
          }


          function Toaster() {
            var instance = {};
            instance.toast = null
            instance.eject = eject
            instance.addToast = addToast
            return instance;
        }
        var addToast = function(toast) {
               return this.toast = toast;
            };
         var   eject= function() {
                if (this.toast === null || this.toast === undefined) {
                    return "The toaster is empty.";
                } else {
                    var ejectedToast = this.toast;
                    this.toast = undefined; 
                    return `Ejected: ${ejectedToast}`;
                }
            }
    