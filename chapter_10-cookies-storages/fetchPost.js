
//  read about fetch : (https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/)




// In JavaScript, when you use the fetch function to send data to a server using the 'POST' method, you can include the URL of the server endpoint where you want to send the data. However, you cannot use the file URL directly to perform a 'POST' request because the file URL does not refer to a server endpoint that can handle the HTTP request.

// If you are working with local files and you want to send data to a server, you would typically need to use a server-side script to handle the 'POST' request. You can create a server using technologies like Node.js, Python's Flask or Django, Ruby on Rails, or any other server-side technology, depending on your preferences and the specific requirements of your project.

// You can then use the URL of your server endpoint in the fetch request to send data to the server.Here's an example of how you might send data to a server using the 'POST' method:


fetch('http://example.com/api/endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' })
})
    .then(response => {
        // Process the response
    })
    .catch(error => {
        // Handle any errors
    });




//   In this example, 'http://example.com/api/endpoint' represents the URL of the server endpoint that can handle the 'POST' request. You can replace this URL with the appropriate endpoint URL of your server. Make sure that the server is set up to handle the 'POST' requests and process the data sent by the client.





// but we are not creating a server, In this chapter we are only learning fetch 'POST' method, so we will be using fake data from jsonPlaceholder







// how to make a post request : 



fetch('https://jsonplaceholder.typicode.com/users', {
    // an object that has properties (instructions) method,header and body etc;

    method: 'POST', // posting new data 
    body: JSON.stringify({
        // object of data you want to post
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        // several properties can be added but this property shows what would be the type of content
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    // .then chain is used to print my data in the console
    .then((response) => response.json())
    .then((json) => console.log(json));

// output will be an object that contains the properties 'title', 'body', userId and an additional property. which is 'id';
// the id will be usique for all the users
// as already existing users are 10; and all of these have their respective ids
// so is id will be 11;






//  we can also create objects and then pass then into the fetch like : 





// data i want to post with a new id;
let myData = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

// options are second argument object for fetch()
let options = {
    method: 'POST',
    body: JSON.stringify(myData),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
// async function is used instead of .then .catch
let func = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users', options);
        let result = await response.json();
        console.log(result);
        // console will be showing the new data object (posted);
        // if you only remove options obect from the fetch, console will be showing all the objects;
    }
    catch (error) {
        console.log(error);
    }
}
func();






















// PUT method : (to update/ change data)


// in put method you will be using the id of the object in which you want to update data inside your url like url/1 or any other;




// in url it is specified that the data of user, we are gonna change , has id:1;

// this will update the data in a way that the object only contains the data,given to the body and its data that was in it, before we putt new data, will be removed

fetch('https://jsonplaceholder.typicode.com/users/1',{
    method: 'PUT',
    headers : {
        'Content-Type' : 'application/json',
    },
    body : JSON.stringify({
        name : 'raees mughal',
        email : 'wajahatislammughal@gmail.com',
    })
})
.then(response=>response.json())
.then((result)=>console.log(result));











// PATCH method : 

// patch method is used to update the existing data


// in PUT method, the data is the only object, you entered in the body, and its existing data will be removed but with PATCH method, the existing data will be updated like it will add the new properties (with new names) in the existing data and replace the existing named data ;



let as1 = async () =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method : 'PATCH',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({

            // a and b are the new properties added in the object but title was already existing, so it is updated with new property;
            a:1,
            b:2,
            title : 'abc'
        }),
    });
    let result = await response.json();
    console.log(result);
};
as1();
















// DELETE method : 

// you only have to specify the id obj the object you want to delete




let as12 = async () =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method : 'DELETE',
    });
    let result = await response.json();
    console.log(result);
}
as12();

// this is fake data , but if you do this in the original data; the id 1 will be removed like it does not exist
