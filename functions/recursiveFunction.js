



// let array = [1,2,3,4,5];



// let multiply = (arr,n) =>{
//     let total = 1;

//     for(let i = 0;i<n;i++){
//         total*=arr[i];
//     };
//     return total;
// };

// console.log(multiply(array,5));

// console.log(multiply(array,4)*array[5-1])





// let mul2 = (arr,n) =>{
//     if(n<=0){
//         return 1;
//     }
//     return mul2(arr,n-1)*arr[n-1]
// }






// let fromTo = (min,max)=>{
//     return Math.floor(Math.random()*(max-min+1))+min
// }




// let rec = (n) =>{
//     if(n<=1){
//         console.log(1)
//         return 1;
//     }else{
//         let a = n*rec(n-1);
//         console.log(a);
//         return a;
//     }
// };
// console.log(rec(4));





// function factorial(n) {
//     // Base case
//     if (n <= 1) {
//         console.log(`Base case reached with n=${n}. Returning 1.`);
//         return 1;
//     } else {
//         console.log(`Calculating factorial(${n}) as ${n} * factorial(${n - 1}).`);
//         // Recursive case
//         let result = n * factorial(n - 1);
//         console.log(`Factorial(${n}) = ${n} * factorial(${n - 1}) = ${n} * ${result} = ${result}`);
//         return result;
//     }
// }

// console.log(factorial(4));




// let fic = (n)=>{
//     if(n<=1){
//         return 1;
//     }else{
//         let a = n*fic(n-1);
//         console.log(a);
//         return a;
//     }
// };
// console.log(fic(5));
// fic(5)



// first function call fic(5);

// fic(5) = 5 * fic(4);        //printed 120 and returned fic(120) as 6
// fic(4) = 4 * fic(3);        //printed 24 and returned fic(4) as 24
// fic(3) = 3 * fic(2);        //printed 6 and returned fic(3) as 6
// fic(2) = 2 * fic(1);        //printed 2 and returned fic(2) as 2
// fic(1) = 1






// let fabonacci = (n) =>{
//     if(n<=1){
//         return n;
//     }else{
//         return fabonacci(n-1)+fabonacci(n-2)
//     }
// }









// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let sumArr = (arr) => {
//     if (arr.length == 0){
//         return 0; 
//     }else{
//         return arr[0] + 
//     }
// }



































