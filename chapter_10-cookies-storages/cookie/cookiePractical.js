


// before writing a line of code on cookies, you shoud know that cookies are associated with domain

// means : if you try to open an index.html file (file.js is also linked) and you will see all the things working perfectly (as expected) but you will not see any cookies.


// This is because you opened this from file system , but cookies are domain associated, so you have to host the website to use HTTP protocol, or you can use a local host like 'live server';











// Cookies are a plain text data record of 5 variable-length fields −

// Expires − The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.

// Domain − The domain name of your site.

// Path − The path to the directory or web page that set the cookie. This may be blank if you want to retrieve the cookie from any directory or page.

// Secure − If this field contains the word "secure", then the cookie may only be retrieved with a secure server. If this field is blank, no such restriction exists.

// Name=Value − Cookies are set and retrieved in the form of key-value pairs












// JavaScript can also manipulate cookies using the cookie property of the Document object. JavaScript can read, create, modify, and delete the cookies that apply to the current web page.





// The simplest way to create a cookie is to assign a string value to the document.cookie object, which looks like this.

// document.cookie = "key1 = value1;key2 = value2;expires = date";
// Here the expires attribute is optional. If you provide this attribute with a valid date or time, then the cookie will expire on a given date or time and thereafter, the cookies' value will not be accessible.








document.cookie = 'item=milk';

//by this line, the cookie is stored on the browser

// if "Expires" is not defined it will be 'Session' which means the cookie will expire after session end.





// to add another cookie, do this again;


document.cookie = 'location=US';





// for changing the value of a cookie , reuse its name and change the value

document.cookie = 'item=egg';








// setting EXPIRY ;


document.cookie = 'a=1;Expires=Fri Nov 03 2023 21:26:56';




// OR

let date = new Date();
date.setTime(date.getTime() + (1000 * 60 * 60 * 24 * 5));


document.cookie = 'a=1;Expires=' + date;

// set expiry to 5 days from the present date;





// when date is passed, the cookie is deleted
// so if you want to delete a cookie, simply select the same name/value (property/value) and enter a passed date;

document.cookie = 'a=1;Expires=Thu Nov 02 2023 00:00:00'
















// see example : 


// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Example usage: setting a cookie with an expiration date of 30 days
setCookie("exampleCookie", "exampleValue", 30);






// which is same as : 

let func = (n, v, d) => {

    let date = new Date();
    date.setTime(date.getTime() + d * 1000 * 60 * 60 * 24)

    // present date is stored in the date variable; 
    // .setTime method takes milliseconds and set date from 1970 (and adds these milliseconds in it)
    // so i set its value date.getTime() , that converts the present date to milliseconds (since 1970) and added no of days (converted to milliseconds)

    document.cookie = n + '=' + v + ';Expires=' + date
}
func('raees', 'mughallll', 30)







// you can also set PATH and SECURE


let dat = new Date();
dat.setTime(new Date().getTime() + 1000 * 60 * 60 * 24)
document.cookie = 'a=1;Path=/;Secure=secure;Expires=' + dat;















// let cookieArray = document.cookie.split(';');




// for(let i of cookieArray){
//     let EachElAr = i.split('=');

//     let el = document.createElement('p');
//     el.innerHTML = 'the key is '+ EachElAr[0] + ' and value is ' + EachElAr[1];
//     document.body.appendChild(el)
// }












// When setting cookies, it's important to encode the cookie name and value to ensure that they do not contain any characters that could potentially interfere with the structure of the cookie or the URL.


// special character is a character that is not an alphabetic or numeric character;


// Cookies are stored as key-value pairs, where the key and value can contain characters that have special meanings in the context of a cookie (such as semicolons, commas, spaces, and equals signs). If these (part of a key or value) special characters are not properly encoded, they can disrupt the formatting of the cookie and cause unexpected behavior.




// By using encodeURIComponent when setting a cookie, you ensure that any special characters are converted into a format that is safe for inclusion in a URI. This helps prevent potential issues with parsing and interpreting the cookie data correctly.






// examples : 



let encodedKey = encodeURIComponent('key');
let encodedValue = encodeURIComponent('value');
document.cookie = encodedKey + '=' + encodedValue;

// simply rights cookie in the browser

// but if there is a special character like ; or = etc



// let encodedKey = encodeURIComponent('key;');
// let encodedValue = encodeURIComponent('value');
// document.cookie = encodedKey + '='+encodedValue;


// the 'key;' is changed into key%3B


// you can use decodeURIComponent('key%3B') to get the decoded answer





// example by chatgpt:


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    var encodedName = encodeURIComponent(name);
    var encodedValue = encodeURIComponent(value);
    document.cookie = encodedName + "=" + encodedValue + expires + "; path=/";
}

// Example usage: setting a cookie with an expiration date of 30 days
setCookie("exampleCookie", "example;Value", 30);


// In this example, the encodeURIComponent function is used to encode both the cookie name and value before they are set. This ensures that any special characters in the name and value are properly handled and do not interfere with the cookie's structure.






// Encoding is the process of converting data into a format that is suitable for transmission or storage in a specific system. It involves transforming data into a different representation, often to ensure that it can be correctly interpreted and processed by the target system or application.


// Decode is the process of converting encoded data into its original format
