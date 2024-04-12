

// checkout ('https://www.youtube.com/watch?v=itZ1A0hKUZs');



// very often their is an option of "accept cookies" on websites.


// example : on a shopping website, without creating an account, when you add a product to cart and close the tab/browser. as account was not created, data is not stored in the database;

// but in some of these websites (when cookies are accepted) when you comeback to the same website, you see that the product is still in the cart. this happend because when you add a product to cart, this website stores data (cookies) in your browser


// so basically whenever a website stores data in your browser, this data is called cookies;




// example : visit amazon website and go to developer tool's application options, where you will see an option for cookies, here you can see a key value pair of cookies (with some other options like : domain, path, expires, size etc) amazon has stored on your browser;



// now add a product to cart, this data is also stored in the browser , and whenever you come again to the amazon again, you will see the similar products ( to the product you added to cart) , or the products you were looking

// this happend because when you visit the website for the very first time, this webite returns a response and cookies data , again when you send a request, you are not only sending the only request this time, but also cookies,
// so the website uses these cookies and response with your personlized recommendations








// example : when you visit a website first time ,sets dark mode and close it, and when you go back to the website, you see its already dark mode

// bts whats happening ? when you visit first time and set dark mode, cookies are stored in the browser, and when you visit again, it used data to set your priorities/personalized recommendations










// DELETING cookies  : 

// if you want to delete all the cookies stored by a website on your browser, simply go to the website, open developer tool, go to applications and clear cookies

// OR you can go to the browser's setting and search for the specific website and delete all the data stored by it;

// after this action if there were products in the cart , will be removed , because this time, when you send request to the server, you only send request (cookies you have deleted);






// Example : on yahoo search some thing , come again to homepage of yahoo, this will show the same option in your search history, but if you delete cookies, it will not; and feels like visited first time













// EXPLAINED BY CHAT GPT


// Cookies are small pieces of data that websites store on your browser. They are used to remember stateful information or to record the user's browsing activity. Cookies can serve various purposes, such as keeping you logged in to a website, storing items in a shopping cart, or remembering your preferences on a website.


// Let's consider a simple example to understand cookies better:

// Imagine you visit an online shopping website for the first time. When you add items to your cart and proceed to checkout, the website may ask you to create an account. Once you create an account and log in, the website might store a cookie on your browser. This cookie contains information about your login status. So, the next time you visit the same website, it can read the cookie and automatically log you in without requiring you to enter your credentials again.

// Similarly, cookies can store other information like your preferred language, theme, or any specific settings you've chosen on a website. This makes your browsing experience more personalized and convenient.

// However, it's important to note that some cookies can also track your browsing behavior across different websites. This data can be used by advertisers to deliver targeted ads. While cookies can enhance the browsing experience, they also raise privacy concerns. As a result, many browsers provide options to manage and control the use of cookies, allowing users to delete them or limit their functionality.










// read more on  "https://www.tutorialspoint.com/javascript/javascript_cookies.htm"

// also try example
