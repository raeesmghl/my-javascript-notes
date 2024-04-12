

// ANOTHER EXAMPLE BY WEB-DEV=SIMPLIFIED



let pro1 = new Promise((resolve, reject) => {
    resolve('promise 1 resolved');
});
let pro2 = new Promise((resolve, reject) => {
    resolve('promise 2 resolved');
   });
let pro3 = new Promise((resolve, reject) => {
    resolve('promise 3 resolved');
});

pro1
.then((v)=>{
    console.log(v);
    return pro2;
})
.then((v)=>{
    console.log(v);
    return pro3;
})
.then((v)=>{
    console.log(v);
})
.catch((v)=>{
    console.log(v)
})


// these promises are not executed one by one, you can check by putting setTimeout before resolving;
// if you add setTimout before resolve and use then chain,it will count the time of each promise asynchronously
// if you want to use setTimeout and also want to execute next .then in the next chain synchronously, you should use functions;



// see by examples


// this is example without wraping promises inside the function;


// if you run this code , this will execute the first .then, this prints the value and return the new promise, which is pro2,as it has 2sec to resolve, so its value will be printed after 2seconds, but it will return pro3 and moves to the next .then (asynchronously) without printing the value of pro2.

// in this example, pro3 will reject and until setTimeout of pro2 completes, this will show the error, and when time completes (2sec), it will be executed in the .catch;
// but if pro3 resolves, this will not show result until the pro2 completes its time;
// if there is timeout in pro3 before resolving; as pro2 has to wait for 2sec before resolve, but this will return pro3 imediately and as pro3 is returned by second .then, it will start its time counting asynchronously

        // let pro1 = new Promise((resolve, reject) => {
        //     resolve(1);
        // })
        // let pro2 = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(2);
        //     }, 2000);
        // })
        // let pro3 = new Promise((resolve, reject) => {
        //     reject(3);
        // })


        // pro1.then((v)=>{
        //     console.log(v)
        //     return pro2;
        // }).then((v)=>{
        //     console.log(v)
        //     return pro3;
        // }).then((v)=>{
        //     console.log(v)
        // }).catch((v)=>{
        //     console.log(v)
        // })




// but if you use functions, functions wait until the timeout completes, then they return next promise function;



// let pro1 = () => {
//     return new Promise((resolve, reject) => {
//         resolve(1);
//     })
// }
// let pro2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 2000);
//     })
// };
// let pro3 = () => {
//     return new Promise((resolve, reject) => {
//         reject(3);
//     })
// };


// pro1().then((v) => {
//     console.log(v)
//     return pro2();
// }).then((v) => {
//     console.log(v)
//     return pro3();
// }).then((v) => {
//     console.log(v)
// }).catch((v) => {
//     console.log(v)
// })






















// if you want to execute all the promises at the same time, even there are different setTimeout for different, use 'all' method

// with 'all' method, you have to wait until all the promises fulfilled (till last), this will return an array of resolved values of different promises, if any of these got rejeted, only rejected promise goes to .catch and only that promise executes;




Promise.all([
    pro1,
    pro2,
    pro3,
]).then((v)=>{
    console.log(v)
}).catch((v)=>{
    console.log(v)
})





// if you want the one, who won the race, executes at first, use race method;

// even promise is rejected, this returns the only first promise out of all;



Promise.race([
    pro1,
    pro2,
    pro3,
]).then((v)=>{
    console.log(v)
}).catch((v)=>{
    console.log(v)
})



//Promise.allSettled

//This method is useful when you want to know the result of each task even though they are rejected.

// this method returns an array of objects, contains 'status' and 'value' properties;
// this method does not execute until all the promises are fulfilled or rejected, if some promise is pending, it waits for it;

Promise.allSettled([
    pro1,
    pro2,
    pro3,
]).then((v) => {
    console.log(v)
}).catch((v) => {
    console.log(v)
})









// promise.any() also takes an array with elements as names of the promises

// this returns the first resolved promise;
// if 1st is reject, it moves to 2nd
// if all the promises are rejected, this returns an error aggregateError


Promise.any([
    pro1,
    pro2,
    pro3,
]).then((v)=>{
    console.log(v)
}).catch((er)=>{
    console.log(er)
})





















// we can also use these methods with async/await


let pro11 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved 1');
        }, 3000)
    })
}
let pro22 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved 2');
        }, 2000)
    })
}
let pro33 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved 3');
        }, 5000)
    })
}
let asy = async () =>{
    let a =await Promise.all([pro11(),pro22(),pro33()]);
    console.log(a)
}
asy();