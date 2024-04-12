





// example by codewithharry;


// if you do console.log(), inside a promise body; it will print this even without calling promise or using handlers


let prom = new Promise((resolve, reject) => {
    console.log('promise is pending');

    setTimeout(() => {
        console.log('promise is fulfilled, it is resolved');
    }, 1000);
});

// this promise will print both the console.log() but if you check promise state, its still pending and result is undefined;

console.log(prom);


// it will remain pending until it is resolved or rejected;



// to prevent this , we use promises as returned value of a function









// .then chain 


//  in .then if you return something (maybe promise or a value), and this allows you to create a new .then to access this value;


// if its returning a promise, its OK, otherwise if there is a value, javascript will convert this value into an imediately resolved promise, and is will be handled using a new .then() handler


// as there is callback hell in callback asynchronous execution
// .then is used to solve the problem of callback hell;






const mypromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        const sum = 4 + 5;
        resolve(sum);
    }, 2000);
});


mypromise
    .then((v) => {
        console.log(v);
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
            })
        })
        return p2;
    }).then((v) => {
        console.log(v);
        return 13;
    }).then((v) => {
        console.log(v);
    });









// ATTACHING MULTIPLE HANDLERS ON SAME PROMISE (THIS IS NOT CHAINING .THEN)


// we are not chaining two .then handlers, we are using promise multiple time. they are independent, they are not passing values to each other;


promise
    .then((v) => {
        console.log(v)
    });


promise
    .then((v) => {
        console.log('abc', v)
    });













    // loadScript example using promises


    let loadScript = (src) =>{
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.src = src;
            script.onload = () =>{
                resolve(src)
            }
            script.onerror = () =>{
                let er = new Error('err aa gya j');
                reject(er);
            }
            document.body.appendChild(script)
        })
    };


    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
    // returning promise
    .then((v)=>{
        console.log(v);
        //returning promise
        return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
    })
    .then((v)=>{
        console.log(v)
    })
    .catch((v)=>{
        console.log(v)
    })


























    //////////////////////////////////////////////////////////


    //PROMISE API



    



    