//console.log("FINDING THE SUM OF MULTIPLES OF 3 and 5");

var value1, value2, limit;

function multiples(){
	value1 = document.getElementById("value1").value;
	value2 = document.getElementById("value2").value;
	limit = document.getElementById("limit").value;
	document.getElementById("result1").innerHTML = sumOfMultiples(value1, value2, limit);
}

function sumOfMultiples(number1, number2, limit){
  var sum = 0;
  
  for(var i = 1; i < limit; i++){
     if((i%number1)== 0 || (i%number2) == 0){
         sum += i;
     }
  }
  
  return sum;
}

//2console.log(sumOfMultiples(3, 5, 1000));

//######################################################################
// SUM OF EVEN FIBONACCI NUMBERS -----------
//console.log("SUM OF EVEN FIBONACCI NUMBERS");
var lim;
function fibonacci(){
	lim = document.getElementById("fibLimit").value;
	document.getElementById("result2").innerHTML = sumOfEvenFibonacci(lim);
}

function findFibonacci(value){
  if(value <= 1){
     return value;
  }
  return findFibonacci(value - 1) + findFibonacci(value - 2);
}

function sumOfEvenFibonacci (limit){
	var sum = 0;
	var counter = 0;
	var current = findFibonacci(counter);
	  while(current < limit){
	    if(current % 2 === 0){
	      sum += current;
	    }
	    counter++;
	    current = findFibonacci(counter);
	  }
	  return sum;
}
//console.log(sumOfEvenFibonacci(55));
//######################################################################

function prime(){
    var value = document.getElementById("factorValue").value;
    var prime = 2;
    var done = false;
    
    while (done == false){
        if (value%prime == 0){
            value = value/prime;
            if (is_prime(value)){
                done = true;
            }
        } else {
            prime = nextPrime(prime);
        }
    }
    document.getElementById("result3").innerHTML = value;
}


// --> nextPrime <--
// Finds and returns the next prime number
function nextPrime(prime){
    var a = false;
    while (a === false){
        prime++;
        if (is_prime(prime))
            a = true;
    }
    return prime;
}
//console.log("Largest prime factor: ", value);

// --> is_prime <--
// Determines if the integer accepted is prime or not
function is_prime(n)
{
    var i, count=0;
    if(n==1 || n==2)
        return true;
    if(n%2==0)
        return false;
    for(i=1;i<=n;i++)
    {
        if(n%i==0)
            count++;
    }
    if(count==2)
        return true;
    else
        return false;
}











