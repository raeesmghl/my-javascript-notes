// wraping a promise isside a function vs directly using it inside a variable 👍



// Creating a promise directly and storing it in a variable
const myPromise1 = new Promise(resolve => {
  console.log("Promise 1 is created immediately.");
  resolve('abc');
});

// Wrapping a promise in a function
function createDelayedPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 2 is created after 5 seconds.");
      resolve('abc');
    }, 5000);
  });
}

// Calling the function to create the delayed promise
const myPromise2 = createDelayedPromise()



































// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('abc')
//     },5000)
// });
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('abcdef')
//     },2000)
// });
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('abcdefghijkl')
//     },6000)
// });

// async function asyncFunction(){
//     let pro1 = await promise1;
//     console.log(pro1);
//     let pro2 = await promise2;
//     console.log(pro2);
//     let pro3 = await promise3;
//     console.log(pro3);
// }
// asyncFunction()



//EXPECTATIONS :
// from the example above, i was expecting that after 5 sec, pro1 prints 'abc'
// after that it will take 2 seconds to print 'abcdef'
// after that it will take 6 seconds to print 'abcdefghijkl'


// REALITY :

// actually what happened;
// we are ceating promises directly without wraping then them into functions
//When you create a promise and store it in a variable directly without wrapping it in a function, the promise is created immediately when that particular part of the code is executed. The asynchronous operation defined within the promise will start executing as soon as the promise is created.

// first! when pro1 is executed it prints 'abc',
// after that imediately executes pro2 and prints 'abcdef',
// after that, it took 1 sec to execute pro3() and prints 'abcdefghijkl',

// this happend because , pro3 has to print after pro2 , and pro2 has to print after pro1, because: use of async/await;
// but BTS all the three promises are executed, and their timeout had started;




// we can get the expected result by wrapping out promises inside the functions;



// like this 👍








let promise1 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('abc')
        },5000)
    });
    }
    
    let promise2 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('abcdef')
        },2000)
    });
    }
    let promise3 = () =>{
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('abcdefghijkl')
        },6000)
    });
    }
    async function asyncFunction(){
        let pro1 = await promise1();
        console.log(pro1);
        let pro2 = await promise2();
        console.log(pro2);
        let pro3 = await promise3();
        console.log(pro3);
    }
    asyncFunction()






// can also be written as : 


let pro = (resValue,time) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(resValue)
        },time)
    });
};

let af = async () =>{
    console.log('1st line is loading .....');
    let pro1 = await pro('abc',4000);
    console.log(pro1);
    console.log('2nd line is loading .....');
    let pro2 = await pro('abcdef',1000);
    console.log(pro2);
    console.log('3rd line is loading ........');
    let pro3 = await pro('abcdefghijkl',6000);
    console.log(pro3);
}
af();






// with .then chain 👍



let pros = (resValue,time) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(resValue)
        },time)
    });
};



console.log('one is loading........');
pros('one',1000).then((v)=>{
    console.log(v);
    console.log('two is loading........');
    return pros('two',2000);
}).then((v)=>{
    console.log(v);
    console.log('three is loading........');
    return pros('three',3000)
}).then((v)=>{
    console.log(v);
})








































// this prints "undefined" before timeout completes and 23 when timeout completes

let func = (callback) =>{
    setTimeout(() => {
        callback(23)
    }, 2000);
}
let callb = (v) =>{
    console.log(v)
}
let print = func(callb)
console.log(print)


// "undefined" is printed because:

// The issue in the code lies in the last line where func(callb) is assigned to the variable print. The func function doesn't explicitly return anything, so it implicitly returns undefined. Therefore, print becomes undefined because the func function doesn't return any value.

// When you try to print print immediately after calling func, it will print undefined. After 2 seconds, the callback function is executed and 23 is logged to the console. However, print remains undefined.





//If you want to get 23 printed after 2 seconds, you should call the func function and pass the callb function as the callback, without assigning the return value of func to any variable. Here is the corrected code:
// like : func(callb);



















