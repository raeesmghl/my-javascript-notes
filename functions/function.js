// before getting started with functions, check the difference between functions and methods.









// Functions are a fundamental building block of JavaScript and play a crucial role in organizing and structuring code. They offer several benefits, including:

// Modularity: Functions allow you to break down your code into smaller, manageable chunks. Each function can represent a specific task or piece of functionality, making your code easier to understand and maintain.
    
// Reuse: By defining functions, you can reuse the same block of code multiple times throughout your program without duplicating it. This promotes code efficiency and reduces redundancy.
    
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




