

// we can write the simple code in previous chapters, using callbacks


// example

// this is a code to get the age and respond according to the user's input
// while function runs until the age is not defined or age is less than 0;
// inside while loop we used different conditions for different conditions you can see


// let age;
// age = Number(age);
// while(!age || age<0){
//     age = Number(prompt('enter your age'));

//     if(age<0){
//         alert('please enter a valid age')
//     }else if(age>0 && age<18){
//         alert('underaged')
//     }else if(age>=18){
//         alert('welcome')
//     }
//     if(!age){
//         alert('please enter your age');
//     }
// }




// WE CAN DO THE SAME USING CALLBACK FUNCTION LIKE: 



let gettingAge = (callback) => {
    let age = Number(prompt('enter your age'));

    if (!age) {
        alert('please enter your age');
        gettingAge(callback);
    } else if (age < 0) {
        alert('please enter a valid age');
        gettingAge(callback);
    } else {
        callback(age)
    }
}

function isEligible(age) {
    if (age < 18) {
        alert('underage')
    } else {
        alert('welcome')
    }
}

gettingAge(isEligible);







// also a simple way called recursive function; in which a function is called inside itself following a condition , to prevent it from infinity;

let gettingAgE = ()=>{
    let age = Number(prompt('enter your age'));

    if(!age){
        alert('age is not defined');
        gettingAge();
    }else if(age<0){
        alert('age is invalid');
        gettingAge()
    }else if(age<18){
        alert('under age');
    }else if(age>=18){
        alert('welcome')
    }
}

gettingAgE()
















































// SIMILLARLY A PROGRAM CALLED 'GUESS THE NUMBER' 



// let number = Math.floor(Math.random()*100)+1;
// let attempts = 0;
// let guess;
// while(guess!=number){
//     guess = Number(prompt('enter your number'));

//     if(!guess){
//         attempts++;
//         alert('please enter a number')
//     }else if(guess<0 || guess>100){
//         attempts++;
//         alert('please enter a number (1-100)')
//     }else if(guess>number){
//         attempts++;
//         alert('try smaller than '+ guess + '\nattempts done : ' + attempts);
//     }else if(guess<number){
//         attempts++;
//         alert('try bigger than ' + guess + '\nattempts done : ' + attempts);
//     }else if(guess == number){
//         attempts++;
//         alert('yes the guess is '+ number);
//         alert('attempts : ' + attempts)
//     }
// }






//  DOING THE SAME USING CALLBACK FUNCTIONS



let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessNumber = (callback) => {
    attempts++;
    let guess = Number(prompt('enter your number'));
    if (guess == number) {
        alert('yes the guess is ' + number);
        alert(attempts);
    } else {
        callback(number, guess)
    }
}
// THIS IS FUNCTION THAT CHECKS IF A GUESS IS EQUALS TO NUMBER ELSE IT CALLS THE CALLBACK FUNCTION 

let checkGuess = (n, guess) => {
    if (!guess) {
        alert('please enter a number');
        guessNumber(checkGuess);
    } else if (guess < 0 || guess > 100) {
        alert('(1-100) only');
        guessNumber(checkGuess);
    } else if (guess < n) {
        alert('try bigger than ' + guess);
        guessNumber(checkGuess);
    } else if (guess > n) {
        alert('try smaller than ' + guess);
        guessNumber(checkGuess);
    }
}
 // THIS IS A CALLBACK FUNCION THAT APPLYS DIFFERENT CONDITIONS ACCORDING TO THE VALUE PASSED

guessNumber(checkGuess); // FUNCTION CALL WITH CALLBACK







// simpler example : recursive function is used;



let numberr = 22;
let attemptss = 0;
let guessGame = () =>{
    let guess = Number(prompt('enter a number'));
    attemptss++;
    if(!guess){
        alert('please enter a number');
        guessGame();
    }else if(guess<0 || guess>100){
        alert('1 to 100');
        guessGame();
    }else if(guess>numberr){
        alert('try smaller than ' + guess)
        guessGame();
    }else if(guess<numberr){
        alert('try bigger than '+ guess)
        guessGame();
    }else if(guess===numberr){
        alert('yes the guess is '+ guess + ' in just '+ attemptss + ' attempts');
        
    }

}

guessGame()























// EXAMPLE BY (WEB DEV SIMPLIFIED);




// change to boolean values to see the different results
// if both are true;
// if userLeft is true; watchingMeme is false;
// if userLeft is false, watchingMeme is true;
// if both are false;

let userLeft = false;
let watchingMeme = true;

if(userLeft){
    console.log('user left :(');
}else if(watchingMeme){
    console.log('wasting time by watching memes');
}else{
    console.log('thumbs up, it means you are working');
}



// we can do this by callbacks like:



// this is mannered way : by (WEB DEV SIMPLIFIED)

let userLefts = true;
let watchingMemes = true;


let isUserWorking = (callback, callbackError) => {
    if (userLefts) {
        callbackError(
            {
                name: 'user left',
                message: ':('
            }
        )
    } else if (watchingMemes){
        callbackError(
            {
                name:'watching memes',
                message:'wasting time and not working'
            }
        )
    }else{
        callback('thumbs up, it means you are working')
    }

}
    let firstCall = (value) =>{
        console.log(value)
    };
    let errorCall = (obj)=>{
        for(let i in obj){
            console.log(i + ' : ' + obj[i])
        }
    };

isUserWorking(firstCall,errorCall);





// using promises:


// very simple method
// just removed all the callbacks
// the function will return promise with resolved or rejected according to the condition, instead of callng a function(callback)
// .then method is used to get (if resolved) and .catch is used to get (if rejected);


let userLefted = true;
let watchingMemeed = true;

let func = () =>{
    return new Promise((resolve,reject) =>{
        if(userLefted){
            reject({
                status:'user Left',
                reason : 'very personal reason',
            });
        }else if(watchingMemeed){
            reject({
                status : 'user is wasting his time',
                reason : 'watching memes'
            })
        }else{
            resolve('he is working')
        }
    })
};
func()
.then((v)=>{
    console.log(v)
})
.catch((obj)=>{
    for(let i in obj){
        console.log(i + ' : ' + obj[i]);
    };
})































let greet = (name,callback)=>{
    console.log('hello ' + name);

    let func1 = (callb) =>{
        setTimeout(()=>{
            console.log('let me check')
            callb()
        },1000);
    };

    let func2 = () =>{
        setTimeout(()=>{
            callback()
        },1000)
    }

    func1(func2)
}

greet('raees',()=>{
    console.log('yes you are right')
})

// the purpose of making this example is just to check the code when used callbacks ;actually this is an example on callBack.js












