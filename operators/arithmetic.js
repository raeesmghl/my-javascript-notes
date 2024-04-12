JavaScript Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables)




example: for literals

console.log(3+9);    //adding 3 and 9 which is 12


for variables:

let x = 10;
let y = 20;
console.log(x+y); //will result 30







Operators and Operands:

The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.











Addition (+):

 let x = 30;
 let  y = 50;
 let z = x + y ;
 console.log(z);
 
 
 
 for string:     this is string concatenation as discussed in the datarypes (string and number)
 
 let x = 'raees ';
let y = 'mughal';
let z = x + y;
console.log(z);















Subtraction (-):


let x = 50;
let y = 40;

let z = x-y;
console.log(z);   //will result 10




















Multiplication (*):


let x = 50;
let y = 40;

let z = x*y;
console.log(z);  //will result 2000



















Division (/):


let x = 50;
let y = 40;

let z = x/y;
console.log(z);   will result 1.25












Exponentiation (**):
The exponentiation operator (**) raises the first operand to the power of the second operand.


let x = 2;
let y = 10;

let z = y**x;
console.log(z);        //will print 100 as 2 is power of 10

















Modulus or Remainder (%):

The modulus operator (%) returns the division remainder.




let x = 5;
let y = 2;
let z = x%y;

console.log(z); //will print 1 (remainder)

















Incrementing: (++)
               
               
The increment operator (++) increments numbers.

there are two types of increments : 1. postfix , 2. prefix





=====================[postfix increment]=========================

 
 postfix increment is that in which operator returns the value before incrementing



a++ == a+1


let a = 5;
a++;                    //the process is reassigning a
console.log(a);         //the result will be 6



but if:
let a = 5;
console.log(a++);   //will be 5   (postfix)



this is because : 1st console printed a and than added 1 into it as:

now if we check the value of a , it will be (a+1):

console.log(a);    // will be 6     





Another Example:

let a = 5;
let b = 3;

a++;                //incrementing
console.log(a+b);   //will be 9




but if:

let a = 5;
let b = 3;
console.log(a++ + b);   // will be 8

// first a is printed by console and than 1 is added to a.

now if we check the value of a, it will be 6 as:

console.log(a);   // will be 6.















=====================[prefix increment]=========================

 prefix increment is that in which operator first adds 1 in the value and than increments
 
 ++a == 1+a



let x = 1;
console.log(++x);   //will print 2

//this is because : first 1 is added to x and than console returned the value





let a = 5;

++a;
console.log(a);   // will print 6


but if:

let a = 5;
console.log(++a); //also prints 6























decrementing(--):

             
the same as increment.
             
             
there are two types of decrements : 1. postfix , 2. prefix
             
             
             
             
=====================[ postfix ]===========================

 
 a-- == a-1 

value is printed first and than 1 is decremented
 

let x = 5;
x--;
console.log(x);      //will print 4


but if:
let x = 5;
console.log(x--);  //will print 5 because of postfix decrementing , in which x is printed first and than 1 is subtracted from x

but in the next step it will be 4:
as:

console.log(x);   // will be 4













let a = 5;
let b = 4;

a--;              //decrementing 
console.log(a+b); //will print 8


but if:

let a = 5;
let b = 4; 
console.log(a-- + b);     //will print 9

//this is because, first a is printed and than 1 is added to it , but in this step it will be 5 and in the next step it will be 4 as:

console.log(a);  //will be 4


















======================[prefix]============================
 
 
 --a == -1+a

 in prefix decrementing, 1 is subtracted first and than resulted is printed
 
 
 
 
 
 
let x = 5;
--x;
console.log(x);    // will print 4



but:

let x = 5;
console.log(--x);   // also prints 4
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
==========================================[ Examples ]===========================================
 
 
 
 
 
 
let a = 1;
console.log(a++ + a-- + a--);              //form this step, the original value of a remains 0, 
console.log(a);                            // will be 0




 In this code, the value of 'a' is initially set to '1'

The first (console.log) statement will output 4, which is the result of the expression (a++ + a-- + a--). 

Here's how the expression is evaluated:

a++ increments the value of a to 2 and returns the original value, which is 1. So, the expression is now 1 + a-- + a-- and a is now 2.
a-- decrements the value of a to 1 and returns the original value, which is 2. So, the expression is now 1 + 2 + a-- and a is now 1.
a-- decrements the value of a to 0 and returns the original value, which is 1. So, the expression is now 1 + 2 + 1, which evaluates to 4.
The second console.log statement will output 0, which is the current value of 'a' after the previous expression has been evaluated.
This is because 'a' was decremented twice in the previous expression, so its value is now 0.




 
 
 




=====================================[Example by Harry]=========================================
 
 
 let a = 10;

console.log(++a);    // will print 11 and value of 'a' becomes 11
console.log(a++);    // will print 11 and now the value of 'a' 12
console.log(--a);    // will print 11 and value of 'a' becomes 11
console.log(a--);    // will print 11 and value of 'a' becomes 10
console.log(a);      // will return 10
console.log(a--);    // will return 10 and value of 'a' becomes 9

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
