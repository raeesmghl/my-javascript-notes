//switch case is used different actions in case of different conditions



//syntax


switch (expression) {
    case value1:
        // code to be executed if expression matches value1
        [break;]
    case value2:
        // code to be executed if expression matches value2
        [break;]
    ...
    default:
        // code to be executed if expression does not match any of the cases
        [break;]
}







//----------------------------------------------------------------------------------------------------------------------------------------------------





let a = prompt('enter a number between 0 and 20')
a = Number.parseInt(a)
switch (true) {
    case (a >= 0 && a <= 10):
        console.log('your number is between 0 and 10')
        break;
    case (a >= 11 && a <= 20):
        console.log('your number lies between 11 and 20');
        break;
    default:
        console.log('the number is not between 0 and 20')
}








//----------------------------------------------------------------------------------------------------------------------------------------------------










let x = "0";
switch (x) {
    case 0:
        console.log('the value of x is 0');
        break;
    case 1:
        console.log('the value is 1');
        break;
    default:
        console.log('the camperison("===") is false')//this console is executed
}
//because the typeof the value in x is string and (case 0) is for zero whose type is number










//----------------------------------------------------------------------------------------------------------------------------------------------------








let x = 0;
switch (x) {
    case 0:
        console.log('the value of x is 0');//this console is executed because camparison === is true
        break;
    case 1:
        console.log('the value is 1');
        break;
    default:
        console.log('the camperison("===") is false')
}









//----------------------------------------------------------------------------------------------------------------------------------------------------




let day = prompt('enter a no. between 1 to 7');
day = Number.parseInt(day);
switch(day){
  case 1:
    console.log('monday');
    break;
    
    case 2:
    console.log('tuesday');
    break;
    
    case 3:
    console.log('wednesday');
    break;
    
    case 4:
    console.log('thursday');
    break;
    
    case 5:
    console.log('friday');
    break;
    
    case 6:
    console.log('saturday');
    break;
    
    case 7:
    console.log('sunday');
    break;
  default:
   alert('there are seven days in a week, so please enter a number between 1 and 7');
    console.log('there are seven days in a week, so please enter a number between 1 and 7')
}




//----------------------------------------------------------------------------------------------------------------------------------------------------




let x = 5;
let y = 10;
switch(true){
  case (x<y):
    console.log('x is less than y');
    break;
  case (x>y):
    console.log('x is greater than y')
    break;
  case (x == y):
    console.log('x is equals to y');
    break;
  default:
    console.log('error')
}







//----------------------------------------------------------------------------------------------------------------------------------------------------







let color = prompt('enter an rgb color in lower case');
switch(color){
    case 'red':
    case 'blue':
    case 'green':
        console.log('you entered' + ' ' + color);
        break;
        default:
            console.log('this is not an rgb color');
}






//----------------------------------------------------------------------------------------------------------------------------------------------------







let intro={name: prompt('enter name'), age: 20};
switch(intro.name){
  case 'raees':
    console.log('you are right');
    break;
  default:
    console.log('you are wrong')
}







//----------------------------------------------------------------------------------------------------------------------------------------------------









let score = prompt('enter matric marks');



let percentage = (pa)=>{
  return (pa/1100)*100
}



switch(true){
  case (percentage(score)>=33):
    console.log('congratulations you have passed with' , percentage(score) , '% marks');
  break;
  case (percentage(score)<33):
    console.log('you are fail with' , percentage(score) , '% marks')
    break;
}

























let string = 'abcdefghiklmnopqrstuvwxyz';
    
let hackerSpace = '';

for(let i = 0 ; i< string.length;i++){
  switch(true){
    case (string[i]=='a'):
      hackerSpace+=4;
      break;

    case (string[i]=='i'):
      hackerSpace+=1;
      break;

    case (string[i]=='z'):
      hackerSpace+=2;
      break;

    case (string[i]=='e'):
      hackerSpace+=3;
      break;

    case (string[i]=='s'):
      hackerSpace+=5;
      break;

    case (string[i]=='b'):
      hackerSpace+=6;
      break;

    case (string[i]=='l'):
      hackerSpace+=7;
      break;

    case (string[i]=='g'):
      hackerSpace+=9;
      break;
  default:
    hackerSpace+=string[i];
}
}
console.log(hackerSpace)










let n = prompt('enter a number 1 to 24');
n = Number(n);

switch (true) {
    case (n >= 5 && n <= 12):
        console.log('good morning' + n)
        break;
    case (n >= 13 && n <= 15):
        console.log('noon' + n % 12);
        break;
    case (n >= 16 && n <= 18):
        console.log('after noon' + n % 12);
        break;
    case (n >= 19 && n <= 21):
        console.log('evening' + n % 12);
        break;
    case (n >= 22 && n <= 24):
        console.log('night' + n % 12);
        break;
    case (n >= 1 && n <= 4):
        console.log('mid night' + n % 12);
        break;

    default:
        console.log('please enter a number between 1 and 24')
}




















let number = prompt('enter a number 1 to 24');
number = Number(number);


switch (number) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log('morning ' + number);
        break;
    case 13:
    case 14:
    case 15:
        console.log('noon ' + number % 12);
        break;
    case 16:
    case 17:
    case 18:
        console.log('after noon ' + number % 12);
        break;
    case 19:
    case 20:
    case 21:
        console.log('evening ' + number % 12)
        break;
    case 22:
    case 23:
    case 24:
        console.log('night ' + number % 12)
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('mid night ' + number)
        break;
}