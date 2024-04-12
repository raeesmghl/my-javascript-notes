

// FOR MORE CHECK : (https://www.javatpoint.com/javascript-try-catch)



// A try…catch is a commonly used statement in various programming languages. Basically, it is used to handle the error-prone part of the code. It initially tests the code for all possible errors it may contain, then it implements actions to tackle those errors (if occur). A good programming approach is to keep the complex code within the try…catch statements.

// Let's discuss each block of statement individually:

// try{} statement: Here, the code which needs possible error testing is kept within the try block. In case any error occur, it passes to the catch{} block for taking suitable actions and handle the error. Otherwise, it executes the code written within.

// catch{} statement: This block handles the error of the code by executing the set of statements written within the block. This block contains either the user-defined exception handler or the built-in handler. This block executes only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.



// Note: catch {} statement executes only after the execution of the try {} statement. Also, one try block can contain one or more catch blocks.


// try{  
    // expression; } //code to be written.  
    // catch(error){  
    // expression; } // code for handling the error.  






    // example

    try{  
        var a= ["34","32","5","31","24","44","67"]; //a is an array  
        document.write(a);    // displays elements of a  
        document.write(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked  
        }catch(e){  
        alert("There is error which shows "+e.message); //Handling error  
        }  








// let promise = (i) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('processing ' +i)
//         },1000)
//     });
// };

// let newf = async () =>{
//     console.log(await promise(1));
//     console.log(await promise(2));
//     console.log(await promise(3));
//     console.log(await promise(4));
//     console.log(await promise(5));
//     console.log('process complete');
// };
// newf()




let promise = (i) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(i<=5){
                resolve('processing '+ i)
            }else{
                reject()
            }
        },1000);
    });
}

let i = 0;

let newFunction = async () =>{
    try{
        console.log(await promise(i))
        i++;
        newFunction()
    }catch{
        console.log('processed')
    }
}
newFunction()













let pro = (n) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(n<5){
                resolve('one');
            }else{
                reject('two');
            }
        },2000)
    })
};

let asy = async () =>{
    try{
        let pro1 = await pro(1);
    console.log(pro1);
    let pro2 = await pro(7); //this line executes .catch and next code in the try is not executed;
    
    console.log(pro2);
    let pro3 = await pro(2);
    console.log(pro3)
    }catch(v){
        console.log(v);
    }
}
asy();
// in this code, we are checking, when .catch is executed;
// if promise is rejected, .catch is executed;