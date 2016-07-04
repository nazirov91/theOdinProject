console.log("FINDING THE SUM OF MULTIPLES OF 3 and 5");


function sumOfMultiples(number1, number2, limit){
  var sum = 0;
  
  for(var i = 1; i < limit; i++){
     if((i%number1)== 0 || (i%number2) == 0){
         sum += i;
     }
  }
  
  return sum;
}

console.log(sumOfMultiples(3, 5, 10));
