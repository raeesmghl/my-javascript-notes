



// this is the async function inside of which we are creating promises;



// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("27 Deg")
//             }, 2000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("21 Deg")
//             }, 5000)
//     })

//     // delhiWeather.then(alert)
//     // bangaloreWeather.then(alert)
//     console.log("Fetching Delhi Weather Please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather Please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Bangalore Weather: " + bangaloreW)
//     console.log(delhiW,bangaloreW);
//     return [delhiW, bangaloreW]
// }

// harry()


// this will log everything in the console but if you want to use the returned value; you can use .then .catch to handle that;
// you can also use console.log(harry()) instead of harry(), to get a promise(pending) returned by async function;
























// full example;

async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}



// this asyncFunction is created, to wait for the completion of harry() and then run cherry;
// if both async functions (harry and cherry) are called without wraping inside an async function and without appling await; the result will be different;
const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1()
































// let asyncFunction = async () =>{

// let func1 = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('func 1 resolved');
//     },5000)
//     })
// }

// let func2 = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('func 2 resolved');
//     },2000)
//     })
// }
//     console.log('func1 is started please wait....');
//     let b = await func1();
//     console.log('func1 is resolved with value : ' + b);
//     console.log('func2 is started please wait....');
//     let c = await func2();
//     console.log('func2 is resolved with value : ' + c);
// }
// asyncFunction();






















// let func = () =>{
//     return 'one';
// }

// let func2 =() =>{
//     return new Promise((resolve, reject) => {
        
//         setTimeout(()=>{
//             resolve('two');
//         },2000);
//     })
// }

// let func3 = () =>{
//     return new Promise((resolve, reject) => {
        
//         setTimeout(()=>{
//             resolve('three');
//         },2000);
//     })
// }

// let newF = async () =>{
//     console.log(func());
//     let a = await func2();
//     console.log(a)
//     console.log(await func3());
// }
// newF();




























// ASYNC/AWAIT EXAMPLE BY YAHOO BABA;


// the example synchronously executes 1 , then text() and then 5;
// 1 is printed;
// test() is executed and prints 2 and stops the execution (because await occurs);
// as await occurs, this changed the order of this execution;
// the result is in this order : 1 2 3 5 4   instead of 12345
let test = async () =>{
    console.log(2);
    await console.log(3);
    console.log(4);
}
console.log(1);
test();
console.log(5);



// but if : 


// let test = async () =>{
//     console.log(2);
//     await setTimeout(()=>{
//         console.log(3);
//     },2000)
//     console.log(4);
// }
// console.log(1);
// test();
// console.log(5);


// now there is setTimeout so it returns : 1 2 5 4 and 3 after 2 seconds;



















// another example by yahoo baba;


let func = async () =>{
    const dataa = await fetch('https://randomuser.me/api/');
    const final = await dataa.json();
    return final;
 }
 
 func() // returns a promise (pending)
 // for handling this promise you can use .then .catch;

 // without returning any value from func; we can use console.log and try catch;

 // with try catch method you can also return the fetched data and can handle this returned promise using .then, now .catch is not needed if it is used with try catch;