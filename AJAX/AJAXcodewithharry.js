// in html create 2 buttons and a p#para, and use DOM to accessin js




// elements selected
       let fetchBtn = document.querySelector('#fetch-btn');
        let backupBtn = document.querySelector('#backup-btn');
        let para = document.querySelector('#para');





        // for checking that buttons are working

        // let buttons = [fetchBtn,backupBtn];
        // buttons.forEach((btn)=>{
        //     btn.addEventListener('click',()=>{
        //         console.log('hello')
        //     })
        // })



        fetchBtn.addEventListener('click', buttonClickHandler);


        function buttonClickHandler() {

            console.log('a')
            // initiate xhr object
            const xhr = new XMLHttpRequest();

            // you want to send a get request (you want to get data); if 'post', you also have to post some data with request

            // second argument is url

            // third argument is a boolean (is your request asynchronous?)

            // open the object
            xhr.open('GET', 'https://randomuser.me/api/', true);
            // xhr.open('GET' , '/harry.txt' , true)


            // at this point from top to this line, request is not sent to the server, you have to use .send() xhr method to send request

            xhr.send()



            // what to do after the progress (optional);
            // there are many (optional) methods for xhr that you may use, .onprogress() is one of these

            xhr.onprogress = function () {
                para.innerHTML = 'hello world';
                para.style.backgroundColor = 'red'
            }


            // similar (this is also optional)
            // xhr.onloadend = function () {
            //     para.innerHTML = 'done';
            //     para.style.backgroundColor = 'blue'
            // }





















            // when response is ready, this function runs;

            // when the data is fetched (ready to use), run a function, in this function we access the fetched data and can convert in the required format (JSON,stirng)

            xhr.onload = function () {

                // the response data is stored in the 'data' variable

                // 'this.responseText' is the response

                // 'JSON.parse() is a method to convert this data into the json format';


                // JSON methods are used for the data to use the fetched data in its original (object/json) form, without JSON methods (if data is in the JSON format), you only get an object in the form of string.

                // if data is not in the form of JSON, you dont have to use JSON methods




                
                console.log(this.status); // show status code


                if (this.status >= 200 && this.status < 300) {

                    let data = JSON.parse(this.responseText);
                    console.log(data.info.version)


                    // console.log(typeof data)
                    

                }else{
                    console.log('error ' + this.status)
                }

            }

        }






















// their is another method (older but still can be used) onreadystatechange 



        // instead of "onload" you can also use onreadystatechange

        // actually readystate is a property of xhr that Returns a number representing the state of the request.

        // check explaination 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState'

        // i am creating buttonClickHandler function again to demonstrate onreadystatechange
        // this function runs everytime readyState of xhr changes
        // xhr.readyState can also be access outside of the onreadystatechange funtion



        function buttonClickHandler2() {
            const xhr = new XMLHttpRequest();
            // xhr.open('GET', 'https://randomuser.me/api/', true);
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

            xhr.send()

            // xhr.abort()   // 	Cancels the current request

            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4) {

                    // let data = JSON.parse(this.responseText);
                    // console.log(data.info.version);
                    console.log(this.responseText)
                    console.log(xhr.readyState)

                }// else block is not used because this function runs everytime the readystate changes, until it reaches 4, it would have called else block more than 2 times to show error.

            }

        }






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // POST METHOD



        // using string format (for details, check postRequest.html file);
        function buttonClickHandler3() {
            let xhr = new XMLHttpRequest();

            xhr.open('post', 'https://dummy.restapiexample.com/api/v1/create', true);

            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            
            let param = 'name=test&salary=123&age=23';

            xhr.send(param)

            // let param = {"name":"test","salary":"123","age":"23"}
            // let dataJson = JSON.stringify(param);
            // xhr.send(dataJson);


            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4) {
                    console.log(JSON.parse(this.responseText))
                }
            }
        }

















        // // using JSON format
        // function buttonClickHandler4() {

        //     let xhr = new XMLHttpRequest();

        //     xhr.open('post', 'https://dummy.restapiexample.com/api/v1/create', true);

        //     xhr.setRequestHeader('Content-type','application/json')

        //     let param = {"name":"test","salary":"123","age":"23zindabad "}
        //     let dataJson = JSON.stringify(param);
        //     xhr.send(dataJson);


        //     xhr.onreadystatechange = function () {

        //         if (xhr.readyState == 4) {
        //             console.log(JSON.parse(this.responseText).data)  // data key contains your data
        //         }
        //     }

        // }




























        // harry used this example to demonstrate post request using json data;
        // function buttonClickHandler() {
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('post', 'https://dummy.restapiexample.com/api/v1/create', true);
        //     xhr.setRequestHeader('Content-type','application/json')
        //     let param = `{"name":"test","salary":"123","age":"23zindabad "}`;
        //     xhr.send(param);
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState == 4) {
        //             console.log(this.responseText)  // data key contains your data
        //         }
        //     }
        // }
