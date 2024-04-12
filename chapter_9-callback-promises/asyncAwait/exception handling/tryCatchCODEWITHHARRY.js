
// TRY/CATCH method allows us to catch error so that the script instead of dying can do something which is more reasonable;



setTimeout(()=>{
    console.log('one')
},2000);

    console.log(rahul)   // this is error; rahul is not defined;

setTimeout(()=>{
    console.log('two');
},3000);
setTimeout(()=>{
    console.log('three');
},4000);
setTimeout(()=>{
    console.log('four');
},5000);
setTimeout(()=>{
    console.log('five');
},6000);


// only prints 'one' in the console and returns a ReferenceError; also stop the execution of code

// but if you use (try catch) method ; this only trys ,if this (block of code) executes, if not, it returns an error, which you can handle by .catch, in this way the whole code is not blocked;




setTimeout(()=>{
    console.log('one')
},2000);

// syntax of try catch;

try{
    console.log(rahul)
}catch(er){
    console.log('not defined')
    // console.log(er)
}



setTimeout(()=>{
    console.log('two');
},3000);
setTimeout(()=>{
    console.log('three');
},4000);
setTimeout(()=>{
    console.log('four');
},5000);
setTimeout(()=>{
    console.log('five');
},6000);





// this is generally used inside async await to handle the errors;





// if :

try{
    console.log(rahul);
}catch(er){
    console.log(er)
}
// this block of code says, if there is an error in printing rahul, return that error in the console as a statement;




// try catch works synchronously;
// if as exception happens in scheduled code like in setTimeout, then try...catch would not catch it;

// like

try{
    setTimeout(()=>{
        console.log(rahul)
    },2000)
}catch(er){
    console.log(er)
}
// in this case, the block of code (to be executed) is scheduled, so it could not catch the error, and after the timeout completes , it throws an error the stops the execution of the whole code;



// thats because the function itself is executed later, when the engine has already left the try...catch construct;




// this works:

setTimeout(()=>{
    try{
        console.log(rahul)
    }catch(er){
        console.log(er)
    }
},2000);
