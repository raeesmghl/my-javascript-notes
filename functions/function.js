



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