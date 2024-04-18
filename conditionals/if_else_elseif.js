


let obj = {
  name: 'raees',
  class: 'frontend'
};

if (obj['name'] == 'raees') {
  console.log('you\'re right')
}


//-----------------------------------------------------------------------------------------------------------------------------------------




let a = prompt('your age');
if (a < 0) {
  alert('incorrect age is entered');
} else if (a > 0 && a < 18) {
  alert('this content is not for you. You should stay away from this site. Go and watch pogo')
} else {
  alert('you\'re welcome sir')
}



//-----------------------------------------------------------------------------------------------------------------------------------------


let x;
if (!x) {
  console.log('x is not defined')
}




//-----------------------------------------------------------------------------------------------------------------------------------------





let string = 'abcd';
if (string.length == 4) {
  console.log('the length is four')
}





//-----------------------------------------------------------------------------------------------------------------------------------------







let str = '';
if (!str.length) {
  console.log('the string is empty')
}







//-----------------------------------------------------------------------------------------------------------------------------------------





let arr = [1, 2, 3, 4, 5, 6]
if (!(arr.length == 3)) {
  console.log('the line of code')
}








//-----------------------------------------------------------------------------------------------------------------------------------------






const element = array[index];
let array = [1, 2, 3, 4, 5]
console.log(array.length)
if (array.length < 5) {
  console.log('the length of array is less than 5')
}
else if (array.length > 5) {
  console.log('the length of array is greater than 5')
}
else if (array.length == 5) {
  console.log('the length of array is equals to five')
}








//-----------------------------------------------------------------------------------------------------------------------------------------







let n = prompt('enter a number');
if (n < 5) {
  console.log('the number is less than 5')
} else if (n > 5) {
  console.log('the number is greater than five')
}
else if (n == 5) {
  console.log('the number is five')
}






//-----------------------------------------------------------------------------------------------------------------------------------------


let String = '';
if (String.length) {
  console.log('this is a line of code')
}
//the console is not executed 




//but is this, the console is exicuted because the condition is now true
let String = '';
if (!String.length) {
  console.log('this is a line of code')
}





let String = '';
if (String.length) {
  console.log('the string has value')
}
else {
  console.log('string is empty')
}
// console in the else is executed because condition in if is false 





//but if:


let String = 'string';
if (String.length) {
  console.log('this is a line of code')
}
//executes the console because variable now has a length







//-----------------------------------------------------------------------------------------------------------------------------------------



let arrr = [];
if (arrr.length) {
  console.log('this array is not empty')
}
else if (!(array.length)) {
  console.log('array is empty')
}


//the will execute the console in else if statement
//but if you enter atleast 1 element in the array, it will execute the console in the if statement

let arrr = [1];
if (arrr.length) {
  console.log('this array is not empty')
}
else if (!(array.length)) {
  console.log('array is empty')
}








//-----------------------------------------------------------------------------------------------------------------------------------------







let x = prompt('enter the value of x');
if (!x) {
  alert('x is undefined')
} else if (x >= 0) {
  alert('x is a a positive number')
} else if (x < 0) {
  alert('x is a negative number')
}

// you can also add a condition to check wether the input is a numeric string or alphabetic string

// else if(!Number(x)){       // the result of Number(x) is NaN (if string is alphebetic) and ! will turn this into true;
//     alert('hello')
// }





//-----------------------------------------------------------------------------------------------------------------------------------------












let n = prompt('your number?');
n = Number.parseInt(n);

if (n % 2 == 0 && n % 3 == 0) {
  console.log('the number is divisible by 2 and 3 both');
} else if (n % 2 == 0) {
  console.log('the number is divisible by only 2')
} else if (n % 3 == 0) {
  console.log('the number is divisible by only 3')
}
else {
  console.log('the number is neither divisible by 2 nor 3');
}








//-----------------------------------------------------------------------------------------------------------------------------------------







let n = prompt('your number?');
n = Number.parseInt(n);

if (n % 2 == 0 || n % 3 == 0) {
  console.log('the number is divisible by 2 or 3');
}
else {
  console.log('the number is neither divisible by 2 nor 3');
}















let age = prompt('enter your age');
age = Number.parseInt(age);

if (!age && age != 0) {
  alert('age is not defined');
} else if (age < 0) {
  alert('invalid age')
} else if (age >= 0 && age < 18) {
  alert('you are less than 18. after' + (18 - age) + 'years you can access this')
}
else if (age >= 18) {
  alert('welcome! you are' + age)
}




















let a = {
  name: 'raees',
  age: 20,
}
if (a['name'] == 'raees' && a.age == 20) {
  console.log('both are right')
} else if (a.age == 20) {
  console.log('only age is right')
} else if (a.name == 'raees') {
  console.log('only name is right')
} else if (a.name !== 'raees' && a.age !== 20) {
  console.log('both are wrong')
}










let string = prompt('enter a word');
if (!string.length) {
  console.log('string is not defined')
} else if (string.length) {
  console.log('the length of (' + string + ') is ' + string.length);
}












let myArray = [1, 2, 3, 4, 5];

if (!myArray.length) {
  console.log('empty array');
} else if (myArray.length) {
  console.log('the length of myArray is ' + myArray.length);
}









let age = prompt('enter your age');
age = Number.parseInt(age);
if(!age && age!=0){
    console.log('age is not defined')
}else if(age<0){
    console.log('invalid age')
}else if(age>=0 && age<18){
    console.log(`age is less than 18. You age ${age} and after ${18-age} ${(18-age == 1)? 'year': 'years'} you can access this when you will 18`);
}else if(age==18){
    console.log('Welcome you are 18 and now you can access this')
}else if(age>18){
    console.log(`welcome , you are ${age} and ${age-18} years back you was 18`)
}




















let age = prompt('enter your age');
age = Number(age);

if (!age || age < 0) {
    for (let a = 0; (!age || age < 0) == true; a++) {
        alert('age is not defined or invalid age')
        age = prompt('enter your age');
        age = Number(age);
    }
    if (age >= 0 && age < 18) {
        alert('you age underaged');
    } else if (age >= 18) {
        alert('you are welcome');
    }
}
else if (age >= 0 && age < 18) {
    alert('you age underaged');
} else if (age >= 18) {
    alert('you are welcome');
}



















let string = prompt('enter a word');
    
if(!string){
  console.log('string is not defined')
}
else if(string.length){
  console.log('string has a length of ' + string.length + ' as :' )
  for(let i=0 ; i<string.length ; i++){
    console.log(string[i] + ' : ' + (i+1))
  }
}












let fruits = ['mango','apple','banana','grapes','pine Apple']

let obj = {
  vegetables : ['potato','tomato','lemon','carrot','spinich'],
  fruits: fruits
}

if(Array.isArray(obj.vegetables)){
  console.log('yes')
}
if(Array.isArray(obj['fruits'])){
   console.log('this is too')
}


















let number = prompt('enter a number');
number=Number.parseInt(number);

if(number%2===0 && number%3===0){
  console.log('divisible by both 2 and 3');
  console.log(number+'/2='+ number/2);
  console.log(number+'/3='+ number/3);
}
else if(number%2===0){
  console.log('number is divisible by 2');
  console.log(number+'/2='+ number/2);
}else if(number%3===0){
  console.log('number is divisible by 3');
  console.log(number+'/3='+ number/3);
}else if(number%2!==0 && number%3!==0){
  console.log('number is neither divisible by 2 nor by 3')
}



















// 'HACKER SPEAK' METHOD FROM JS FOR KIDS

let string = 'raees brothers inc';
let replacedString = '';

for(let i = 0 ; i < string.length; i++){

  if(string[i]=='a'){
    replacedString+=4;
  }
  else if(string[i]=='e'){
    replacedString+=3;
  }
  else if(string[i]=='b'){
    replacedString+=6;
  }
  else if(string[i]=='i'){
    replacedString+=1;
  }
  else if(string[i]=='s'){
    replacedString+=5;
  }
  else if(string[i]=='o'){
    replacedString+=0;
  }
  else{
    // IF THE LETTER IS NOT 'a,e,i,o,s,b' , just add the current letter of 'string' into 'replacedString'
    replacedString+=string[i];
  }
}

console.log(replacedString);




















let obj = {
  ar1 : [1,2,3,4,5],
  ar2 : [11,12,13,14,15],
  ar3 : [21,22,23,24,25],
  ar4 : [31,32,33,34,35],
  ar5 : [41,42,43,44],
};

console.log(obj[Object.keys(obj)[1]])

for(let i = 0;i<Object.keys(obj).length;i++){
  if(obj[Object.keys(obj)[i]].length !==5){
      console.log(Object.keys(obj)[i] + ' dont have 5 elements')
  }
}





let obj = {};
for(let i of str){
    if(obj[i]){
       obj[i]++ 
    }else{
        obj[i] = 1;
    }
}
console.log(obj);





















let func = () =>{
    let age = Number(prompt('enter your age'));
    console.log(age);

    if(isNaN(age)){// if user enters data in alphabetic form
        alert('please enter age in numbers');
        func();
    }else if(age<0){
        alert('please enter a valid age');  // if user enters data with negative value
        func();
    }else if(age==0){
        alert('please enter your age');    // if user enters 0, press cancel or press OK with empty prompt.
        func();
    }else if (age<18){
        alert('you age underage');         // think this alert like base case for recursive function as func is not calling itself anymore
    }else if(age>=18){
        alert('you can drive');            //this is base case too.
    }
}

func();
