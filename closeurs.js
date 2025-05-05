function makeCounter(initial){
    var counter = initial
    function count(){
        counter = counter + 1
        return counter 
    } return count
}
var counter1 = makeCounter(1)


function cal(initial){
    var counter = initial
    function pow(){
        counter = counter ** initial
        return counter 
    } return pow
}


function add(){
    var sum = 0
    return function(...n) {
        for (var i = 0; i < n.length; i++) {
           sum = sum + n[i] 
        }
        return sum
    }
}



function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.'
},
    deposit: function(amount) {
         balance = balance + amount;
         return 'you add ' + amount + ' and Your balance is: $' + balance;
         },
       checkBalance :function (){
          return 'Your balance is: $'+ balance
       }
   }

}

function makeCounter(initial){
    var counter = initial
   return {
      countUp : function (){
        counter = counter + 1
        return counter 
    
},
    countDown :  function (){
        counter = counter - 1
        return counter
    },
       reset : function(){
           return counter = initial }
   }
}

function guessing(number){
    var rand = randInt(number)
    var m = 0
    function guessMyNumber(n) { 
         var upperBound = number
         
        m = m + 1
     if (n > upperBound) { 
     return 'Out of bounds! Please try a number between 0 and ' + upperBound; 
     } else if (n === rand) { 
     return 'You guessed my number in ' + m + ' time' ; 
     } 
     return 'Nope! That wasn\'t it! ' ; 
     } 
     function randInt(n) { 
     return Math.floor(Math.random() * (n + 1)) 
     } return guessMyNumber
    }


    function guessing(n){
        var rand = randInt(n)
             var m = 0
            function randInt(n) { 
        return Math.floor(Math.random() * (n + 1)) 
        }
         return {
           guessMyNumber : function (n) { 
            var upperBound = n
            
           m = m + 1
        if (n > upperBound) { 
        return 'Out of bounds! Please try a number between 0 and ' + upperBound; 
        } else if (n === rand) { 
        return 'You guessed my number in ' + m + ' time' ; 
        } 
        return 'Nope! That wasn\'t it! ' ; 
        
},
        giveUp : function(){
            return " i give up i'm just a weak chicken "
        },
             numGuesses : function(){
                 return m
             }
         }
}


function add(num) {
    var sum = num

    function inner(next) {
      if (typeof next === 'undefined') {
        return sum;
      }
      sum = sum+next;
      return inner;
    }

    return inner;
  }

  function someEven(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 ){
            return true 
    }
    }return false
}

function someOdd(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 ){
            return true 
    }
    }return false
}


function somepositive(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 ){
            return true 
    }
    }return false
}

function somnegative(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0 ){
            return true 
    }
    }return false
}