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



