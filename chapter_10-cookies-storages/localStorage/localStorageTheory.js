

// Local storage is a web browser feature that allows web applications to store data locally within the user's browser. It provides a simple key-value based storage mechanism that enables web pages to store data on a user's device, which can be accessed later on. Local storage is a part of the web storage API along with session storage, which provides similar functionality but with a different scope and lifecycle.


// Here are some key points about local storage:




// SCOPE :

//    Local storage is specific to each origin (or domain). This means that each website has its own local storage, and data stored by one website is not accessible to another website, even if they are on the same domain.(with different subdomains);

// This means that two websites serving content from the same domain but different subdomains will have different local storage data. Similarly, two websites serving content from different domains will not share local storage data.



// For example, consider two websites: "example.com" and "subdomain.example.com". Even though they share the same root domain, their local storage will be independent of each other. Furthermore, if you have two different domains, such as "example1.com" and "example2.com", the local storage for each domain will be completely separate.

// In essence, the same origin policy governs the scope of local storage, ensuring that web pages from different origins cannot access each other's local storage data for security reasons.


// even if the protocols differ (HTTP vs HTTPS), the local storage data for the two versions will be treated as separate entities.


// read about subdomains : "https://www.wpbeginner.com/glossary/subdomain/"







// Persistence: 

//    Data stored in local storage remains available even after the browser is closed and reopened. It persists until explicitly cleared by the website or the user.




// Data Format: 

//     Local storage can only store strings. If you want to store complex data types such as objects or arrays, you need to serialize them into a string format (e.g., JSON) before storing and deserialize them back into their original format when retrieving.




// Local storage is commonly used for caching data, storing user preferences, and managing state within a web application. It allows developers to create more responsive and dynamic web applications by reducing the need to fetch data from the server each time a user interacts with the application.







// Security Considerations : 

//      While local storage is a convenient feature, it's important to be cautious about the type of data stored, as it is accessible by any script on the page. Sensitive information, such as passwords or authentication tokens, should not be stored in local storage due to potential security risks





// Event-based Notifications : 

//      Changes to local storage are not automatically detected by the application. Developers often use the storage event to track changes made to the local storage from other windows or tabs. This event allows developers to synchronize data across multiple instances of the same web application running in different tabs or windows.






// Expiry and Limitations: 

// Unlike cookies, local storage data does not have an expiry date, which means it persists until explicitly cleared. However, this lack of automatic expiry also means that developers must manually handle data cleanup and removal when necessary. Moreover, the storage capacity varies by browser, and exceeding the storage limit can result in data loss or unexpected behavior.





















// unlike cookies, local storage are not sent to the browser


// there is no expiry of local storage , so it remains available even after the reload page or close the browser and reopen the browser, It persists until explicitly cleared by the website or the user.

// just like cookies, localstorage is accessible from the developer tool's application

// localstorage is a web storage object which are not sent to the server with each request (like cookies)





















// by w3schools.com :



// The localStorage object allows you to save key/value pairs in the browser.


// Note : 

// The localStorage object stores data with no expiration date.
// The data is not deleted/removed when the browser is closed, and are available for future sessions.




// Local storage is indeed an object that exists within the browser. It is a part of the Web Storage API, which provides mechanisms for storing key-value pairs in a web browser. Unlike cookies, data stored in the local storage isn't automatically transmitted to the server with every HTTP request. It remains local to the client, making it a more secure option for storing larger amounts of data on the client side.




// syntax : 

// window.localStorage
// or: localStorage



// save data to localStorage
//  localStorage.setItem(key, value);



//read data from localStorage : 
//   let lastname = localStorage.getItem(key);



//Remove Data from Local Storage : 
//   localStorage.removeItem(key);



//Remove All (Clear Local Storage): 
// localStorage.clear();
