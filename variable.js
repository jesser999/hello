 function guessMyNumber(n) { 
     var upperBound = 6
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and upperBand.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number!'; 
 } 
 return 'Nope! The correct number was'; 
     return X = (n === randInt(upperBound)) ;
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }



function guessMyNumber(n) { 
     var upperBound = 6
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and upperBand.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number!'; 
 } 
 return 'Nope! That wasn\'t it!'; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }


var n = 1
function counter(){
    return n = n + 1
}


 var rand = randInt(6)
function guessMyNumber(n) { 
     var upperBound = 6
    
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and upperBand.'; 
 } else if (n === rand) { 
 return 'You guessed my number!'; 
 } 
     return 'try again' ; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }


 var rand = randInt(6)
var m = 0
function guessMyNumber(n) { 
     var upperBound = 6
    m = m + 1
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and upperBand.'; 
 } else if (n === rand) { 
 return "You guessed my number in " + m + " guess"; 
 } 
     return 'try again' ; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }
var rand = randInt(7)
var m = 0
function guessMyNumber(n) { 
     var upperBound = 7
     
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
 }


var rand = randInt(7)
var m = 0
var maxGuess = 5
function guessMyNumber(n) { 
     var upperBound = 7
    m = m + 1
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and ' + upperBound; 
 }
 else if (m > maxGuess){
     return "youlose" ;
 }
 else if (n === rand) { 
 return 'You guessed my number in ' + m + ' time' ; 
 }
 return 'Nope! That wasn\'t it! ' ; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }



var upperBound = 5
var higherscore = 1
var m = 0
function guessMyNumber(n) {
     var rand = randInt(upperBound)
   m = m + 1
    higherscore = m
    var limit = 5
    if ( m > limit){
        return ' you lose ' ;
    }
 else if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and ' + upperBound ; 
 } else if (n === rand) { 
 return 'You guessed my number in ' + m + ' tries and you achieve a new high score the lowest number of guesses is '+ higherscore + ' guesses and the difficulty is icreased by incresasing the upperbound to ' + (upperBound = upperBound + 2) ; 
 } 
    else if ( n > rand ) {
 return 'Nope! That wasn\'t it and the difficulty is decreased by decresasing the upperbound to ' + (upperBound = upperBound - 1 ) + ' and you are higher the guess '; 
    }
    return 'Nope! That wasn\'t it and the difficulty is decreased by decresasing the upperbound to ' + (upperBound = upperBound - 1 ) + ' and you are lower the guess ';
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }