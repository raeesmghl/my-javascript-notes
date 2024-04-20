


// const myFunction=()=>{
//     x = prompt('enter your age');
//     x = Number.parseInt(x);
// }
// 
// if(!x){
//     for(let i = 0 ; !x == true ; i++){
//         alert('please enter your age');
//         myFunction();
//     }
// }
// else if(x<0){
//     console.log('invalid age')
// }
// else if(x>=0 && x<18){
//     console.log('you are not allowed')
// }
// else{
//     console.log('you\'re welcome');
// }






// let fictorial = 1;
// let n = prompt('enter a natural number');
// n=Number.parseInt(n);
//     for(let i=1; i<=n ; i++){
//         fictorial *= i;
//         document.write(i + '*')
//     }
//     document.write('the fictorial of '+ n + ' is '+ fictorial)











let n = 5;
let fictorial = 1;
for(let i = 2 ; i<=n ; i++){
    console.log(fictorial + ' x ' +  i  + ' = ' +  (fictorial*=i));
}
console.log(fictorial);














// let a = [1,2,3,4,5]
// for(let i in a){
//     console.log( i + ' ' + a[i])
// }



// let b = {
//     name : 'raees',
//     middle : 'wajahat',
//     last : 'islam',
// }
// for(let i in b){
//     console.log(i + ' : ' + b[i])
// }



// let myFunction=()=>{                       
//      x = prompt('enter your age');          //x becomes local scope
//     x = Number.parseInt(x);
// }
// myFunction();
// if(!x){                                        // here x is not executed so it will throw an error( x is not defined ) and will not give results
//     for(let i = 0 ; !x == true ; i++){
//         alert('please enter your age');
//         myFunction()                           // not even this is executed because x is not defined in its upper step : (!x)
//     }
// }
// else if(x<0){                                 
//     console.log('invalid age')
// }
// else if(x>=0 && x<18){
//     console.log('you are not allowed')
// }
// else{
//     console.log('you\'re welcome');
// }






// let arr=[10,20,30,40,50,60,70,80,90,100];
// let reversed=[];
// for(let i= arr.length -1 ; i>=0 ; i--){
//     reversed.push(arr[i])
// }
// console.log(reversed);





// let numbers = [10, 20, 30, 40, 50];
// let reversedNumbers = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversedNumbers.push(numbers[i]);
// }
// console.log(reversedNumbers); // Output: [50, 40, 30, 20, 10]




// let array=[10,20,30,40,50,60,70,80,90,100];
// let reversed=[];                           // this is empty to get pushed values from array
// for(let i= array.length -1 ; i>=0 ; i--){
//   reversed.push(array[i])
// }
// console.log(reversed);










// let arr = [40,30,50,20,10];
// let max = arr[3];
// for(let i = 0 ;i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)















// let numb = prompt('enter a natural number');
// numb = Number.parseInt(numb);
// let sum = 0 ;
// for(let i=1 ; i <= numb; i++){
//     console.log(sum + "+" + i  + '='   +   (sum+=i));
// }
// console.log('the sum of first ' + numb + ' natural numbers is '+ sum);












// function DrawCats(howManyCats){
//     for(let i=0; i<howManyCats ; i++){
//         console.log('=^.^=')
//     }
// }
// DrawCats(10);










// for(let i = 1;i<=20;i++){
//     if(i%2==0){
//       console.log(i + ' is an even')
//     }
//     else{
//       console.log(i + ' is an odd')
//     }
//   }










// let string = 'string nice'
// for(let i=0;i<string.length;i++){
//   console.log(string[i])
// }













// let arr = [23,12,34,132,[98,97,96,95,94,93],[0,1,2,3],1,2,3,4,5,6];
// let reversed = [];

// for(let i = 0 ; i < arr.length; i++){
//   reversed.unshift(arr[i])
// }
// console.log(reversed)








//Reversing a string

// let str = 'this is a string';
// let rstr = '';

// for(let i=str.length-1 ; i>=0 ; i--){
//     rstr+=str[i];
// }
// console.log(rstr);












// keep adding numbers in array until the sum of all the elements of array is less than the given number
let array = [];
let sum = 0;
for(let i = 0;sum<=10;i++){
 let randomNumber = Math.floor(Math.random()*10)
 array.push(randomNumber);
 sum+=randomNumber
}
console.log(array);
console.log(sum);



















    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let obtainedString = '';

    for(let i = 0 ; i < 5;i++){
      let randomLetter = alphabets[Math.floor(Math.random()*alphabets.length)];
      obtainedString+=randomLetter;
    }
    console.log(obtainedString)
