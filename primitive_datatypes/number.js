



JavaScript has only one type of number
Numbers can be written with or without decimals.

written withour quotes



let x = 10;
console.log(x);
console.log(typeof x)    //type is number
 

or:

let x = 0.7779;
console.log(x);
console.log(typeof x);    //type is number



but if:

let x = '20';
console.log(x);
console.log(typeof x);    //type of variable is string      because of double quotes




Adding subtracting multiplying dividing:

console.log(10+20);    //result 30

console.log(10-20);    //-10

console.log(10*20);    //200

console.log(10/20);    //0.5








Adding Numbers and Strings

WARNING

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.
If you add two numbers, the result will be a number
If you add two strings, the result will be a string concatenation
The JavaScript interpreter works from left to right.





let x = 10;
let y = 50;
let z = x + y;
console.log(z);             //will print 60
console.log(typeof z)       //will be number

//both were numbers therefore they are added





but if they are string, they are concatenated


let x = "10";
let y = "50";
let z = x + y;
console.log(z);             //will print 1050
console.log(typeof z)       //will be string






if you add a number and a string, the result will be string concatenation:



let x = 30;
let y = '50';
let z = x+y;
console.log(z)             //will result 3050       form left to right
console.log(typeof z)      //will result string 






change the position of x and y in z :

if there was a number so there will be the same result because they were added
but this is not addition, this is string concatination 
The JavaScript interpreter works from left to right.




this is actully adding a string and a number, not a number and a string

let x = 30;
let y = '50';
let z = y+x;
console.log(z)             //will result 5030       form left to right
console.log(typeof z)      //will result string 







If you add a string and a number, the result will be a string concatenation:



let x = "10";
let y = 20;
let z = x + y;
console.log(z);                 //will be 1020
console.log(typeof z);          //will be string










there are some examples of adding string and number


let x = 10;
let y = 20;
let z = 'raees';
console.log( x + y + z);     //will result   30raees
//this is because : from left to right first x and y are added because they both are numbers and then concatenate with string




if:

let x = 10;
let y = 20;
let z = 'raees';
console.log( x + z + y);    //will result 10raees20
//from left to right number(10) is concatenated with string(raees) and then string(10raees) is concatenated with number(20)


if:

let x = 10;
let y = 20;
let z = 'raees';
console.log(z + y + x);   //will be raees2010
//first z(string) is concatenated with number(y=20) then string(raees20) is concatenated with number(x=10)








more examples:



let x = 10;
let y = 20;
let z = "The result is: " + x + y;
console.log(z)                       //the result will be (The result is: 1020)



// the numbers are directly added with string so they are concaneted






but if:

let x = 10;
let y = 20;
let z = "The result is: " + (x + y);
console.log(z)                       //the result will be (The result is: 30)

//in this case, the bracket is solved first and it becomes 30 , then it is concatenated with string









another example:


let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
console.log(result)      //the result is 3030 because first numbers are added first and then concatenate with string









JavaScript will try to convert strings to numbers in all numeric operations:




This will work:

let x = "100";
let y = "10";
let z = x / y;
console.log(z)   //the result is 10





This will also work:
let x = "100";
let y = "10";
let z = x * y;
console.log(z)   //the result is 1000






And this will work:
let x = "100";
let y = "10";
let z = x - y;   
console.log(z)  //the result will be 90





But this will not work:
let x = "100";
let y = "10";
let z = x + y;
console.log(z)   //the result will be 10010
//this is because + sign is also used for string concatenation, so strings are concatenated

















Note:
+ operator is used to add numbers and also used for strings concatenation, and number and strings are also concenated
 when there are alphebetic values in a string, they are concenated even with numeric values, string are concenated
 
 
 
 
other operators like ( -,*,/,**,%) :
                     
                      
                     they are used for number type,
                     if we use them on string with numeric values, javascript will try to convert strings into numbers in all numeric values 
                     but if there are alphebetic values in string , Output will be NaN








String are of two type:
numeric string like('123') 'numbers written in quotes'.
alphabetic string like('abc');


when we talk about operations on them;

 (+) operataor:

+ operator is used for addition as well as string concetination;

numeric and alphebetic both types of strings are concatenated whten using + operator;


(-,*,/,%) operators:

 for numeric strings:
  javascript will try to convert numeric string into number and gives result in typeof number;

when there is a value of datatype number : the result is same ( number type remains number and numeric string is converted into number and result is typeof number);

when both are numeric strings( both are converted into number type and result is also a number type)





for alphebetic strings:

except + operator , when we apply any other operator on alphabetic strings, they return 'NaN';

when both are strings (NaN)
when one is numeric and other is alphabetic (NaN)
when there is any other datatype (NaN)





