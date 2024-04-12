

//Largest Number in the array
let array = [1,2,2,3,5,6,435,23,33,21,233,544,1009,4,32];


let largestNumber = array[0];

for(let i = 0;i<array.length;i++){
  if(array[i]>largestNumber){
    largestNumber = array[i]
  }
}
console.log(largestNumber);












//get the highest number among numbers


let a=1,b=2,c=3;

let largest = a;
if(largest<b){
  largest = b;
}
if(largest<c){
  largest = c;
}

console.log(largest)























// checking if the number is prime or not


let num = prompt('enter number');
num = Number(num);



// putting isPrime is equals to true for always
let isPrime = true;


// isPrime is false for number less than 2
if(num<2){
  isPrime = false;
}

// just initialize an array for getting the numbers on which a non prime number is divisible
let arr = [];



// now applying for loop for checking that number is prime or not
// the initializer of for loop is used as the (divisor) in the if statement's condition
for(let i = 2;i<num;i++){
   if(num%i==0){
    arr.push(i);              //for every number when condition of if statement gets true it will push that number in the array 
    isPrime = false;         // if the number is divisible by anynumber except 1 and the number itself, isPrime becomes false
   }
}

if(isPrime==false){
  console.log('number is not prime because it is divisible by ' + arr)
}else{
  console.log(isPrime);
}




















    //Even numbers till the number

    let n = parseInt(prompt('enter a number'));
    for(let i = 0; i<=n ; i++){
      if(i%2==0){
        console.log(i);
      }
    }






    //Odd number 

    let n = parseInt(prompt('enter a number'));
    
    for(let i = 0 ; i<=n;i++){
      if(i%2!=0){
        console.log(i)
      }
    }









    // sum of all even numbers from 0 till the given number

    
    let n = parseInt(prompt('enter a number'));
    let sum = 0;
     for(let i = 0; i<=n ; i++){
       if(i%2==0){
         sum+=i
       }
     }
     console.log(sum);








    // sum of all odd numbers from 0 till the given number


    let n = parseInt(prompt('enter a number'));
    let sum =0;
    for(let i = 0 ; i<=n;i++){
      if(i%2!=0){
        sum += i
      }
    }
console.log(sum);
















// check if the number is palindrome or not

let str = prompt('enter a word');
let isPalindrome = true;
for(let i = 0 ; i<str.length/2;i++){
  if(str[i]!== str[str.length-1-i]){
    isPalindrome = false
  }
}
console.log(isPalindrome);







// example by blackBox

// function palindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   for(var i = 0; i < str.length/2; ++i) {
//     if(str[i] !== str[str.length-i-1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome("My age is 0, 0 si ega ym."));















// prime factors of a number

// let n = 10;
// let arr=[];
// for(let i = 1 ; i<n ;i++){
//   if(n%i==0){
//     arr.push(i)
//   }
// }
// console.log(arr)















//print wrong number until the number 34

// let inside;
//     for(let i = 0 ; inside!=34 ; i++){
//       inside = parseInt(prompt('enter number'))
//       if(inside!=34){
//         alert('wrong number')
//       }
//     }