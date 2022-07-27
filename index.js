/**
 * factorial using for loop
 */

const num = 5;
var fact = 1;

for(let i =1; i <= num; i++){
    fact = fact*i;
}
console.log(fact)


/**
 * factorial using while loop
 */

const num1 = 5;
var fact = 1;
var i = 1;
while(i<=num1){
    fact = fact*i;
    i++;
}
console.log(fact)


/**
 * alculate factorial in a recursive function
 */
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n*factorial(n-1)
    }
}
var result = factorial(5);
console.log(result);

/**
 * create a fibonacci series using for loop
 */

function fibonacci(n){
    var fibo = [0,1];
    for(let i = 2; i <=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];

    }
    return fibo;
}

var result_ = fibonacci(10)
console.log(result_)


/**
 * check prime number
 */

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n%i == 2){
            return 'Not a Prime number';
        }
    }
    return 'Your number is a prime number'
}

var result__ = isPrime(5);
console.log(result__)


/**
 * sum all number using reduce function
 */
var num2 = [1,2,3];
var sum = num2.reduce((a,b) =>{
    return a+b;
} ) 

console.log(sum)


/**
 * Reverse a stirng
 */

function reverseNow(string){
    return string.split('').reverse().join('');
}

const str = 'My Name is Alamin';
const now = reverseNow(str)
console.log(now)






