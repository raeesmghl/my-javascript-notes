// let array = ['string',10,true,false,20n,[1,2,3],null,undefined];

// console.log(`array has length of ${array.length} as:`);
// console.log(array);
// let i=0;
// while(i < array.length){
//   console.log(`${array[i]} has position ${i+1} and index ${i}`);
//   i++;
// }










// let a = 0;
// while(a<10){
//   console.log(a)
//   a++;
// }













// let number = 5;
// let fictorial = 1;
// let i = 2;
// while(i<=number){
//   console.log(fictorial + 'x'+ i + '=' + (fictorial*=i))
//   i++;
// }
// console.log('the fictorial of '+ number + ' is '+fictorial)










//MOST IMPORTANT#########################################################################################

// let input;
// while(isNaN(input)){
//   input = parseInt(prompt('enter a number'));
//   if(isNaN(input)){
//     alert('not a number')
//   }
// }













// getting the largest number of the array

// let array = [2,34,21,344,32,43,5656,65,34,325,35,5345,4433];
// let largestNumber = array[0];
// let i = 0;
// while(i<array.length){
//   if(largestNumber<array[i]){
//   largestNumber = array[i];
// }
//   i++;
// }
// console.log(largestNumber)













  //sum of all the elements of an array
//   let array = [13,21,43,46,15,16,27,85,9];
//   let sum =0;
//   for(let i =0;i<array.length;i++){
//     console.log(sum +  '+' + array[i] + '='+ (sum+=array[i]))
//   }
//   console.log('the sum of all the elements of array is ' + sum)










// Correct password

// let password;
// while(password != 'raees'){
//   password = prompt('enter password')
//   if(password != 'raees'){
//     alert('not correct hint: name')
//   }
// }
// console.log('logged in')











//Reversing the string;


// let string = 'abcdefghijklmnopqrstuvwxyz';
//     let reversed = '';
//     let i = string.length-1 ;
//     while(i>=0){
//       reversed+=string[i]
//       i--;
//     }
//     console.log(reversed)






// let tri = prompt('enter your password');
// let pw = 'abcde';

// while(tri!=pw){
//     alert('wrong password')
//     tri = prompt('try again');
// };

// if(tri == pw){
//     console.log('hello ')
// }








// let pword = 'ra335';
// let ask;
// do{
//     ask = prompt('enter your password');
//     if(ask!==pword){
//         alert('wrong password')
//     }
// }while(ask!==pword);









// guess the number;

// let n = 45;

// let guess;

// let count = 0;

// while(guess!==n){
//     let guess = prompt('enter number');
//     count++;
//     if(guess === null){
//         let confirming = confirm('do you want to quit?');
//         if(confirming){
//             alert('game is over');
//             break;
//         }
//     }else if(isNaN(guess) || guess==''){
//         alert('please enter a number')
//     }else if(guess<0 || guess>100){
//         alert('number should be between 0 and 100');
//     }else if(guess<n){
//         alert('try bigger than ' + guess)
//     }else if(guess>n){
//         alert('try smaller than ' + guess)
//     }else if(guess==n){
//         alert('congratulations in just '+ count)
//     }
// }