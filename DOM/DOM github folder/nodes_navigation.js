navigation between the nodes





------------------------------------------------------------parentNode----------------------------------------------------

//parent node and parent element are very similar to each other 
//when you want to access a parent with parentNode it should be a node (all the tags are nodes)
// but when you want to access the parent with parentElement it should be an element


<div id="div1">
    <h1 id="h">this is a heading</h1>
    <p id="p">this is a paragraph</p>
    <span id="sp">this is a span</span>
    <div>this is a div</div>
</div>
<script>
    let selecting = document.getElementById('p').parentNode;


    console.log(selecting); //this will give the parent of the element p with id='p' . that is a div with id='div1'


    console.log(typeof selecting);//this will give the type of the parentNode (which is object)
 </script>




------------------------------------------------------------childNode[node number]----------------------------------------------------



// used to select the node with its node number


//this is used for selecting a child element with its node number(position) starting from 1

<div id="first-div">
        <h1 id="heading" >this is a heading for test </h1>
        <p id="p" >this is a paragraph</p>
      <span id="sp" >this is a span</span>
        </div>
        <script>
            let gettingchild = document.getElementById('first-div').childNodes[1];

            console.log(gettingchild)//this will print an object <h1> in the console
            console.log(typeof gettingchild);//this will give the type of the childNode (which is object)
        </script>



//but if selecting the text node of a parent element, we use 0


//above example


 <script>
            let gettingchild = document.getElementById('heading').childNodes[0];

            console.log(gettingchild)//this will print text node of h1
            console.log(typeof gettingchild);//this will give the type of the childNode (which is object)
        </script>




------------childNodes------or------children-------------
    
    
    <div id="div1">
        <h1>this is heading</h1>
        <p>this is a paragraph</p>
        <span>this is a span</span>
        <div>this is a div</div>
        </div>
        <script>
            let b =document.getElementById('div1').childNodes
            console.log(b)    // this will print an object of all the children of div#div1
        </script>


//childNodes and children has same working but children ignores the spaces between the elements while childNodes also prints the spaces as textNode




------------------------------------------------------------firstChild----------------------------------------------------


//selects the first child of the element
//even the spaces


 <ul id="list">
        <li>bread</li>
        <li>egg</li>
        <li>jam</li>
        <li>milk</li>
        <li>honey</li>
    </ul>
    <script>
   
       let foodlist = document.getElementById('list').firstChild;

       console.log(foodlist); //this will print the spaces before the first li element as a (text node)

       console.log(typeof foodlist); //object

    </script>




//but if spaces are deleted than
 <ul id="list"><li>bread</li><li>egg</li><li>jam</li><li>milk</li><li>honey</li></ul>
    <script>
   
       let foodlist = document.getElementById('list').firstChild;

       console.log(foodlist); //this will print the first li as object

       console.log(typeof foodlist); //object

    </script>






to overcome this, we use :
------------------------------------------------------------firstElementChild----------------------------------------------------


//this will ignore the spaces and selects the element



<ul id="list">
        <li>bread</li>
        <li>egg</li>
        <li>jam</li>
        <li>milk</li>
        <li>honey</li>
    </ul>
    <script>
   
       let foodlist = document.getElementById('list').firstElementChild;

       console.log(foodlist); //this will print the first li as object

       console.log(typeof foodlist); //object

    </script>











<h1 id="heading" >this is a heading</h1>
<script>
  let printing = document.getElementById('heading').firstElementChild;
console.log(printing);//will print null because there is a text node inside the heading, not the element node
  </script>










    <h1 id="heading" >this is a heading</h1>
    <script>
      let printing = document.getElementById('heading').firstChild;
    console.log(printing);//will print text node in the form of object
    console.log(typeof printing) //this is object
      </script>
    




but if you use firstChild.nodeValue :



<h1 id="heading" >this is a heading</h1>
<script>
  let printing = document.getElementById('heading').firstChild.nodeValue;
console.log(printing);//will print text in <h1> as string
console.log(typeof printing) //this is string
  </script>





------------------------------------------------------------lastChild----------------------------------------------------

//same as firstChild




<div id="div1">
    <p>this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let p = document.getElementById('div1').lastChild;
        console.log(p);//selects the spaces before the last element as text node
    </script>



//if the spaces before the closing tag of div are deleted, it will select the span








------------------------------------------------------------lastElementChild----------------------------------------------------








<div id="div1">
    <p>this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let p = document.getElementById('div1').lastElementChild;
        console.log(p);//selects the span as an element node
    </script>











------------------------------------------------------------nextSibling----------------------------------------------------

selects the next sibling, dont ignore the spaces




<div id="div1">
    <p id="p">this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let selecting = document.getElementById('p').nextSibling;
        console.log(selecting);//selects the spaces before the next sibling element as text node
    </script>


//if remove the spaces, it selects the span element










to overcome this, we use:
------------------------------------------------------------nextElementSibling----------------------------------------------------





<div id="div1">
    <p id="p">this is a paragraph</p>
    <span>this is a span for test</span>
</div>
    <script>
        let selecting = document.getElementById('p').nextElementSibling;
        console.log(selecting);//selects the span element node
    </script>








------------------------------------------------------------previousSibling----------------------------------------------------



selects the previous sibling



    <h1>this is a heading</h1>
<p id="para">this is a paragraph</p>

<script>
  let previous = document.getElementById('para').previousSibling;
console.log(previous)    //prints the spaces as text node between <p> and <h1>
</script>



//remove the spaces to get <h1>





to overcome this problem we use:
------------------------------------------------------------previousElementSibling----------------------------------------------------



    <h1>this is a heading</h1>
    
    <p id="para">this is a paragraph</p>

<script>
  let previous = document.getElementById('para').previousElementSibling;
console.log(previous)//will print the <h1> as object
</script>
    







------------------------------------------------------------childElementCount----------------------------------------------------

used to count the number of child elements in a parent element


    <div id="div">
        <h1 id="h1">this is a heading</h1>
        <p id="p">this is a paragraph</p>
    </div>
    <script>
        let b = document.getElementById('div').childElementCount;
        console.log(b)    // result is 2
    </script>












-----------------------------------------------------------NodeValue-----------------------------------------------------------------------------------


            
            
The nodeValue property specifies the value of a node.

    nodeValue for element nodes is null
    nodeValue for text node is text itself


    
    

                ----------example with element node------------



<p id="demo">this is a paragraph</p>

<script>
let y =document.getElementById("demo").nodeValue;
console.log(y);// will print null
</script>




              ----------example with text node------------



<p id="demo">this is a paragraph</p>

<script>
let y =document.getElementById("demo").firstChild.nodeValue;
console.log(y);// will print the text inside the <p>
</script>



-----------------------------------------------------------nodeName-----------------------------------------------------------------------------------

show the name of the node

<h1 id="demo">this is a heading</h1>

<script>
let y =document.getElementById("demo").nodeName;
document.write(y); //wil print H1 in document








---------------------------------------------------examples by w3school -----------------------------------------------------------------------------------



// giving value to other using innerHTML

    <h1 id="id01">My First Page</h1>
    <p id="id02"></p>
    
    <script>
    document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
    </script>
    

// doing same with navigation of nodes




    <h1 id="id01">My First Page</h1>
    <p id="id02"></p>
    
    <script>
    document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
    </script>




     -------or you can do this---------
      
      
         

      
         <h1 id="id01">My First Page</h1>
    <p id="id02"></p>
    
    <script>
    document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
    </script>








------------------------------------------------------------DOM Root Nodes----------------------------------------------------





            -------------------document.body-------------------
    
// executes the whole body of the HTML document

    <script>
        console.log(document.body)       //this will print the whole body as object 
        console.log(typeof document.body)  // object
    </script>





           --------------document.documentElement--------------


 <script>
        console.log(document.documentElement)       // will print the HTML page as object
        console.log(typeof document.documentElement)  //object
    </script>






-------------------------------------------------------------------Examples----------------------------------------------------------------------------------



    <h2>JavaScript HTMLDOM</h2>
<p>Displaying document.body </p>

<p id="demo"></p> 
//this will contain the both elements present in the body

<script>
document.getElementById("demo").innerHTML = document.body.innerHTML ;
</script>






// same for document.documentElement






   <h2>JavaScript HTMLDOM</h2>
<p>Displaying document.documentElement</p>

<p id="demo"></p> 
//this will contain the both elements present in the body

<script>
document.getElementById("demo").innerHTML = document.documentElement.innerHTML ;
</script>










<div>
    <h1>this is a heading</h1>
</div>


<script>
        let a =document.body.firstElementChild.firstElementChild
console.log(a)  //this will print the <h1> in the form of object
console.log(typeof a)   // object
</script>











    <div>
        <h1>this is a heading</h1>
    </div>


    <script>
        let a = document.body
        console.log(a)           //will print <body> in the form of object               
        console.log(typeof a)    // object
        let b =a.firstElementChild
        console.log(b))           //will print <div> in the form of object
        console.log(typeof b)    // object
        let c = b.firstElementChild
        console.log(c))           //will print <h1> in the form of object
        console.log(typeof c)    // object
        let d = c.childNodes[0]
        console.log(d))           //will print textNode inside the <h1> in the form of object
        console.log(typeof d)    // object
        let e = d.nodeValue
        console.log(e))           //will print text in the form of string
        console.log(typeof e)    // string
    </script>

// this only text can also be executed as


    <div>
        <h1>this is a heading</h1>
    </div>
    <script>
     let a =document.body.firstElementChild.firstElementChild.childNodes[0].nodeValue
     console.log(a)                //pri9nts the text in <h1>
     console.log(typeof a)         //string
    </script>


















