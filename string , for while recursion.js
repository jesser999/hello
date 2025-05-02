var carName = "volvo"

var length = 16 ; //number
var lastName = "johnson" ; //string
var scores = [20, 12, 15, 14, 20, 10, 2]; //array
var isGreaterThan10 = length > 10 
var person = {
  firstName: "John",
  lastName: "Doe"
}; //function
var isGreaterThan10 = length > 10 //boolean

function square1(x) { 
    return x * x ; 
    } 
    
    function square2(x) {
    return x * x ; 
    }
    
    function square3(x)  { 
    return x * x;
    }
    
    function largest(nbr1,nbr2) {
        if (nbr1>nbr2){
            return (nbr1)
        }return (nbr2)
    }

    function add(number1,number2){
        var sum = number1 + number2
    return sum
}

function subtract(number1,number2){
    var sum = number1 - number2
return sum
}


function add(number1,number2){
    var sum = number1 + number2
return sum
}
function subtract(number1,number2){
    var sum = number1 - number2
return sum
}
function divide(number1,number2){
    var sum = number1 / number2
return sum
}
function multiply(number1,number2){
    var sum = number1 * number2
return sum
}
function todo(string){
var operator = '+'
var number1 = 2
var number2 = 5
if ( string === operator){
    return (add)
}else return (subtract)
}


function add(number1,number2){
    var sum = number1 + number2
return sum
}
function subtract(number1,number2){
    var sum = number1 - number2
return sum
}
function divide(number1,number2){
    var sum = number1 / number2
return sum
}
function multiply(number1,number2){
    var sum = number1 * number2
return sum
}
function todo(string){
var operator = '-'
var operator1 = '+'
var operator2 = '/'
var operator3 = '*'
var number1 = 2
var number2 = 5
if (string === operator){
    return (subtract)
}else if ( string === operator1){
    return (add)
}else if (string === operator2){
    return (divide)
}else if (string === operator3){
    return (multiply)
}else console.log ("Sorry, we don't know this operator")
    
}

function add(number1,number2){
    var sum = number1 + number2
return sum
}
function subtract(number1,number2){
    var sum = number1 - number2
return sum
}
function divide(number1,number2){
    var sum = number1 / number2
return sum
}
function multiply(number1,number2){
    var sum = number1 * number2
return sum
}
function calculate(operator, number1, number2) {
    if (operator === '+'){
        return (add)
    }else if (operator === '-'){
        return (subtract)
    }else if (operator === '/'){
        return (divide)
    }else if (operator === '*'){
        return (multiply)
    }else console.log ("Sorry, we don't know this operator")
}

function capitalize(string) {
    string=string.toUpperCase([0])
    return string
}
  
function billing(price1,price2,price3){
    var sum = price1 + price2 + price3
    sum = sum.toFixed(2)
    var tip = (15/sum)*100
    var totalpay= sum + tip
    return ("your total is " + totalpay + " thank you for the " + tip+ "tip")
}
 
function awesomeMessage(firstName,interest,hobby) {
    var message = ("")
            message = firstName+interest+hobby
    return message
}

function parity(number) {
    if(number%2===0){
        return "even"
    }else return "odd"
}



function removeCharacter(string, position) {   
    return string.slice(0, position) + string.slice(position + 1);  
} 


function iterateAndLogfor(nbr){
    for (var i = 0; i<= nbr; i++){
        var result = ""
        if (i % 2===0){
             result = i + " is even"
        }else result = i + " is odder"
        console.log(result)
    }
}

function itrateAndLog(nbr){
    var i = 0
    while (i<=nbr) {
          var result = ("")
        if (i % 2===0){
             result = i + " is even"
        }else result = i + " is odder"
        console.log(result)
        i++
    }
}


function itrateAndLogrec(nbr){
    if ( nbr === 0){
        return " 0 is even"
    }
    if (nbr %2 === 0){
        return nbr +" is even"
    } else nbr + " is odder"
    console.log(itrateAndLog(nbr - 1))
}

function itrateAndLogrec(nbr){
    if ( nbr === 0){
         console.log(" 0 is even")
        return
    }
    if (nbr %2 === 0){
        console.log(nbr +" is even")
    } 
    if (nbr % 2 !== 0){
     console.log(nbr + " is odder")
    }
itrateAndLog(nbr - 1)
}


function weirdDivisionWithFor(n) {
    for (var i =1 ; i<=n;i++){
        if (i %3===0){
            console.log( i + " julia")
        }if (i%5===0){
            console.log( i + " james")
        }if ( i%3===0 && i%5===0){
            console.log( i + " juliajames")
        }if (i%3!==0 || i%5!==0){
            console.log(i)
        }
    }
}

function weirdDivisionWithwhile(n) {
    var i =1
     while ( i<=n){
         if (i %3===0){
             console.log( i + " julia")
         }if (i%5===0){
             console.log( i + " james")
         }if ( i%3===0 && i%5===0){
             console.log( i + " juliajames")
         }if (i%3!==0 || i%5!==0){
             console.log(i)
         }
         i++
     }
 }

 function weirdDivisionWithrec(n){
    if (n===0){
        return ("")
    }
    if (n %3===0){
            console.log( n + " julia")
        }if (n%5===0){
            console.log( n + " james")
        }if ( n%3===0 && n%5===0){
            console.log( n + " juliajames")
        }if (n%3!==0 || n%5!==0){
            console.log(n)
    }weirdDivisionWithrec(n-1)
}


function laughWithFor(number) {
    var str = ""
    for( var i = 0; i<number ; i++){
        str = str + "hi"
    }return str
}


function laughWithwhile(number) {
    var str = ""
    var i = 1;
    while(  i<=number ){
        str = str + "hi"
        i++
    }return str
}
   
function laughwithrec(number){
    if (number === 0){
        return ("")
    } return "ha" + laughwithrec(number-1)
}


function sumWithWhile(number) {
    var result = 0
    var i = number
    while( i>=1){
        result = result + i
        i--
    }return result
}
   

function sumWithfor(number) {
    var result = 0
    for(var i = number; i>=1;i--){
        result = result + i
    }return result
}
   


function factorialRecursively(number) {
    if (number === 1){
        return 1
    } return number * factorialRecursively(number-1)
}

function rangefor(min, max) {
    var result = [];
    for (var i = min ; i < max; i++) {
        result.push(i);
    }
    return result;
}

function rangewhile(min,max){
    var reslt = []
        var i = min 
    while (i<max) {
        reslt.push(i)
        i++
    }return reslt              
}


function reversewithfor(str){
    var result = ("")
    for (var i = str.length-1 ; i >=0;i--){
        result = result + str[i]
    }return result
}

function reversewithwhile(str){
    var result = ("")
    var i = str.length-1
    while (i>=0) {
        result = result + str[i]
        i--
    }return result
}


function reverserecursively(str){
    if (str.length === 0){
        return ("")
    } return str[str.length-1] + reverserecursively(str.slice(0,str.length-1))
}

function addDigits(num){
    var nums = num.toString()
    var res = 0
    for (var i = 0; i < nums.length ; i++) {
        res = res + parseInt(nums[i])
    }return res  
    }

    function fibRecursive(number){
        if ((number === 0) || (number === 1)){
            return 1
        }return fibRecursive(number-2) + fibRecursive(number-1)
    }
    function fibsquence(n){
        var res = []
            for (var i = 2; i <= n; i++) {
                res.push(fibRecursive(i))
            }return res
                
            }

    function firstDigits(str){
    
            for (var i = 0; i < str.length; i++) {
                if (!isNaN(str[i])){
                 return str[i]
                    }
            }
     }

     function firstDigitswhile(str){
        var i = 0 
      while ( i < str.length ) {
          if (!isNaN(str[i])){
          return str[i]
              
          }i++
      }
      }

      function remove(array,element){
        for (var i = 0; i < array.length ; i++) {
            if( array[i] === element){
                array.splice(i,1)
            }
            }return array
            
        }


        function average(arrOfNumbers) {
            var sum = 0
            var avg = 0
            for (var i = 0; i < arrOfNumbers.length; i++) {
                sum = sum + arrOfNumbers[i]
            } avg = sum / arrOfNumbers.length
            return avg
        }

        function findMax(str){
            var max = str[0]
                for (var i = 0; i < str.length; i++) {
                    if (max < str[i]){
                        max =str[i]
                    }
                }return max
                }


                function findmaxrec(str,max=str[0]){
                    if (str.length === 0){
                        return max}
                    if (max < str[0]){
                         max = str[0]}
                    return findmaxrec(str.slice(1),max)
                }

                function evendigits(string){
                    var res = 0
                   for (var i = 0; i < string.length; i++) {
                      res = res + parseInt(string[i])
                   }
                   if (res% 2 === 0){
                       return true
                   }
                     if  (res% 2 !== 0){
                         return false
                   }
               }


               function findcombinations(row , seats){
                for (var row = 0; row < 26; row++) {
                  for (var seats = 0; seats < 100; seats++) {
                    console.log(row , seats  )
                  }  
                }
            
            }