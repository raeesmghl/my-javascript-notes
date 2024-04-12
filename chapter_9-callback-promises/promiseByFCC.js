






// this example is by  "Yogesh Chavan"

// aricle : (https://www.freecodecamp.org/news/javascript-promises-async-await-and-promise-methods/)



// How to Use JavaScript Promises – Callbacks



  // let posts = [
        //     { postId: 1, postName: 'first Post' },
        //     { postId: 2, postName: 'second Post' },
        //     { postId: 3, postName: 'third Post' },
        // ];
        // let comments = [
        //     { postId: 2, comment: 'saleem' },
        //     { postId: 3, comment: 'thread' },
        //     { postId: 2, comment: 'suv' },
        //     { postId: 2, comment: 'salt' },
        //     { postId: 1, comment: 'only ' },
        //     { postId: 3, comment: 'throw' },
        // ];


        // let getPost = (postId, callback) => {

        //     let post = posts.find((post_Id) => { return post_Id.postId == postId });

        //     if (post) {
        //         callback(null, post)
        //     } else {
        //         let er = new Error('no id found');
        //         callback(er, post)
        //     }
        // };

        // let getComment = (post_Id, callback) => {
        //     let comment = comments.filter((cmt) => { return cmt.postId == post_Id });

        //     if (comment) {
        //         callback(null, comment)
        //     } else {
        //         let er = new Error('no comments found');
        //         callback(er, comment)
        //     }
        // };


        // getPost(2, (error, post) => {
        //     if (error) {
        //         console.log(error)
        //     } else {
        //         console.log('this is the post : ', post);
        //         getComment(post.postId, (error, comment) => {
        //             if (error) {
        //                 console.log(error);
        //                 return
        //             } else {
        //                 console.log('comment : ', comment)
        //             }
        //         })
        //     }
        // })








        const promise = new Promise(function(resolve, reject) {
          setTimeout(function() {
           const sum = 4 + 5;
           resolve(sum);
          }, 2000);
         });
         
         promise.then(function(result) {
          console.log(result); // 9
         });





         // this is how then() handler chain works
         promise.then(function(result) {
          console.log('first .then handler');
          return result;
         }).then(function(result) {
          console.log('second .then handler');
          console.log(result);
         }).catch(function(error) {
          console.log(error);
         });










        //  Many times we don't want the promise to execute immediately. Rather, we want it to delay until after some operation is completed.

        //  To achieve this, we can wrap the promise in a function and return that promise from that function like this:



        function createPromise(a, b) {
          return new Promise(function(resolve, reject) {
           setTimeout(function() {
            const sum = a + b;
            if(isNaN(sum)) {
              reject('Error while calculating sum.');
            } else {
             resolve(sum);
            }
           }, 2000);
          });
         }
         

        // calling a function which returns a promise
        // for handling the promise's result, we use .then handler
         createPromise(1,8)
          .then(function(output) {
           console.log(output); // 9
         });






        //  Note: When we create a promise, it will be either resolved or rejected but not both at the same time. So we cannot add two resolve or reject function calls in the same promise.

        //  Also, we can pass only a single value to the resolve or reject function.
         
        //  If you want to pass multiple values to a resolve function, pass it as an object like this:

        // also did this in webDevSimplified example (passing object as resolved/reject value);




        const promis = new Promise(function(resolve, reject) {
          setTimeout(function() {
           const sum = 4 + 5;
           resolve({
            a: 4,
            b: 5,
            sum
           });
          }, 2000);
         });
         
         promis.then(function(result) {
          console.log(result);
         }).catch(function(error) {
          console.log(error);
         });





// how to use arrow function in promise ✅
















// example on the top can be solved by using promises;



let posts = [
  {post:1,content:'first post'},
  {post:2,content:'second post'},
  {post:3,content:'third post'},
  {post:4,content:'fourth post'},
];

let comments = [
  {post:1,comment:'comment for first post 1'},
  {post:2,comment:'comment for second post 1'},
  {post:1,comment:'comment for first post 2'},
  {post:3,comment:'comment for third post 1'},
  {post:3,comment:'comment for third post 2'},
];

let gettingpost = (n) =>{
  return new Promise((resolve, reject) => {
    let post = posts.find((v)=>{
      return v.post ===n;        
    });
    if(post){
      resolve(post)
    }else{
      reject('post not found')
    }
  })
}




let gettingComment = (n) =>{
  return new Promise((resolve, reject) => {
    let comment = comments.filter((v)=>{
      return v.post ===n;        
    });
    if(comment.length!==0){
      resolve(comment)
    }else{
      reject('comment not found');
    }
  })
}


gettingpost(4).then((v)=>{
  console.log(v)
  return gettingComment(v)
}).then((v)=>{
  console.log(v)
}).catch((er)=>{
  console.log(er)
})

// .then and .catch are used to handle the promises;
// async/await can also be used, try catch are also used;



let func = async () =>{
  try{
   let a = await gettingpost(4);
   console.log(a);
   let b = await gettingComment(a.post);
   console.log(b)
  }catch(er){
   console.log(er)
  }
}
func()