// Callback hell, also known as "Pyramid of Doom," is a common issue in JavaScript programming that arises when you have a series of nested callbacks within asynchronous functions. This can make your code difficult to read, understand, and maintain. Callback hell typically occurs in scenarios where you have to perform a sequence of asynchronous operations, and each operation depends on the result of the previous one. Here's an example of what callback hell might look like:



asyncFunction1(function(result1) {
    // Do something with result1
    asyncFunction2(function(result2) {
      // Do something with result2
      asyncFunction3(function(result3) {
        // Do something with result3
        asyncFunction4(function(result4) {
          // Do something with result4
          // ... and so on
        });
      });
    });
  });

// or:

setTimeout(() => {
    console.log('step 1')
    setTimeout(() => {
        console.log('step 2')
        setTimeout(() => {
            console.log('step 3')
            setTimeout(() => {
                console.log('step 4')
                setTimeout(() => {
                    console.log('process complete')
                }, 500)
            }, 1000)
        }, 2000)
    }, 3000)
}, 4000)





// there is another way of doing this :




let setp1 = (callback) => {
    setTimeout(() => {
        console.log('step 1');
        callback()
    },1000)
}
let step2 = (callback) => {
    setTimeout(() => {
        console.log('step 2');
        callback()
    },1000)
}
let step3 = (callback) => {
    setTimeout(() => {
        console.log('step 3');
        callback()
    },1000)
}
let step4 = () => {
    setTimeout(() => {
        console.log('step 4');
    },1000)
}


setp1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})
// here callback hell takes place;





// now with promises

// the function returns a new Promise and after specified time it resolves;

let func = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('step ')
        }, time)
    })
};

func(3000).then((value) => {
    console.log(value + '1');
    return func(2000);
}).then((v) => {
    console.log(v + '2');
    return func(1000);
}).then((val) => {
    console.log(val + '3');
})





// As you can see, the code becomes deeply nested, making it hard to follow and maintain. This pattern can lead to a few issues:

// Readability: The code becomes hard to read and understand because of the indentation levels and the separation of related code.

// Error Handling: Handling errors in such nested structures becomes complex, as you need to check for errors at each level.

// Debugging: Debugging can be challenging because it's not immediately clear which part of the code is causing issues.










//Example by CodeWithHarry 



let loadScript = (src, callback) => {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => {
      console.log('script is loaded with src : ' + src);
      callback(null, src);
  };
  script.onerror = () => {
      console.log('error in src : ' + src);
      let er = new Error('got error');
      callback(er, src);
  }
  document.body.appendChild(script)
};

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', (error, src) => {
  // alert(error?error:src);
  if (error) {
      console.log(error);
  } else {
      loadScript('https://cdn.tailwindcss.com', (error, src) => {
          // alert(error?error:src);
          if (error) {
              console.log(error);
          } else {
              loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js', (error, src) => {
                  // alert(error?error:src);
                  if (error) {
                      console.log(error);
                  } else {
                      loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js', (error, src) => {
                          // alert(error?error:src);
                          if (error) {
                              console.log(error);
                          } else {
                              loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js', (error, src) => {
                                  // alert(error?error:src);
                                  if (error) {
                                      console.log(error);
                                  } else {
                                      loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap6.bundle.min.js', (error, src) => {
                                          // alert(error?error:src);
                                          if (error) {
                                              console.log(error);
                                          } else {

                                          }
                                      })
                                  }
                              })
                          }
                      })
                  }
              })
          }
      })
  }
});


// every time loadScript is called with a (script src and callback function), if there is error in src, the error is shown. else loadScript is called again with another src, if it catches an error,it shows error , otherwise else statement is run again, and this process continue till last script is loaded, if any of these src got error, the else block of that callback function does not execute





// you can solve this using promises like :


let loadScriptt = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            console.log('src is loaded : ' + src);
            resolve(src);
        }
        script.onerror = () => {
            console.log('error in src : ' + src);
            let er = new Error('error aaya hai');
            reject(er);
        }
        document.body.appendChild(script)
    })
}

// calling the function


// loadScriptt('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
//     .then(loadScriptt('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'))
//     .then(loadScriptt('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'))
//     .then(loadScriptt('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'))
//     .then(loadScriptt('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'))
//     .catch((error) => {
//         console.log(error)
//     })







// in this example, the previous .then does not return anything,
// but the code below, .then returns something





// we can also do this in this way

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
.then(()=>{
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
})
.then(()=>{
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
})
.then(()=>{
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
})
.then(()=>{
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
})
.catch((error)=>{
    console.log(error)
})