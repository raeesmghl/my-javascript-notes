
// Finally is an optional block of statements which is executed after the execution of try and catch statements. Finally block does not hold for the exception to be thrown. Any exception is thrown or not, finally block code, if present, will definitely execute. It does not care for the output too.

// executes in all the cases;
// even a function has returned, generally the code next to 'return' keyword doesn't execute but if there is (finally clause) , it will execute;



// syntax;


try{  
    expression;  
    }  
    catch(error){  
    expression;  
    }  
    finally{  
    expression; } //Executable code  



    // example


    try{  
        var a=2;  
        if(a==2)  
        document.write("ok");  
        }  
        catch(Error){  
        document.write("Error found"+e.message);  
        }  
        finally{  
        document.write("Value of a is 2 ");  
        }  








// even the function has returned before, finally block will be executed in all the cases;


// note:
// we returned,'yes' if condition is true, and throw error when condition is false and when catch got it , it also returns err statement, and we loged it in the console, but we did not return the finally block, if we do so, only finally block is executed, all the other blocks are ignored;


        
let func = () =>{
    try{
        let con = confirm('yes or no?')
        if(con){
            return 'yes';
        }else{
            throw 'not defined';
        }
    }catch(err){
        return err;
    }finally{
        console.log('finally is running')
    }
};
console.log(func());












// coppied from chai our code folder (MUST PRACTICE);




// let func = (arr,callback,comp)=>{
//     let i = 0;
//     let iterator = () =>{
//         if(i<arr.length){
//             callback(arr[i],()=>{
//                 i++;
//                 iterator()
//             })
//         }else{
//             comp()
//         }
//     }
//     iterator();
// }

// let sec = (val,func)=>{
//     console.log(val + ' test passed');
//     setTimeout(func,1000);
// };
// let thr = () =>{
//     console.log('all test passed');
// };

// func([1,3,5,6,7],sec,thr)