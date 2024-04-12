//simple examples arewritten on register





    let x = prompt('enter your age');
    x = Number.parseInt(x);

if(!x){
    for(let i = 0 ; !x == true ; i++){
        alert('please enter your age');
        x = prompt('enter your age')
        x = Number.parseInt(x);
    }
}
else if(x<0){
    console.log('invalid age')
}
else if(x>=0 && x<18){
    console.log('you are not allowed')
}
else{
    console.log('you\'re welcome');
}


//there are different conditions for different ages
// if you dont enter age, it will start loop in which it will be showing you alert again and again and wants you to enter your age to continue
//loop will not stop until you enter a value


// if we use function instead of using prompt directly , remember : functions are local scope and x will be limited inside the function



// as this: 

let myFunction=()=>{                       
    let x = prompt('enter your age');          //x becomes local scope
    x = Number.parseInt(x);
}
myFunction();                                  //this will be executed

if(!x){                                        // here x is not executed so it will throw an error( x is not defined ) and will not give results
    for(let i = 0 ; !x == true ; i++){
        alert('please enter your age');
        myFunction()                           // not even this is executed because x is not defined in its upper step : (!x)
    }
}
else if(x<0){                                 
    console.log('invalid age')
}
else if(x>=0 && x<18){
    console.log('you are not allowed')
}
else{
    console.log('you\'re welcome');
}






// so if we wanna use function in the problem like this, we have to use var(global scoped variable)
//only remove let from x in the function so it becomes global scoped
// there is choice that you can put var in place of let ,but if you dont,just removed let , it will be OK.

let myFunction=()=>{                       
    x = prompt('enter your age');          // removed let and x becomes global scoped
    x = Number.parseInt(x);
}
myFunction();                                  //this will be executed

if(!x){                                        // now this will also be executed because x is now global scoped
    for(let i = 0 ; !x == true ; i++){
        alert('please enter your age');
        myFunction()                           // not even this is executed because x is not defined in its upper step : (!x)
    }
}
else if(x<0){                                 
    console.log('invalid age')
}
else if(x>=0 && x<18){
    console.log('you are not allowed')
}
else{
    console.log('you\'re welcome');
}
















// after the sum example on register see this


let sum = 0;
let arr = [10,20,30,40,50];
for(let i = 0 ; i < arr.length ; i++){
  sum += arr[i];
}
console.log(`the sum of all the array elements is ${sum}`)






//reversing the numbers in the array

let array=[10,20,30,40,50,60,70,80,90,100];
let reversed=[];                           // this is empty to get pushed values from array
for(let i= array.length -1 ; i>=0 ; i--){
  reversed.push(array[i])
}
console.log(reverseded);

//in this case we used decrement so we have to assign the expression1 with the biggest value (to iterate) from where to start
//expresseion1 we used the value of i as (array.length - 1). it means we used 9
//the biggest value we can put in expression1 is 9 , because the index of the last value in array is 9
// so if we want to start a loop on array , we should not confuse with length and index
//expression1 is executed and than loop body is executed 
// we see that the value of array with index 9 (biggest index number) is entered nadthis value of array is pushed in the reversed
// remember : push always pushes the value at the end of the array
//now expression3 is executed and i becomes 8 
//condition is applied
//noticed that we use i>=0 as condition , here >= used because the index of first value is 0 and goes upto 0
//now loop body is executed again and enter the value of array with index 8, in the reversed
// in this way loop is continous
// when the value of i becomes 0 , the value of array with index 0 (first value) is executed
// after that the condition become false and loop will be ended























