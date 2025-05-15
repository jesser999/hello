function productr(array){
    if (array.length === 1){
        return array[0]
    }return array[0] * productr(array.slice(1))
}

function product(array){
    var result = 1
    for ( var i = 0; i < array.length ; i=i+1){
        result = result * array[i]
    }return result 
}

function subtractreverse(array){
    if (array.length===1){
        return array[0]
    }return array[array.length-1] - subtractreverse(array.slice(0,array.length-1))
}

function subtractReverse(array){
    var result = array[array.length-1]
    for (var i = array.length-2; i >= 0 ; i=i-1){ 
        result = result - array[i]
    }return result
}
    
function sumuntil(array,index){
    if (index===0){
        return array[0]
    }return array[index] + sumuntil(array,index-1)
    }

    function sumUntil(array,index){
        var result = 0
        for ( var i = 0; i<=index;i++){
            result = result + array[i]
        }return result
    }

    function sumStart(array,index){
        if (index===array.length-1){
            return array[index]
        }return array[index] + sumStart(array,index+1)
    }

    function sumStartAt(array, index) {
        var result = 0
        for (var i = index; i<array.length;i++){
            result = result + array[i]
        }return result
    }


    function sumStartAt(array, index) {
        var result = 0
        for (var i = index; i<array.length;i++){
            result = result + array[i]
        }return result
    }

    function sum(array){
        if (array.length===0){
            return 0
     }return array[0] + sum(array.slice(2)) 
    }

    function sumEveryOther(array){
        var result = 0
       for(var i = 0;i<array.length;i=i+2){
           result = result + array[i]
       }return result
    }

    function sum(array){
        if (array.length===0){
            return 0
     }return array[0] + sum(array.slice(1)) 
    }


    function sum(array){
        var result = 0
       for(var i = 0;i<array.length;i++){
           result = result + array[i]
       }return result
    }
    


function square(array){
    var result = []
        for (var i = 0; i<array.length ; i++){
            result = result + (array[i]*array[i])+ ","
        }return [result]
}

function squar(array){
    if (array.length === 0){
        return []
    }
    return [array[0]*array[0]+"," + squar(array.slice(1))]
}


function squa(array){
    var result = []
        for(var i = 0; i<array.length;i++){
            result.push(array[i]*array[i])
        }return result
}
  
function isArray(array){
    if (Array.isArray(array)){ 
        return true;
    }
    return false;
}


function min(array){
    if (array.length === 0){
        return "empty"}
    var result = array[0]
    for (var i = 1; i < array.length; i++) {
   if (array[i] < result){
       result = array[i]
    } 
    }return result 
}


function max(array){
    if (array.length === 0){
        return "empty"}
    var result = array[0]
    for (var i = 1; i < array.length; i++) {
   if (array[i] > result){
       result = array[i]
    } 
    }return result 
}


function longeststring(array){
    if (array.length === 0){
        return "empty"}
    var result = array[0].length
    for (var i = 1; i < array.length; i++) {
   if (array[i].length > result){
       result = array[i].length
    } 
    }return result 
}


function shortstring(array){
    if (array.length === 0){
        return "empty"}
    var result = array[0].length
    for (var i = 1; i < array.length; i++) {
   if (array[i].length < result){
       result = array[i].length
    } 
    }return result 
}


function longeshortest(array){
    if (array.length === 0){
        return "empty"}
    var result1 = array[0]
    var result2 = array[0]
    for (var i = 1; i < array.length; i++) {
   if (array[i].length > result1.length){
       result1 = array[i]
    } 
    if (array[i].length < result2.length){
       result2 = array[i]
    } 
    }return [result1 +"," + result2]
}


function minmax(array){
    if (array.length === 0){
        return "empty"}
    var result1 = array[0]
    var result2 = array[0]
    for (var i = 1; i < array.length; i++) {
   if (array[i] < result1){
       result1 = array[i]
    } 
    if (array[i] > result2){
       result2 = array[i]
    } 
    }return [result1 +"," + result2]
}

function multiplaybynbr(array,nbr){
    
    for (var i = 0 ; i< array.length ; i++){
        array.splice(i,1,(array[i]*nbr)) 
    }return array
}


function multiplaybyindex(array){
    for (var i = 0 ; i< array.length ; i++){
        array.splice(i,1,(array[i]*i)) 
    }return array
}


function lengths(array){
    for(var i = 0 ;i<array.length ; i++){
        array.splice(i,1,array[i].length)
    }return array
}

function length(array){
    function counter(index){
    if (index === array.length){
        return 
} array[index] = array[index].length
      counter(index+1)
    } counter(0)
    return array
}


function totalnumberOfchar(array){
    if (array.length === 0){
        return "empty"}
    var result = array[0].length
    for (var i = 1; i < array.length; i++) {
   result = result + array[i].length 
    }return result 
}

function filter(array){
    var result = []
    for (var i = 0; i<array.length;i++){
         if (array[i].length%2===0){
            result.push(array[i])
         }       
    }return result
}


function popLastElement(array) {  
    var result = [];  
    
    for (var i = 0; i < array.length; i++) {  
               var item = array[i].pop(); 
            result.push(item); 
    }   return result;  
}  


function reverseIterateAndLogRecursively(n) {
    if(n===0){
       console.log(n+' is even')
       return
    }
    if(n%2===0){
      console.log(n+' is even')
    }
    if(n%2!==0){
      console.log(n+' is odd')
    }
     reverseIterateAndLogRecursively(n-1)

}
/*****************************  14  ***********************/
function evenDigitsFor(str){
  for(var i=0;i<str.length;i++){
    if(parseInt(str[i])%2!==0){
      return false
    }    
  }
  return true
}
function evenDigitsRecursion(str){
  if(str.length===0){
    return true
  }
  if(parseInt(str[0])%2!==0){
    return false
  }
 return evenDigitsRecursion(str.slice(1))
}


// ==> [[1,2],[1,2],2]===> [1,2,1,2,2]
function flatten(array){
  var acc=[]
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){

      acc=acc.concat(flatten(array[i]))
    }else{
      acc.push(array[i])
    }
  }
  return acc

}