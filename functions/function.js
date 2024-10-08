// before getting started with functions, check the difference between functions and methods.









// Functions are a fundamental building block of JavaScript and play a crucial role in organizing and structuring code. They offer several benefits, including:

// Modularity: Functions allow you to break down your code into smaller, manageable chunks. Each function can represent a specific task or piece of functionality, making your code easier to understand and maintain.
    
// Reuse: By defining functions, you can reuse the same block of code multiple times throughout your program without duplicating it. This promotes code efficiency and reduces redundancy (repeat) (not good for your code).

// Reduncancy : mostly if a code is repeated multiple times, it is covered with a function and function reference is used repeatedly that reduces code redundancy
    
// Abstraction: Functions enable you to abstract away complex logic behind a simple interface. This means you can encapsulate the details of how a task is accomplished within a function, allowing other parts of your code to interact with it without needing to understand its internal implementation.
    
// Readability: Well-named functions can serve as self-documenting units of code, making it clear to other developers (and your future self) what each part of your program does.
    
// Overall, functions are a powerful tool for writing clean, maintainable, and reusable code in JavaScript. By leveraging functions effectively, you can enhance code clarity, reduce errors, and improve productivity.




















function getting(string) {
    return 'the length of ' + string + ' is' + string.length;
}
let taking = getting('hello world');
console.log(taking);
















let naturalNumber = prompt('enter a natural number');
naturalNumber = Number.parseInt(naturalNumber);

function gettingSumFrom1(num){
    let sum = 0;
    for(let i=1;i<=num;i++){
        console.log(sum + '+' + i + '=' + (sum += i))
    }
    console.log(`the sum of first ${num} natural numbers is ${sum}`);
}

gettingSumFrom1(naturalNumber)











// using return. this only return an array of all the statements that we were printing using console.


let n = Number(prompt('enter you number'));
let func = (n)=>{
    let sum = 0;
    let arr = [];
    
    for(let i = 1;i<=n;i++){
        arr.push(`${sum} + ${i} = ${sum+=i}`);
    }
    
    return arr.join('\n');
}
let result = func(n);
console.log(result);










    //   let number = prompt('enter a number');
    //   number = Number.parseInt(number);

    //   let gettingFictorial = (nmbr) =>{
    //     let fic = 1;
    //     for(let i=2 ; i<=nmbr ; i++){
    //         console.log(fic + '*' + i + '=' + (fic*=i))
    //     }
    //     console.log('the fictorial of '+ nmbr + ' is ' + fic)
    //   }
    // gettingFictorial(number)


    





















        let anArray = ['raees','wajahat','islam','mughal']

        function reverseArray(arr){
            let reversed = [];
            for(let i =0 ; i < arr.length ; i++){
                reversed.unshift(arr[i])
            }
            console.log(reversed)
        }
        reverseArray(anArray)













// this function does not reverse the array, but it reverse each word's letters.


let str = 'this is a string';
let reverseAlph = (str)=>{
    // converts the string into the array , where each character (even space) becomes an element of the array. then reverse it.
    let reversedArr = str.split('').reverse();

    // now this array is joined again and now splitted into an array by using space, each word is an element of array. and then reverse it.
    let reversedStr = reversedArr.join('').split(' ').reverse();
    return reversedStr.join(' ');
}

console.log(reverseAlph(str));
console.log(str);



















/*
<body>

    <button type="button" onclick="permition()">click to sure</button>
    <h1 id="demo"></h1>

    <script>

let permition=()=>{
    let confirming = confirm('are you sure?');
            if(confirming==true){
                document.getElementById('demo').innerHTML ='you are sure';
            } else{
                document.getElementById('demo').innerHTML='you canceled';
            }
        }

    </script>

</body>
*/












   //creating the function of highest number in the array


   let arrayy = [1,2,3,4,5,6,4,3,33,22,765,99999,786675,333,241,4900.0000];



   let highestNumberInArray = (anyArray) =>{
     let highestNumber = anyArray[0];
     for(let i = 0 ; i < anyArray.length ; i++){
       if(highestNumber<anyArray[i]){
         highestNumber = anyArray[i]
       }
     }
     return highestNumber;
   }

   let gettingHighestNumber = highestNumberInArray(arrayy);
   console.log(gettingHighestNumber)







// can also use reduce method like this : 

let highest = (arr) =>{
    return arr.reduce((a,b)=>{
        return a>b?a:b;
    });
}











   let myArray = [433,55,23,678,543,678,907,254,322,123,234,234,345,342,343,123,21];


   function positioning(array) {
         let i = 0 ;
         while(i<array.length){
           console.log(array[i] + ' has position ' + (i+1) + ' with index no. ' + i)
           i++
         }
   }
   
   positioning(myArray);











   let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let n = prompt('name?');
    func(n);
});

let func = (nam) =>{
    console.log('hello ' + nam + ' how are you');
    setTimeout(()=>{
        console.log('how can i help you');
    },2000);
};
















let isPrime = (n)=>{
    if(n<2){
        return false;
    }
    for(let i = 2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
};

let num = parseInt(prompt('enter number'));

let arr = [];
for(let i = 1;i<=num;i++){
    arr.push(i);
}


let primes = [];
let composites = [];


arr.forEach((v,i,a)=>{
    if(isPrime(v)){
        primes.push(v);
    }else{
        composites.push(v);
    }
});


console.log(primes + ' are prime numbers');
console.log(composites + ' are composite numbers');

















// a better way : 
// this function returns an array of to keys primes and composites.
// you can do more changes



// this is prime checking function
let isPrime = (n) =>{
    if(n<2){
        return false;
    }
    for(let i = 2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

// main function that checks the number and place it in the right position.
let possibles = (n)=>{
    let obj = {
        primes : [],
        composite : [],
    }
    for(let i = 1;i<n;i++){
        isPrime(i)?obj['primes'].push(i):obj['composite'].push(i);
    }
    return obj;
}
let results = possibles(10);
console.log(results);


























let num = 23; // use random number by using math.random();

let func = ()=>{
    let guess = prompt('enter a number 1-100'); // we did not use Number() because we want to add a functionality like quit this function.

    if(!guess){  // if guess=null, guess=''. two posibilities by clicking cancel or OK ;

        if(guess==null){ 

            let confirming = confirm('quit game?');

            if(confirming){
                return;
            }else{
                func()
            }

        }else if (guess==''){
            alert('please enter a number');
            func();
        }
    } // after this condition passed, their are only two posibilities: guess = alphabetic string(can also use special characters inside this); guess= numeric sring
    else if(isNaN(guess)){               // this condition clears that we did not use Number() but we add a condition not to accept alphabetic string.
        
        alert('only numbers are allowed');
        func();
    }else if(guess>100 || guess<1){
        alert('please enter a number between 1 and 100');
        func();
    }else if(guess>num){
        alert('try smaller num then '+ guess);
        func();
    }else if(guess<num){
        alert('try bigger num then ' + guess);
        func()
    }else if(guess == num){
        alert('correct');
    }

}
// you can also add attempts
func()















// check palindrome

let a = 'oh who was it i saw? oh who';


function isPalindrome(str) {

    // used REGEX
    let newStr = str.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }
    }

    return true;
}
let check = isPalindrome(a);
console.log(check);
















// check no of vovels in a string;
// returns an object with contains the count of each vovel and total number of vovels in the string;

let str = 'a quick borwn fox jumps over the lazy dog';
let func = (str)=>{
    let vovel = ['a','e','i','o','u'];
    let obj = {};
    let count = 0;
    
    for(let i of str){
        if(vovel.includes(i)){
            count++;
            if(obj[i]){
                obj[i]++;
            }else{
                obj[i] = 1;
            }
        }
    }
    
    obj["count"] = count;
    return obj;
}
let result = func(str);
console.log(result);








// fibonacci series
function func(n) {
    let fib = [0,1];

    for(let i = 2;i<n;i++){
        fib.push(fib[fib.length-2]+fib[fib.length-1])
    }

    return fib;

}

console.log(func(6))
// use recursive function to get the same results



















// check age

function func() {
    let age = prompt('enter your age');
    if (!age) {
        if (age == '') {
            emptyStr()
        } else {
            cancel()
        }
    } else if (isNaN(age)) {
        nan()
        console.log('a')
    } else {
        checkAge(age)
    }
}
func();
function emptyStr() {
    alert('please enter a value\nits an empty string');
    func()
}
function cancel() {
    let cnf = confirm('do you want to quit?');
    if (cnf) {
        return
    } else {
        func()
    }
}
function nan() {
    alert('not a number\nplease enter a number');
    func();
}
function checkAge(age) {
    if (age < 0) {
        alert('please enter a valid age')
        func()
    } else if (age == 0) {
        alert('bsdk bakchodi mt kr')
        func()
    } else if (age < 18) {
        alert('pogo dekh')
    } else if (age >= 18) {
        alert('ao g')
    }
}






// codewar challenge
// result to sai tha, but codewar did not accept
// converting a string into cammelCase;

function toCamelCase(str){
    let ar = str.split('-');
    let newAr = ar.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    });
    return newAr.join('');
  }
  console.log(toCamelCase('this-is-a-str'));
