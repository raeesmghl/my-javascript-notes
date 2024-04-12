

The = Operator:

The Simple Assignment Operator assigns a value to a variable

example:


let x = 5;
console.log(x); // will print 5 because x is assigned to 5;





let x = 5;
console.log(x);             //will print 5
let y = x;                     //assigning x to y
console.log(y);             //will print 5






let x = 5;

let y = x + 10 ;

console.log(y);           //will print 15












The += Operator
The Addition Assignment Operator adds a value to a variable.     (x+=y == x= x+y)

Examples:

let x = 10;
x += 5;            // x becomes 15 as x = 10  and  [( x+=5 ) == ( x = x + 5 )] , so : [x = 10+5] , which is 15
console.log(x);    //will print 15




similarly:

let text = "Hello";
text += " World";

document.write(text);    will print ( Hello World )





let x = 5;
console.log(x+=3)  // will print 8;





let x = '10';

x += '20';
console.log(x); //strings are concenated so Output : 1020





negative number:

let x = 70;

x+= -60;
console.log(x);   //Output : 10



























With a boolean:


let x = 50;
x+= true;
console.log(x);  //Output : 51;
// this is because:
//Boolean is true with a value,
//so a least value comes here, which is 1


but if:

let x = 40;
x+= false;
consoel.log(x) // Output : 40

//Booleans are false with 0 and without a value 
// if we add 0 , there is no change
// if we add nothing , there will be nothing






let x = 'raees';
x+= true;
console.log(x);    //Output : raeestrue  (concenated with string)



if:
x+= false;
console.log(x);   //Output : raeesfalse  (boolean value concenated with string)






















With undefined:


let x = 40;
x+= undefined;
console.log(x);   //Output : NaN ; x is a number and undefined is not a number



but if:



let x = '40';
x+= undefined;
console.log(x);   //Output : 40undefined (string concenated with undefined)




let x = 'raees';
x+= undefined;
console.log(x)   //Output: raeesundefined    (string concatenated with undefined)
























with null:

let x = 40;
x+= null;
console.log(x);   // will be 40 because null has no value 



but if:
     
let x = '40';
x+= null;
console.log(x);   // output: 40null  (string is concatenated with null)





let x = 'raees';
x+= null;
console.log(x);     //Output : raeesnull  

















With NaN :

let x = 10;
x += NaN;
console.log(x);   //Output : NaN 
//this is because we tell that the value sum with x is not a number , so they are not added
//they are concenated and we dont know what is the value if it is not a number
// so it will print NaN after concatenated




but if:

let x = 'raees';
x+= NaN;
console.log(x)     //Output : raeesNaN  (string and NaN are concatenated)





let x = '9';
x+= NaN;
console.log(x)     // Output : 9NaN  (concatenated)



























The (-=) Operator
The Subtraction Assignment Operator subtracts a value from a variable.

Example:
     
     
let x = 10;
x -= 5;             // (x -= 5) == (x = x - 5) 


console.log(x);     // will print 5




Simple Examples:


let x = 5; x -= 3; // x is now 2
let y = 10; y -= 5; // y is now 5
let z = 15; z -= 10; // z is now 5
let a = 20; a -= 1; // a is now 19
let b = 25; b -= 5.5; // b is now 19.5




let c = "Hello"; c -= "o"; // c is now NaN (not a number)

but if:

let g = "123"; g -= 23; // g is now 100  


JavaScript will try to convert strings to numbers in all numeric operations but not in alphabetic operations:



let d = [1, 2, 3]; d -= 1; // d is now NaN    because there are array methods to remove elements form arary 











with booleans:
     
     
let x = 10;

x -= true;
console.log(x);   //will print 9 




or:

let x = 10;
x-= false;
console.log(x);    // will print 10 









The (*=) Operator
     
The Multiplication Assignment Operator multiplies a variable.

Example :
     
     
     
let x = 10;
x *= 5;
console.log(x)    // will be 50 now








let a = 10;
let b = 3;

let z = a*=b;
console.log(z);   //will be 30









Multiply by a negative number:

let x = 9;

x*= -1;

console.log(x);    //will be -9









Multiplying a variable by a fraction:

let a = 5;
let b = 0.5;
let c = a *= b;       // in this step first a*=b is solved and found the value of 'a' and than 'a' is assigned to 'c',

console.log(c);       //will print 2.5











Multiplying an array by a number:

let arr = [1, 2, 3];
let num = 2;
arr *= num; // arr is now NaN (not a number)   there are array methods to do operations on array but this will not work


































The (/=) operator :
     
The Division Assignment Operator divides a variable.
     
     
     
  let x = 10;
x /= 5; 
console.log(x)    // will print 2;








let num = 10;
num /= 2;
console.log(num);       // Output: 5




divide by a decimal number:

let num = 20;
num /= 2.5;
console.log(num);     // Output: 8








divide by a negative number:


let a = 280;
let b = -70;
console.log(a/=b)   //Output : -4





or:

let a = 56;
a/=-7;
console.log(a);   //will print -8


     
     
     
     

divide by string:

let x = 60;
let y = '10';

x/=y;
console.log(x)   //Output: 6



but if:

let x = 'raees';
let y='raees';
x/=y;
console.log(x)    //Output : NaN . If strings were numeric values than operation is applied but with alphabeticm values, it is not


JavaScript will try to convert strings to numbers in all numeric operations but not in alphabetic operations:








divide by a boolean:


let num = 40;
num /= true;
console.log(num); // Output: 40   
//this is not NaN because Boolean is true with a value,
//so a least value comes here, which is 1
// so num = 40 , divided by 1 is still 40



but if it is false:

let x = 50;
x/= false;
console.log(x);    //Output : infinity
//this is because Boolean if false for 0 and without a value
//and if we devide some thing by 0, it is infinity and for (not a value) in the divisor it is also infinity
