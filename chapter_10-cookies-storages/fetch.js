// Basics of Fetch API:

// => The Fetch API provides a way to fetch resources asynchronously across the network. It's built into the global window scope, meaning you can access it anywhere in your code without requiring any additional libraries or dependencies.
// => Fetch is designed to be a more powerful and flexible replacement for the older XMLHttpRequest (XHR) method of making network requests.









// Syntax:

// The basic syntax of the Fetch API involves calling the fetch() function and passing it a URL as an argument. It returns a Promise that resolves to the Response to that request, whether it is successful or not.


// if request is sent to the server, it is resolved  (even there is an error from the surver (the promise will be fulfilled))
// if request was not sent to the server, it will be rejected


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

// this method is used for 'get' request but for other requests like 'post', 'put', 'delete', you have to use a second argument (fetch(url,{})) object;



// why there are two .then() handlers?

// when you call fetch with a url, it returns a response object (this data is not in the form, that you want, so second .then is used, that contains the data in the form that you want);



// in response of first .then(), you receive a Response object. The Response object represents the response to the request made. It includes information such as the status of the response (e.g., 200 for a successful request), headers, and the body of the response.


// When a Promise returned by the Fetch API is resolved, it typically provides a Response object. This Response object represents the response to the request made by the fetch function. The Response object itself doesn't directly contain the actual data but instead provides methods to handle the data.


// if you log the value of response in the console, there is an object that contains different key/values like :



// fetch('json.json').then((response)=>{
//   console.log(response);
// });


// output : 

// response = {
//   body: (...),
//   bodyUsed : false,
//   // headers : Headers { },
//   ok: true,
//   redirected : false,
//   status : 200,
//   statusText: "",
//   type: "cors",
//   url : "https://jsonplaceholder.typicode.com/users",
// }

























// status and ok : 

// In the context of the Fetch API, the "status" and "ok" properties are part of the Response object returned when a network request is made. They provide information about the status of the HTTP response. Here's what they represent:




















// "STATUS" : 

// The status property of the Response object represents the "HTTP status code" of the response. This status code indicates whether the request was successful, encountered an error, or requires some form of redirection;

// These status codes are standardized by the Internet Assigned Numbers Authority (IANA) in the HTTP/1.1 specification.They provide information about the status of the request made to the server.



// 1xx (Informational): These are provisional responses, indicating that the server has received the request and is processing it.

// 2xx (Success): These indicate that the request was received, understood, and accepted successfully. Some common 2xx status codes include:

          // 200 (OK): Standard response for successful HTTP requests.
          // 201 (Created): The request has been fulfilled, resulting in the creation of a new resource.
          // 204 (No Content): The server has successfully fulfilled the request but does not need to return an entity-body.
// 3xx (Redirection): These status codes indicate that further action needs to be taken to complete the request. They often involve redirection to another resource. Common 3xx status codes include:

// 301 (Moved Permanently): The requested resource has been assigned a new permanent URI.

// 302 (Found): The requested resource resides temporarily under a different URI.

// 4xx (Client Error): These indicate that there was an error on the client's side. Common 4xx status codes include:

// 400 (Bad Request): The server cannot process the request due to a client error.

// 404 (Not Found): The server cannot find the requested resource.

// 5xx (Server Error): These indicate that there was an error on the server's side. Common 5xx status codes include:

// 500 (Internal Server Error): A generic error message, given when an unexpected condition was encountered on the server.

// 503 (Service Unavailable): The server is currently unable to handle the request due to temporary overloading or maintenance of the server.







// the HTTP status codes, including the ones representing errors such as 4xx (Client Error) and 5xx (Server Error), are typically sent by the server as part of the HTTP response. When you make a request using the Fetch API, the response object contains the HTTP status code provided by the server.

//For example, if you encounter a 404 status code (indicating that the requested resource was not found) in the resolved Promise, you can handle it by using .catch()









// OK : 

// In the context of the Fetch API, the ok property is a Boolean value that is part of the Response object. It indicates whether the response to the HTTP request was successful or not. Here's a detailed explanation of the ok property:

// Definition: The ok property is set to "TRUE" if the HTTP response status is within the range of 200-299, indicating that the request was successful. If the status falls outside this range, the ok property is set to "FALSE", indicating that the request was not successful.

// Usage: Developers often use the ok property to quickly check the success of the request without directly inspecting the status code. This simplifies error handling and provides a straightforward way to determine whether the request was successful or encountered an error.







// USE of OK in example 👍



fetch('jsondata.json').then((response)=>{
  if(!response.ok){
      throw 'Network response was not OK';
  }else{
      return response.json();
  }
}).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error)
})



// using async/await :



let func = async () =>{
  try{
      let response = await fetch('jsondata.json');
      if(!response.ok){
          throw 'you got some error';
      }
      let result =await response.json();
      console.log(result)
  }catch(error){
      console.log(error);
  }
}
func()























// now you got the response object

// Once the request is made, you handle the response with a series of Promise-based then() methods, where you can parse the response using methods like json(), text(), or others, depending on the type of response you expect



// First .then():

// The first .then() is used to handle the Promise returned by the fetch() function. This Promise represents the response to the HTTP request.


// Inside the first .then(), you can extract the data from the response in a specific format. For example, if you expect JSON data, you can call the json() method on the response, which returns another Promise that resolves to the actual JSON data.




// To access the actual data from the Response object, you need to call one of the methods provided by the Response object. The most common methods are:


// json() :

// json(): This method parses the response body as JSON and resolves the promise with the result. It is used when the response is in JSON format.


// text() : 

// text(): This method reads the response body to completion as text and resolves the promise with a string. It is used when the response is plain text.



// blob(): This method returns a promise that resolves with a Blob. It is used when the response is a Blob type.

// arrayBuffer(): This method returns a promise that resolves with an ArrayBuffer. It is used when the response is an ArrayBuffer.












// JSON is a common data format for transferring data between a server and a client. It is widely used due to its simplicity and readability. When you receive data from a server in JSON format, you need to use the json() method to parse the data and convert it into a format that JavaScript can work with. This allows you to access the data as a JavaScript object, which you can then use to update your web page or perform other operations.

















// NOW THE SECOND .then()




// The second .then() is used to handle the Promise returned by the json() method (or any other method used to extract the data from the response) in the previous step.
// Inside the second .then(), you can access the actual data retrieved from the server and perform operations on it. This could include displaying it on the webpage, manipulating it, or passing it to other functions for further processing.



















// RESPONSE HEADER & REQUEST HEADER;



//RESPONSE HEADER;

// in the fetch 'GET' method, the response object contains a property called headers and its value is an object;


// REQUEST HEADER;

// but when using 'POST' method, the header you create (inside the second arg object), contains different key value pairs like : 

// 'Content-Type' : 'application/json';
