//ternary operators are shorthand of if else statement





condition ? expr1 : expr2,

// A ternary operator in JavaScript is a shorthand way of writing an if-else statement. It takes the form of condition ? expr1 : expr2, where condition is a boolean expression, expr1 is the result when the condition is true, and expr2 is the result when the condition is false.





let a = prompt('your age?');
let b = a>=18? "drive": "not drive";
alert('you can ' + b)











//------------------------------------------------------------------------------------------------------------------------------------------







console.log('full marks are 1100')
let marks = prompt('enter obtained marks');

let result = ((marks/1100)*100 > 33)? 'you are passed': 'you are failed';

console.log(result);










//------------------------------------------------------------------------------------------------------------------------------------------









let x = prompt('enter a number');
x = Number.parseInt(x);

let b = x>=0? 'positive':'negative';

console.log(b);












//------------------------------------------------------------------------------------------------------------------------------------------





let age = prompt('enter your age');
let b = age>=18? 'can':'can\'t';
console.log(`you ${b} drive`)












let userName = prompt('enter your name');


let output = "hey " + (userName? userName:'stranger') +' how are you';
console.log(output) 






















let x = Number(prompt('enter the value of x'));

!x?alert('sidhi bakwaas kr'):(x%2==0 && x%3==0)?console.log('number is divisible by 2 and 3'): (x%2==0)?console.log('only divisible by 2'):(x%3==0)?console.log('only divisible by 3'):console.log('not by 3 or 2')
