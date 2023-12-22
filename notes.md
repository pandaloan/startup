# 9-16-23 - First Notes
Today I learned about GitHub from my first GitHub assignment. I learned that I need to stage, commit, and push when making changes to either a local machine or GitHub. I need to pull changes from either file to get them. Don't alter both files without committing and pushing, but if you do, merge conflicts can be handles in VS Code and probably in GitHub. Keep files in the 'startup' Git Repository.

# 9-22-23 - Terminal
- vi - to enter insert mode, press i. to return to command mode, press esc. to exit from command mode, press q. 
- To save and quit, be in command mode, then type :wq
- place single quotes '' around files and directories that have spaces in their names when entering them into the terminal
- cd .. to go to parent directory


# 9-22-23 - Server
- Stopping a server is NOT the same as terminating it
- Assigning an elastic IP address will change the IP address for your server, but it will not change again until you release the elastic IP address. If you do terminate your server and create a new one, you can again associate the same elastic IP address with your new server.
- Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.

# 10-14-23 - Deployment
- enter in terminal to deploy to startup: (deploy while in startup directory)
./deployFiles.sh -k ~/[key file directory] -h albinochipmunk.click -s startup
- to deploy to simon: (deploy while in Simon/simon-css or simon-html or simon-whatever)
./deployFiles.sh -k ~/[key file directory] -h albinochipmunk.click -s startup

# 10-14-23 - Comments
- <!----> to comment in html
- /**/ to comment in css

# 10-14-23 - CSS
- use sticky head and footer
- make sure home login button works

# 10-14-23 - short javascript program - array assignment
  function testAll(input, tester) { //if tester is true for each value of input, testAll returns true
  const result = input.every(tester) // Your code here
  return result
  }

  const result = testAll(['a', 'b', 'c', 'd'], (theInput) => theInput.length > 3); //if theInput > 3, arrowFunction returns true

  console.log(result);

  # Midterm Study Guide questions and answers
  1. The link HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
     The link tag defines the relationship between the current document and an external resource. The link tag is most often used to link to external style sheets or to add a favicon to your website. The link element is an empty element, it contains attributes only.
  
  2. The div tag defines a division or a section in an HTML document. The div tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript. The div tag is easily styled by using the class or id attribute. Any sort of content can be put inside the div tag! Note: By default, browsers always place a line break before and after the div element.
  
  3. The dot(.) and hash(#) both of them are used as CSS selectors. Both selectors are used to select the content to set the style. CSS selectors select HTML elements according to their id, class, type, attribute, etc.
Id selector(“#”): The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page so it is chosen to select a single, unique element. It is written with the hash character (#), followed by the id of the element. 

    Syntax: 

#element_id_name{
  // CSS properties
}

Class Selector(“.”): The class selector selects HTML elements with a specific class attribute. It is used with a period character “.” (full stop symbol) followed by the class name. 

    Syntax: 

.element_class_name{
  // CSS properties
}

4. CSS box model

Margin and padding are the components of the CSS box model, a design specificity related to any HTML element. These boxes of multi-layered elements are combined to form a single layout of the web page. 

In general, box model usually contains four components:

    Content is the core of the box. It’s around the content the other layers are built. Content can have different visualizations: it can be text, image, icon or something else.
    Padding is the space between content and border, which is the next component of the box.
    Border is a visible or invisible line around the edge of the box. 
    Margin is the outer space around the box.

For better visibility, let’s look at the picture below, which gives a general presentation box model.
https://aheadworks.com/media/Blog/shopify/Translation_6_.png

5. The flex property is a shorthand property for:

flex-grow
flex-shrink
flex-basis
The flex property sets the flexible length on flexible items.

Note: If the element is not a flexible item, the flex property has no effect.

flex-grow	- A number specifying how much the item will grow relative to the rest of the flexible items	
flex-shrink -	A number specifying how much the item will shrink relative to the rest of the flexible items	
flex-basis - The length of the item. Legal values: "auto", "inherit", or a number followed by "%", "px", "em" or any other length unit	
auto - Same as 1 1 auto.	
initial -	Same as 0 1 auto. Read about initial	
none -	Same as 0 0 auto.	
inherit	- Inherits this property from its parent element.

Example
Using flex together with media queries to create a different layout for different screen sizes/devices:

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 50%;
}

.flex-item-right {
  flex: 50%;
}

/* Responsive layout - makes a one column layout (100%) instead of a two-column layout (50%) */
@media (max-width: 800px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}

general flex info:
Default value:	0 1 auto
Inherited:	no
Animatable:	yes, see individual properties. Read about animatable
Version:	CSS3
JavaScript syntax:	object.style.flex="1"

6. CSS padding: Padding is used to create space around an element's content, inside of any defined borders.
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:

padding-top
padding-right
padding-bottom
padding-left
All the padding properties can have the following values:

length - specifies a padding in px, pt, cm, etc.
% - specifies a padding in % of the width of the containing element
inherit - specifies that the padding should be inherited from the parent element
Note: Negative values are not allowed.

7. Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

Before Arrow:
hello = function() {
  return "Hello World!";
}

With Arrow Function:
hello = () => {
  return "Hello World!";
}

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

Arrow Functions Return Value by Default:
hello = () => "Hello World!";

Note: This works only if the function has only one statement.

If you have parameters, you pass them inside the parentheses:

Arrow Function With Parameters:
hello = (val) => "Hello " + val;

In fact, if you have only one parameter, you can skip the parentheses as well:

Arrow Function Without Parentheses:
hello = val => "Hello " + val;

8. Multiply all the values in an array with 10:

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
More examples below.

Description
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.

See Also:
The Array filter() Method

The Array forEach() Method

Syntax
array.map(function(currentValue, index, arr), thisValue)
Parameters:
Parameter and	Description:
function() -	Required. A function to be run for each array element.
currentValue -	Required. The value of the current element.
index -	Optional. The index of the current element.
arr	 -Optional. The array of the current element.
thisValue	- Optional. Default value undefined.
A value passed to the function to be used as its this value.
Return Value:
Type	and Description:
An array -	The results of a function for each array element.

9. HTML DOM Document getElementById()
Example: Get the element with the specified id: document.getElementById("demo");

The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element. Note: Any id should be unique, but: If two or more elements with the same id exist, getElementById() returns the first.
See Also:
The getElementsByTagName() Method
The getElementsByClassName() Method
The querySelector() Method
The querySelectorAll() Method

JavaScript HTML DOM EventListener:
The addEventListener() method
Example: Add an event listener that fires when a user clicks a button: document.getElementById("myBtn").addEventListener("click", displayDate);
The addEventListener() method attaches an event handler to the specified element.
The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
You can add many event handlers to one element.
You can add many event handlers of the same type to one element, i.e two "click" events.
You can add event listeners to any DOM object not only HTML elements. i.e the window object.
The addEventListener() method makes it easier to control how the event reacts to bubbling.
When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
You can easily remove an event listener by using the removeEventListener() method.
Syntax:velement.addEventListener(event, function, useCapture);
The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
The second parameter is the function we want to call when the event occurs.
The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

Add an Event Handler to an Element
Example: Alert "Hello World!" when the user clicks on an element: element.addEventListener("click", function(){ alert("Hello World!"); });
You can also refer to an external "named" function: Example: Alert "Hello World!" when the user clicks on an element: element.addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello World!");
}

10. The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
example:
HTML
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar" (\b is the backspace control character)
  document.querySelector("#foo\bar"); // Does not match anything

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\\\bar"); // Match the first div

  document.querySelector("#foo:bar"); // Does not match anything
  document.querySelector("#foo\\:bar"); // Match the second div
</script>

javascript example:
in this example, the first element in the document with the class "myclass" is returned:
JS
const el = document.querySelector(".myclass");

Complex selectors
Selectors can also be really powerful, as demonstrated in the following example. Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class is "user-panel main" (<div class="user-panel main">) in the document is returned:

JS
const el = document.querySelector("div.user-panel.main input[name='login']");
Negation
As all CSS selector strings are valid, you can also negate selectors:

JS
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);

11. The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

> document
<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
p {
  color: red;
}

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);

You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}

Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');

To delete elements call the removeChild function on the parent element.

function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');

Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

<img src="bogus.png" onerror="console.log('All your base are belong to us')" />

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.
Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.
Event Category 	Description
Clipboard 	Cut, copied, pasted
Focus 	An element gets focus
Keyboard 	Keys are pressed
Mouse 	Click events
Text selection 	When text is selected

You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.

<button onclick='alert("clicked")'>click me</button>

12. The span tag is an inline container used to mark up a part of a text, or a part of a document. The span tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute. The span tag is much like the div element, but div is a block-level element and span is an inline element.

13. CSS:
    div {
  background-color: red;
}

14. display an image with a syperlink in HTML:
    Put the anchor tag <a href=””> before the image url, and </a> after. Paste the destination URL you want to add within the quotation marks for <a href=””>. Make sure you put “http://” before the link.
Follow the example below:
<a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>

15. CSS box model: the ordering of the box layers starting at the inside and working out:
    content, padding, border, margin

16.

17.

18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? see question 9
    Javascript: getElementById(id)
    
  javascript example:  
  function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
  }
  

19. Understanding the following tables:
Common HTML tags are presented below, organized into four tables based on their purpose. The first table includes tags that control the overall structure of the web page. The second and third tables include tags that mark up the majority of web page content. Container tags (those that contain content) are presented in the second table, and non-container tags (those that stand alone) are presented in the third table. The final table contains tags that are used in markup of HTML tables, which are covered in Module 5 of this unit.

Document Structure
Opening Tag	- Closing Tag	- Description
<html>	</html>	Opens and closes an HTML document
<head>	</head>	The first of two main sections of an HTML document. The <head> section is used to provide information about the document for use primarily by search engines and browsers.
<title>	</title>	The title of document. This element is nested inside the <head> section. In HTML5, this is the only required tag other than the DOCTYPE declaration.
<body>	</body>	The second of two main sections of an HTML document. The <body> section contains all the content of the web page.
Content (Container) Tags
Opening Tag	Closing Tag	Description
<h1> to <h6>	</h1>to</h6>	Headings. H1 is the main heading, H2 is secondary, etc.
<p>	</p>	Paragraph
<div>	</div>	A container for a block of content
<span>	</span>	A container for in-line content, such as content inside a paragraph.
<em>	</em>	Gives the contained text emphasis (usually as italics).
<strong>	</strong>	Makes the contained text bold.
<a href = "document location">	</a>	Link
<ol>	</ol>	Ordered (numbered) list
<ul>	</ul>	Unordered (bulleted) list
<li>	</li>	List item, must be nested inside a list element such as a <ol> or <ul>
<!--	-->	Comment. Anything between these tags is not displayed on the screen. This is useful for making notes to yourself or to others who may view the source code of the web page.
  
HTML5 Semantic Tags
HTML5 introduced several new tags called semantic tags. These tags were designed to communicate the function of blocks of content that were common on many web pages. Prior to HTML5, developers just used <div> tags for all blocks.
Opening Tag	- Closing Tag	- Description
<header>	</header>	Contains introductory content for a page (e.g., a banner), or a section of a page.
<nav>	</nav>	Contains navigation content, such as a website navigation menu.
<main>	</main>	Contains the main content of the web page.
<aside>	</aside>	Contains content that is tangentially related to the main content of the page (often this is presented in a sidebar).
<footer>	</footer>	Contains the footer of a page, or of a section of a page. Typically the footer contains information about the content, such as the author and a copyright statement.

Empty (Non-Container) Tags
Tag	- Description
<br />	Line break.
<img src ="image location" alt="alternate text" />	Inserts an image into a web page.

Tables
Opening Tag	- Closing Tag -	Sample Attributes -	Description
<table>	</table>	 	Adds a table
<tr>	</tr>	 	Table row (start & end).
<th>	</th>	scope="row"
scope="col"	When creating a table to display data, use this tag to differentiate the first row or column of cells as heading cells for all the other cells in the same column or row. Browsers typically display this element bold and centered within the table cell. The scope attribute defines whether this is a row header or column header.
<td>	</td>	 	Table data cell.
 	 	colspan="number"	Use with <th> or <td> elements. Spans cells across multiple columns.
 	 	rowspan="number"	Use with <th> or <td> elements. Spans cells across multiple rows.

https://www.washington.edu/accesscomputing/webd2/student/unit2/common_tags.html#:~:text=An%20opening%20tag%20begins%20a,the%20element%20with%20a%20%2F).

20. How do you declare the document type to be html?
    When starting a new HTML document, one of the first things to do is write your document type declaration. A doctype declaration tells the browser that the page to be rendered is written in HTML. To declare an HTML5 doctype, `<!DOCTYPE html>` is required in the first line of your HTML document. Doctype declaration for HTML5 is not case sensitive and does not require a closing tag.

21. Javascript syntax:
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}


while (i < 10) {
  text += "The number is " + i;
  i++;
}

     switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 

if (x) {let x = y}

JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

22. A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}

The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.
Object-literals

You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

const obj = {
  a: 3,
  b: 'fish',
};

Object functions

Object has several interesting static functions associated with it. Here are some of the commonly used ones.
Function 	Meaning
entries 	Returns an array of key value pairs
keys 	Returns an array of keys
values 	Returns an array of values

const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']

Constructor

Any function that returns an object is considered a constructor and can be invoked with the new operator.

function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich

This pointer
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.

23. Is is possible to add new properties to javascript objects? yes.
Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.
https://www.w3schools.com/js/js_object_properties.asp#:~:text=Properties%20are%20the%20values%20associated,but%20some%20are%20read%20only.
Accessing JavaScript Properties:
The syntax for accessing the property of an object is:

objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]
The expression must evaluate to a property name.

24. If you want to include JavaScript on an HTML page, which tag do you use? The <script> Tag
In HTML, JavaScript code is inserted between <script> and </script> tags.

Example:
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

25.

26. which of the following is true about JSON?

    JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, RFC 8259).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
Format

A JSON document contains one of the following data types:
Type 	Example
string 	"crockford"
number 	42
boolean 	true
array 	[null,42,"crockford"]
object 	{"a":1,"b":"crockford"}
null 	null

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}

JSON is always encoded with UTF-8. This allows for the representation of global data.
Converting to JavaScript

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}

Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.

27. Console commands:
    
    echo - Output the parameters of the command
    cd - Change directory
    mkdir - Make directory
    rmdir - Remove directory
    rm - Remove file(s)
    mv - Move file(s)
    cp - Copy files
    ls - List files
    curl - Command line client URL browser
    grep - Regular expression search
    find - Find files
    top - View running processes with CPU and memory usage
    df - View disk statistics
    cat - Output the contents of a file
    less - Interactively output the contents of a file
    wc - Count the words in a file
    ps - View the currently running processes
    kill - Kill a currently running process
    sudo - Execute a command as a super user (admin)
    ssh - Create a secure shell on a remote computer
    scp - Securely copy files to a remote computer
    history - Show the history of commands
    ping - Check if a website is up
    tracert - Trace the connections to a website
    dig - Show the DNS information for a domain
    man - Look up a command in the manual

You can also chain the input and output of commands using special characters

    | - Take the output from the command on the left and pipe, or pass, it to the command on the right
    > - Redirect output to a file. Overwrites the file if it exists
    >> - Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

ls -l | grep ' Nov ' | wc -l

There are also keystrokes that have special meaning in the console.

    CTRL-R - Use type ahead to find previous commands
    CTRL-C - Kill the currently running command


The chmod (short for change mode) command is used to manage file system access permissions on Unix and Unix-like systems. There are three basic file system permissions, or modes, to files and directories:
    read (r)
    write (w)
    execute (x)
Each mode can be applied to these classes:
    user (u)
    group (g)
    other (o)
The user is the account that owns the file. The group that owns the file may have other accounts on the system as members. The remaining class, other (sometimes referred to as world), means all other accounts on the system. You can view the modes on files and directories by executing this command: ls -l

One of the primary purposes of a console application is to view the files on the computer. The files on a computer are organized into a tree structure of nodes called directories. At any given point in time your console is located at one of the directories in the file system. You can see which directory you are in with the pwd (present working directory) command.

➜  pwd

/Users/student/byu//webprogramming260

Vim stuff:
To use VI, open your console and change directory to one that holds some code you want to work on. For example, if you wanted to edit index.html you would type: vi index.html
The following short list of commands should allow you to do most of what you will ever want to do in VIM.
keystroke 	meaning
:h 	help
i 	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
u 	undo
CTRL-r 	redo
gg 	go to beginning of file
G 	go to end of file
/ 	search for text that you type after /
n 	next search match
N 	previous search match
v 	visually select text
y 	yank or copy selected text to clipboard
p 	paste clipboard
CTRL-wv 	Split window vertically
CTRL-ww 	Toggle windows
CTRL-wq 	Close current window
:e 	Open a file. Type ahead available. If you open a directory you can navigate it in the window
:w 	write file (save)
:q 	quit. Use :q! to exit without saving

The great thing about learning these commands is that you will find that they work with a lot of the POSIX console programs. For example, with the file viewing utility less you can use G and gg to jump to the top and bottom of a file. Here is a cheat sheet if you want to see all the commands.
how to close vim: press esc to enter normal mode, then press ":q!"

wget - Downloading files with wget is easy. Type wget followed by the file URL you wish to download to your command prompt app, and the download should begin after you press enter.

nano: Opening and Creating Files
To open an existing file or to create a new file, type nano followed by the file name: nano filename
close nano: ctrl + x

28. console command creates a remote shell session? ssh? rsh?
    To shell into production environment server: ssh -i ~/Documents/'CS 260'/'First Key Pair.pem' ubuntu@52.206.31.215

29. console command ls -la: You can list all of the files in the directory with ls (list files). Most command line applications take parameters that are specified after you type the application name. For example, ls can list all files (even hidden ones) in a long format if you provide the parameter -la.
total 16
-rw-r--r--  1 lee  staff   1.0K Nov 19 08:47 LICENSE
-rw-r--r--  1 lee  staff    82B Nov 19 08:47 README.md
drwxr-xr-x  4 lee  staff   128B Nov 19 08:48 profile
drwxr-xr-x  4 lee  staff   128B Nov 19 08:47 react

30. top level domain: .com, .click
    [subdomain.]*secondary.top
    root = secondary.top
    there can be an unlimited amount of subdomains, or at least more than one, as far as I understand.

31. Is a web certificate is necessary to use HTTPS? To use HTTPS with your domain name, you need a SSL or TLS certificate installed on your website. Your web host (Web Hosting Provider) may offer HTTPS security or you can request a SSL/TLS certificate from Certificate Authorities and install it yourself. SSL/TLS certificates may need to be renewed periodically.
    so, yes, i think you need a web certificate to use https


32. A DNS A record is the most fundamental type of DNS record. The A stands for “Address,” and it’s used to point a domain name to an IP address or host. You can only use an A record when you want to point to an IPv4 address. An AAAA record is required if you wish to direct your domain to an IPv6 address. 

The DNS A record points a domain name like google.com to the IP address of itsDNS hosting server, in this case, “74.125.224.147.” While most sites have a single A DNS record, it’s possible to have multiple records. 

Another vital aspect of a DNS A record is that you can use it (often with a CNAME record) to create a subdomain that also points to the same IP address, for instance, blog.example.com.

33. HTTPS is secure and is on port 443, while HTTP is unsecured and available on port 80. Information that travels on the port 443 is encrypted using Secure Sockets Layer (SSL) or its new version, Transport Layer Security (TLS) and hence safer. The TLS 1.2 is the latest version which has fixed several recent vulnerabilities.

Using HTTPS also helps minimize a Ransomware attack by identifying open ports and then blocking access with a firewall. It is highly advisable to access and transact on sites with HTTPS to protect yourself from malicious elements as it prevents your personal information, passwords, customer data, and business-critical data from being intercepted and stolen.

port 22 is for ssh (secure shell protocol)

34. javascript promises:
    Promises

📖 Deeper dive reading:

    MDN Using Promises
    MDN Promise

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

    pending - Currently running asynchronously
    fulfilled - Completed successfully
    rejected - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2

Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

console.log(coinToss);
// OUTPUT: Promise {<pending>}

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}

Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed

The observer pattern
Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

Example pizza promise:
function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => makePizza(order))
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function makePizza(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `pizza eaten by raccoon`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}

original pizza:
/ Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });


async/await pizza:
/*function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}*/

//async/await version of pickupPizza)()
async function pickupPizza() {
  const order = createOrder();
  try {
    await placeOrder(order);
    //await makePizza(order)
    serveOrder(order);
  } catch (order) {
    orderfailure(order);
  }
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}

async/await original pizza:

function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}

# Final
# 11-4-23
- URL: <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
Part 	- Example 	- Meaning
Scheme - 	https 	- The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain - name 	- byu.edu 	The domain name that owns the resource represented by the URL.
Port 	- 3000 	- The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
Path 	- /school/byu/user/8014 	- The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
Parameters 	- filter=names&highlight=intro,summary 	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
Anchor 	- summary 	- The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.
URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

- Ports:
Port 	Protocol
20 	File Transfer Protocol (FTP) for data transfer
22 	Secure Shell (SSH) for connecting to remote devices
25 	Simple Mail Transfer Protocol (SMTP) for sending email
53 	Domain Name System (DNS) for looking up IP addresses
80 	Hypertext Transfer Protocol (HTTP) for web requests
110 	Post Office Protocol (POP3) for retrieving email
123 	Network Time Protocol (NTP) for managing time
161 	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194 	Internet Relay Chat (IRC) for chatting
443 	HTTP Secure (HTTPS) for secure web requests

Use port 4000 for your startup service. Simon uses port 3000 for its service, and they can't use the same port.

- HTTP:
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.
Verb 	Meaning
GET 	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST 	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT 	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE 	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS 	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

    1xx - Informational.
    2xx - Success.
    3xx - Redirect to some other location, or that the previously cached resource is still valid.
    4xx - Client errors. The request is invalid.
    5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.
Code 	Text 	Meaning
100 	Continue 	The service is working on the request
200 	Success 	The requested resource was found and returned as appropriate.
201 	Created 	The request was successful and a new resource was created.
204 	No Content 	The request was successful but no resource is returned.
304 	Not Modified 	The cached version of the resource is still valid.
307 	Permanent redirect 	The resource is no longer at the requested location. The new location is specified in the response location header.
308 	Temporary redirect 	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400 	Bad request 	The request was malformed or invalid.
401 	Unauthorized 	The request did not provide a valid authentication token.
403 	Forbidden 	The provided authentication token is not authorized for the resource.
404 	Not found 	An unknown resource was requested.
408 	Request timeout 	The request takes too long.
409 	Conflict 	The provided resource represents an out of date version of the resource.
418 	I'm a teapot 	The service refuses to brew coffee in a teapot.
429 	Too many requests 	The client is making too many requests in too short of a time period.
500 	Internal server error 	The server failed to properly process the request.
503 	Service unavailable 	The server is temporarily down. The client should try again with an exponential back off.


# Final Notes
Server Notes File
i-032171a33480d4aad

https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:instanceId=i-032171a33480d4aad

public IPv4 address: 54.236.237.156

place single quotes '' around files and directories that have spaces in their names when entering them into the terminal

stopping a server is NOT the same as terminating it



****Important****

from https://github.com/webprogramming260/.github/blob/main/profile/webServers/amazonWebServicesEc2/amazonWebServicesEc2.md

Assigning an elastic IP address will change the IP address for your server, but it will not change again until you release the elastic IP address. If you do terminate your server and create a new one, you can again associate the same elastic IP address with your new server.

Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.****
**********



***Elastic IP address: 52.206.31.215

To shell into production environment server:

ssh -i ~/Documents/'CS 260'/'First Key Pair.pem' ubuntu@52.206.31.215



albinochipmunk.click

http://albinochipmunk.click/


vi - to enter insert mode, press i. to return to command mode, press esc. to exit from command mode, press q. To save and quit, be in command mode, then type :wq


https://albinochipmunk.click/
https://startup.albinochipmunk.click/
https://simon.albinochipmunk.click/


enter in terminal to deploy to startup: (deploy while in startup directory)
./deployFiles.sh -k ~/Documents/'CS 260'/'First Key Pair.pem' -h albinochipmunk.click -s startup

to deploy to simon: (deploy while in Simon/simon-css or simon-html or simon-whatever)
./deployFiles.sh -k ~/Documents/'CS 260'/'First Key Pair.pem' -h albinochipmunk.click -s simon

./deployService.sh -k ~/Documents/'CS 260'/'First Key Pair.pem' -h albinochipmunk.click -s simon

run from in simon-db or whatever


./deployService.sh -k ~/Documents/'CS 260'/'First Key Pair.pem' -h albinochipmunk.click -s startup

git clone saves repo to Abby on laptop


https://www.youtube.com/watch?v=4ARsthVnCTg


git clone saves repo to Abby on laptop


https://www.youtube.com/watch?v=4ARsthVnCTg




//run in vs code console?
npm init -y
npm install ws






Abby@RazorCrest MINGW64 ~/testExpress
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 15916  100 15916    0     0  36130      0 --:--:-- --:--:-- --:--:-- 36337
=> nvm is already installed in /c/Users/Abby/.nvm, trying to update using git
=> => Compressing and cleaning up git repository

=> Profile not found. Tried ~/.bashrc, ~/.bash_profile, ~/.zprofile, ~/.zshrc, and ~/.profile.
=> Create one of them and run this script again
   OR
=> Append the following lines to the correct file yourself:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

Abby@RazorCrest MINGW64 ~/testExpress
$ . ~/.nvm/nvm.sh
Abby@RazorCrest MINGW64 ~/testExpress
$ . ~/.nvm/nvm.sh

Abby@RazorCrest MINGW64 ~/testExpress
Now using node v20.9.0 (npm v10.1.0)
Installing latest LTS version.
Abby@RazorCrest MINGW64 ~/testExpress
$ node -v
v20.9.0


curl/service mental model is still unclear to me - ask about it

$lt = less than
$gte = greater than or equal
go over dataServices.md

mongodb+srv://abbykemp:<password>@cluster0.iwhkrhg.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://abbykemp:<password>@cluster0.iwhkrhg.mongodb.net/


???
ubuntu@ip-172-31-39-48:~/services/startup$ scp -i ~/Documents/'CS 260'/'First Key Pair.pem' ubuntu@52.206.31.215 ~/services/startup/database.js ~/Documents/startup


to run on local host:
(ctrl c if needed)
node index.js
in browser: localhost:3000



startup-react1 is a repo

DON'T COMMIT STARTUP YET!!!

node index.js from gitbash server folder to start back end

# End server notes file
#1. 33. HTTPS is secure and is on port 443, while HTTP is unsecured and available on port 80. Information that travels on the port 443 is encrypted using Secure Sockets Layer (SSL) or its new version, Transport Layer Security (TLS) and hence safer. The TLS 1.2 is the latest version which has fixed several recent vulnerabilities.

Using HTTPS also helps minimize a Ransomware attack by identifying open ports and then blocking access with a firewall. It is highly advisable to access and transact on sites with HTTPS to protect yourself from malicious elements as it prevents your personal information, passwords, customer data, and business-critical data from being intercepted and stolen.

port 22 is for ssh (secure shell protocol)

#2 Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

    1xx - Informational.
    2xx - Success.
    3xx - Redirect to some other location, or that the previously cached resource is still valid.
    4xx - Client errors. The request is invalid.
    5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.
Code 	Text 	Meaning
100 	Continue 	The service is working on the request
200 	Success 	The requested resource was found and returned as appropriate.
201 	Created 	The request was successful and a new resource was created.
204 	No Content 	The request was successful but no resource is returned.
304 	Not Modified 	The cached version of the resource is still valid.
307 	Permanent redirect 	The resource is no longer at the requested location. The new location is specified in the response location header.
308 	Temporary redirect 	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400 	Bad request 	The request was malformed or invalid.
401 	Unauthorized 	The request did not provide a valid authentication token.
403 	Forbidden 	The provided authentication token is not authorized for the resource.
404 	Not found 	An unknown resource was requested.
408 	Request timeout 	The request takes too long.
409 	Conflict 	The provided resource represents an out of date version of the resource.
418 	I'm a teapot 	The service refuses to brew coffee in a teapot.
429 	Too many requests 	The client is making too many requests in too short of a time period.
500 	Internal server error 	The server failed to properly process the request.
503 	Service unavailable 	The server is temporarily down. The client should try again with an exponential back off.

#3 Content-Type

The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

In responses, a Content-Type header provides the client with the actual content type of the returned content. This header's value may be ignored, for example when browsers perform MIME sniffing; set the X-Content-Type-Options header value to nosniff to prevent this behavior.

In requests, (such as POST or PUT), the client tells the server what type of data is actually sent.
Header type 	Representation header
Forbidden header name 	no
CORS-safelisted response header 	yes
CORS-safelisted request header 	yes, with the additional restriction that values can't contain a CORS-unsafe request header byte: 0x00-0x1F (except 0x09 (HT)), "():<>?@[\]{}, and 0x7F (DEL).
It also needs to have a MIME type of its parsed value (ignoring parameters) of either application/x-www-form-urlencoded, multipart/form-data, or text/plain.
Syntax
http

Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something

Directives

media-type

    The MIME type of the resource or the data.
charset

    The character encoding standard. Case insensitive, lowercase is preferred.
boundary

    For multipart entities the boundary directive is required. The directive consists of 1 to 70 characters from a set of characters (and not ending with white space) known to be very robust through email gateways. It is used to encapsulate the boundaries of the multiple parts of the message. Often, the header boundary is prepended with two dashes and the final boundary has two dashes appended at the end.

Examples
Content-Type in HTML forms

In a POST request, resulting from an HTML form submission, the Content-Type of the request is specified by the enctype attribute on the <form> element.
html

<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>

The request looks something like this (less interesting headers are omitted here):
http

POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--

Specifications
Specification
HTTP Semantics
# status.206
HTTP Semantics
# field.content-type

#4 Using HTTP cookies

An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. It remembers stateful information for the stateless HTTP protocol.

Cookies are mainly used for three purposes:

Session management

    Logins, shopping carts, game scores, or anything else the server should remember
Personalization

    User preferences, themes, and other settings
Tracking

    Recording and analyzing user behavior

Cookies were once used for general client-side storage. While this made sense when they were the only way to store data on the client, modern storage APIs are now recommended. Cookies are sent with every request, so they can worsen performance (especially for mobile data connections). Modern APIs for client storage are the Web Storage API (localStorage and sessionStorage) and IndexedDB.

Note: To see stored cookies (and other storage that a web page can use), you can enable the Storage Inspector in Developer Tools and select Cookies from the storage tree.
Creating cookies

After receiving an HTTP request, a server can send one or more Set-Cookie headers with the response. The browser usually stores the cookie and sends it with requests made to the same server inside a Cookie HTTP header. You can specify an expiration date or time period after which the cookie shouldn't be sent. You can also set additional restrictions to a specific domain and path to limit where the cookie is sent. For details about the header attributes mentioned below, refer to the Set-Cookie reference article.
The Set-Cookie and Cookie headers

The Set-Cookie HTTP response header sends cookies from the server to the user agent. A simple cookie is set like this:
http

Set-Cookie: <cookie-name>=<cookie-value>

This instructs the server sending headers to tell the client to store a pair of cookies:
http

HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]

Then, with every subsequent request to the server, the browser sends all previously stored cookies back to the server using the Cookie header.
http

GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry

Note: Here's how to use the Set-Cookie header in various server-side applications:

    PHP
    Node.JS
    Python
    Ruby on Rails

Define the lifetime of a cookie

Cookies can persist for two different periods, depending on the attributes used with the Set-Cookie header when they were created:

    Permanent cookies are deleted at a date specified by the Expires attribute or after a period prescribed by the Max-Age attribute.
    Session cookies – cookies without a Max age or Expires attribute – are deleted when the current session ends. The browser defines when the "current session" ends, and some browsers use session restoring when restarting. This can cause session cookies to last indefinitely.

For example:
http

Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;

Note: When you set an Expires date and time, they're relative to the client the cookie is being set on, not the server.

If your site authenticates users, it should regenerate and resend session cookies, even ones that already exist, whenever a user authenticates. This approach helps prevent session fixation attacks, where a third party can reuse a user's session.
Restrict access to cookies

You can ensure that cookies are sent securely and aren't accessed by unintended parties or scripts in one of two ways: with the Secure attribute and the HttpOnly attribute.

A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means man-in-the-middle attackers can't access it easily. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. However, don't assume that Secure prevents all access to sensitive information in cookies. For example, someone with access to the client's hard disk (or JavaScript if the HttpOnly attribute isn't set) can read and modify the information.

A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API; it's only sent to the server. For example, cookies that persist in server-side sessions don't need to be available to JavaScript and should have the HttpOnly attribute. This precaution helps mitigate cross-site scripting (XSS) attacks.

Here's an example:
http

Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly

Define where cookies are sent

The Domain and Path attributes define the scope of a cookie: what URLs the cookies should be sent to.
Domain attribute

The Domain attribute specifies which server can receive a cookie.

If specified, then cookies are available on the server and its subdomains. For example, if you set Domain=mozilla.org, cookies are available on mozilla.org and its subdomains like developer.mozilla.org.

If the server does not specify a Domain, the cookies are available on the server but not on its subdomains. Therefore, specifying Domain is less restrictive than omitting it. However, it can be helpful when subdomains need to share information about a user.
Path attribute

The Path attribute indicates a URL path that must exist in the requested URL in order to send the Cookie header. The %x2F ("/") character is considered a directory separator, and subdirectories match as well.

For example, if you set Path=/docs, these request paths match:

    /docs
    /docs/
    /docs/Web/
    /docs/Web/HTTP

But these request paths don't:

    /
    /docsets
    /fr/docs

SameSite attribute

The SameSite attribute lets servers specify whether/when cookies are sent with cross-site requests (where Site is defined by the registrable domain and the scheme: http or https). This provides some protection against cross-site request forgery attacks (CSRF). It takes three possible values: Strict, Lax, and None.

With Strict, the browser only sends the cookie with requests from the cookie's origin site. Lax is similar, except the browser also sends the cookie when the user navigates to the cookie's origin site (even if the user is coming from a different site). For example, by following a link from an external site. None specifies that cookies are sent on both originating and cross-site requests, but only in secure contexts (i.e., if SameSite=None then the Secure attribute must also be set). If no SameSite attribute is set, the cookie is treated as Lax.

Here's an example:
http

Set-Cookie: mykey=myvalue; SameSite=Strict

Note: The standard related to SameSite recently changed (MDN documents the new behavior above). See the cookies Browser compatibility table for information about how the attribute is handled in specific browser versions:

    SameSite=Lax is the new default if SameSite isn't specified. Previously, cookies were sent for all requests by default.
    Cookies with SameSite=None must now also specify the Secure attribute (they require a secure context).
    Cookies from the same domain are no longer considered to be from the same site if sent using a different scheme (http: or https:).

Cookie prefixes

Because of the design of the cookie mechanism, a server can't confirm that a cookie was set from a secure origin or even tell where a cookie was originally set.

A vulnerable application on a subdomain can set a cookie with the Domain attribute, which gives access to that cookie on all other sub

#5 
#6 # Fetch

🔑 **Recommended reading**: [MDN Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

Today, the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is the preferred way to make HTTP requests. The `fetch` function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise `then` function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type `application/json` you can use the `json` function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote.

```js
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

**Response**

```js
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```

To do a POST request you populate the options parameter with the HTTP method and headers.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

## ☑ Assignment

Create a fork of this [CodePen](https://codepen.io/leesjensen/pen/ExRoqPz) and experiment.

Replace the quotable service call with a different one. Here are some suggestions.

- **Random user** - https://randomuser.me/api/
- **Jokes** - https://api.chucknorris.io/jokes/random
- **GitHub user** - https://api.github.com/users/octocat
- **Photos** - https://picsum.photos/id/0/info
- **Quote** - https://api.quotable.io/random

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

#7
Query Documents

You can query documents in MongoDB by using the following methods:

    Your programming language's driver.

    The MongoDB Atlas UI. To learn more, see Query Documents with MongoDB Atlas.

    MongoDB Compass.

➤ Use the Select your language drop-down menu in the upper-right to set the language of the following examples or select MongoDB Compass.

This page provides examples of query operations using the Collection.find()
method in the MongoDB Node.js Driver.

The examples on this page use the inventory collection. Connect to a test database in your MongoDB instance then create the inventory collection:

await db.collection('inventory').insertMany([
  {
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  },
  {
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D'
  },
  {
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D'
  },
  {
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
]);

Select All Documents in a Collection

To select all documents in the collection, pass an empty document as the query filter parameter to the find method. The query filter parameter determines the select criteria:

const cursor = db.collection('inventory').find({});

This operation uses a filter predicate of {}, which corresponds to the following SQL statement:

SELECT * FROM inventory

To see supported options for the find() method, see find().
Specify Equality Condition

To specify equality conditions, use <field>:<value> expressions in the query filter document:

{ <field1>: <value1>, ... }

The following example selects from the inventory collection all documents where the status equals "D":

const cursor = db.collection('inventory').find({ status: 'D' });

This operation uses a filter predicate of { status: "D" }, which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status = "D"

Note

The MongoDB Compass query bar autocompletes the current query based on the keys in your collection's documents, including keys in embedded sub-documents.
Specify Conditions Using Query Operators

A query filter document can use the query operators to specify conditions in the following form:

{ <field1>: { <operator1>: <value1> }, ... }

The following example retrieves all documents from the inventory collection where status equals either "A" or "D":

const cursor = db.collection('inventory').find({
  status: { $in: ['A', 'D'] }
});

Note

Although you can express this query using the $or operator, use the $in operator rather than the $or operator when performing equality checks on the same field.

The operation uses a filter predicate of { status: { $in: [ "A", "D" ] } }, which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status in ("A", "D")

Refer to the Query and Projection Operators document for the complete list of MongoDB query operators.
Specify AND Conditions

A compound query can specify conditions for more than one field in the collection's documents. Implicitly, a logical AND conjunction connects the clauses of a compound query so that the query selects the documents in the collection that match all the conditions.

The following example retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:

const cursor = db.collection('inventory').find({
  status: 'A',
  qty: { $lt: 30 }
});

The operation uses a filter predicate of { status: "A", qty: { $lt: 30 } }, which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status = "A" AND qty < 30

See comparison operators for other MongoDB comparison operators.
Specify OR Conditions

Using the $or operator, you can specify a compound query that joins each clause with a logical OR conjunction so that the query selects the documents in the collection that match at least one condition.

The following example retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:

const cursor = db.collection('inventory').find({
  $or: [{ status: 'A' }, { qty: { $lt: 30 } }]
});

The operation uses a filter predicate of { $or: [ { status: 'A' }, { qty: { $lt: 30 } } ] }, which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status = "A" OR qty < 30

Note

Queries that use comparison operators are subject to Type Bracketing.
Specify AND as well as OR Conditions

In the following example, the compound query document selects all documents in the collection where the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p:

const cursor = db.collection('inventory').find({
  status: 'A',
  $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }]
});

The operation uses a filter predicate of:

{
   status: 'A',
   $or: [
     { qty: { $lt: 30 } }, { item: { $regex: '^p' } }
   ]
}

which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")

Note

MongoDB supports regular expressions $regex queries to perform string pattern matches.
Query Documents with MongoDB Atlas

The example in this section uses the sample movies dataset. To learn how to load the sample dataset into your MongoDB Atlas deployment, see Load Sample Data.

To project fields to return from a query in MongoDB Atlas, follow these steps:
1
Navigate to the collection

    In the MongoDB Atlas UI, click Database in the sidebar.

    For the database deployment that contains the sample data, click Browse Collections.

    In the left navigation pane, select the sample_mflix database.

    Select the movies collection.

2
Specify the Filter field

Specify the query filter document in the Filter field. A query filter document uses query operators to specify search conditions.

Copy the following query filter document into the Filter search bar:

{ year: 1924 }

3
Click Apply

This query filter returns all documents in the sample_mflix.movies collection where the year field matches 1924.
Additional Query Tutorials

For additional query examples, see:

    Query on Embedded/Nested Documents

    Query an Array

    Query an Array of Embedded Documents

    Project Fields to Return from Query

    Query for Null or Missing Fields

Behavior
Cursor

The Collection.find()
method returns a cursor.
Read Isolation

For reads to Replica sets and replica set shards, read concern allows clients to choose a level of isolation for their reads. For more information, see Read Concern.
Query Result Format

When you run a find operation with a MongoDB driver or mongosh, the command returns a cursor that manages query results. The query results are not returned as an array of documents.

To learn how to iterate through documents in a cursor, refer to your driver's documentation. If you are using mongosh, see Iterate a Cursor in mongosh.
Additional Methods and Options

The following methods can also read documents from a collection:

    Collection.findOne()

In aggregation pipeline, the $match pipeline stage provides access to MongoDB queries. See the MongoDB Node.js Driver's aggregation tutorial.
Note

The Collection.findOne()
method also performs a read operation to return a single document. Internally, the Collection.findOne()
method is the Collection.find()

method with a limit of 1.
←  Insert Methods

# 8
# Account creation and login

The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially `create` an authentication credential, and a second to authenticate, or `login`, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a `getMe` endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.

## Endpoint design

Using HTTP we can map out the design of each of our endpoints.

### Create authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.

```http
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### Login authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.

```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

```

### GetMe endpoint

This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```

```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

```

## Web service

With our service endpoints designed, we can now build our web service using Express.

```js
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.

1. Create a directory called `authTest` that we will work in.
1. Save the above content to a file named `main.js`. This is our starting web service.
1. Run `npm init -y` to initialize the project to work with node.js.
1. Run `npm install express cookie-parser mongodb uuid bcrypt` to install all of the packages we are going to use.
1. Run `node main.js` or press `F5` in VS Code to start up the web service.
1. You can now open a console window and use `curl` to try out one of the endpoints.

   ```sh
   curl -X POST localhost:8080/auth/create
   ```
   ```sh
   {"id":"user@id.com"}
   ```

## Handling requests

With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of `application/json`, automatically into a JavaScript object. We do this by using the `express.json` middleware. We can then read the email and password directly out of the `req.body` object. We can test that this is working by temporarily including them in the response.

```js
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```

```sh
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'
```
```sh
{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
```

Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.

```js
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

## Using the database

We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on [data services](../dataServices/dataServices.md) if you want to review what it is doing.

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```

With a Mongo collection object we can implement the `getUser` and `createUser` functions.

```js
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```

But, we are missing a couple of things. We need a real authentication token, and we cannot simply store a clear text password in our database.

## Generating authentication tokens

To generate a reasonable authentication token we use the `uuid` package. [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.

```js
const uuid = require('uuid');

token: uuid.v4();
```

## Securing passwords

Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.

So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

To hash our passwords we will use the `bcrypt` package. This creates a very secure one-way hash of the password. If you are interested in understanding how [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) works, it is definitely worth the time.

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

## Passing authentication tokens

We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The `cookie-parser` package provides middleware for cookies and so we will leverage that.

We import the `cookieParser` object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie, we want to make it as secure as possible, and so we use the `httpOnly`, `secure`, and `sameSite` options.

- `httpOnly` tells the browser to not allow JavaScript running on the browser to read the cookie.
- `secure` requires HTTPS to be used when sending the cookie back to the server.
- `sameSite` will only return the cookie to the domain that generated it.

```js
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

## Login endpoint

The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using `bcrypt.compare`, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).

```js
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## GetMe endpoint

With everything in place to create credentials and login using the credentials, we can now implement the `getMe` endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).

```js
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## Final code

Here is the full example code.

```js
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Experiment

With everything implemented we can use `curl` to try it out. First start up the web service from VS Code by pressing `F5` and selecting `node.js` as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following `curl` commands. You should see similar results as what is shown below. Note that the `-c` and `-b` parameters tell curl to store and use cookies with the given file.

```sh
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```sh
{"id":"639bb9d644416bf7278dde44"}
```

```sh
curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```sh
{"id":"639bb9d644416bf7278dde44"}
```

```sh
curl -b cookie.txt localhost:8080/user/me
```
```sh
{"email":"지안@id.com"}
```
# 9
# 10
 The WebSocket Protocol

Abstract

   The WebSocket Protocol enables two-way communication between a client
   running untrusted code in a controlled environment to a remote host
   that has opted-in to communications from that code.  The security
   model used for this is the origin-based security model commonly used
   by web browsers.  The protocol consists of an opening handshake
   followed by basic message framing, layered over TCP.  The goal of
   this technology is to provide a mechanism for browser-based
   applications that need two-way communication with servers that does
   not rely on opening multiple HTTP connections (e.g., using
   XMLHttpRequest or <iframe>s and long polling).
The WebSocket Protocol is designed to supersede existing bidirectional communication technologies that use HTTP as a transport layer to benefit from existing infrastructure (proxies, filtering, authentication).
# WebSocket

![webSocket](webServicesWebSocketsLogo.png)

HTTP is based on a client-server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer-to-peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client-initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

![WebSocket Upgrade](webServicesWebSocketUpgrade.jpg)

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

## Creating a WebSocket conversation

JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the `send` function, and register a callback using the `onmessage` function to receive messages.

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

The server uses the `ws` package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a `connection: Upgrade` header.

When a connection is detected it calls the server's `on connection` callback. The server can then send messages with the `send` function, and register a callback using the `on message` function to receive messages.

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

In a later instruction we will show you how to run and debug this example.

# 11
jsx curly braces escape to javascript
Article Talk. JSX (JavaScript Syntax Extension and occasionally referred to as JavaScript XML) is a JavaScript extension that allows creation of DOM trees using an XML-like syntax. Initially created by Facebook for use with React, JSX has been adopted by multiple web frameworks.

# 12
# 13
# 14
# 15
# React hooks

📖 **Recommended reading**: [Reactjs.org - Hooks Overview](https://reactjs.org/docs/hooks-overview.html)

React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the `useState` hook.

```jsx
function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
```

## useEffect hook

The `useEffect` hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.

```jsx
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

You can also take action when the component cleans up by returning a cleanup function from the function registered with `useEffect`. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.

```jsx
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.

## Hook dependencies

You can control what triggers a `useEffect` hook by specifying its dependencies. In the following example we have two state variables, but we only want the `useEffect` hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the `useEffect` call.

```jsx
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

If you specify and empty array `[]` as the hook dependency then it is only called when the component is first rendered.

Note that hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.

# 16

useEffect hook

The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.

function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));

You can also take action when the component cleans up by returning a cleanup function from the function registered with useEffect. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.

function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));

This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.

# 17

# Router

🔑 **Required reading**: [React Router DOM Tutorial](https://blog.webdevsimplified.com/2022-07/react-router/)

A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many that you can choose from. We will use [react-router-dom](https://www.npmjs.com/package/react-router-dom) Version 6. The simplified routing functionality of React-router-dom derives from the project [react-router](https://www.npmjs.com/package/react-router) for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

![React Router](routerExample.gif)

A basic implementation of the router consists of a `BrowserRouter` component that encapsulates the entire application and controls the routing action. The `Link`, or `NavLink`, component captures user navigation events and modifies what is rendered by the `Routes` component by matching up the `to` and `path` attributes.

```jsx
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```

## ☑ Assignment

Create a fork of this [CodePen](https://codepen.io/leesjensen/pen/poKLKaX) and add another component for the path of `/scores`.

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository `notes.md` with all of the things you learned and want to remember.

# 18

What is npm?
npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

# 19

What is package json for npm?
The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

package.json
Specifics of npm's package.json handling

Select CLI Version:
Description

This document is all you need to know about what's required in your package.json file. It must be actual JSON, not just a JavaScript object literal.

A lot of the behavior described in this document is affected by the config settings described in config.
name

If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don't plan to publish your package, the name and version fields are optional.

The name is what your thing is called.

Some rules:

    The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
    The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
    New packages must not have uppercase letters in the name.
    The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can't contain any non-URL-safe characters.

Some tips:

    Don't use the same name as a core Node module.
    Don't put "js" or "node" in the name. It's assumed that it's js, since you're writing a package.json file, and you can specify the engine using the "engines" field. (See below.)
    The name will probably be passed as an argument to require(), so it should be something short, but also reasonably descriptive.
    You may want to check the npm registry to see if there's something by that name already, before you get too attached to it. https://www.npmjs.com/

A name can be optionally prefixed by a scope, e.g. @myorg/mypackage. See scope for more detail.
version

If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don't plan to publish your package, the name and version fields are optional.

Version must be parseable by node-semver, which is bundled with npm as a dependency. (npm install semver to use it yourself.)
description

Put a description in it. It's a string. This helps people discover your package, as it's listed in npm search.
keywords

Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search.
homepage

The url to the project homepage.

Example:

"homepage": "https://github.com/owner/project#readme"

bugs

The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.

It should look like this:

{
  "bugs": {
    "url": "https://github.com/owner/project/issues",
    "email": "project@hostname.com"
  }
}

You can specify either one or both values. If you want to provide only a url, you can specify the value for "bugs" as a simple string instead of an object.

If a url is provided, it will be used by the npm bugs command.
license

You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.

If you're using a common license such as BSD-2-Clause or MIT, add a current SPDX license identifier for the license you're using, like this:

{
  "license": "BSD-3-Clause"
}

You can check the full list of SPDX license IDs. Ideally you should pick one that is OSI approved.

If your package is licensed under multiple common licenses, use an SPDX license expression syntax version 2.0 string, like this:

{
  "license": "(ISC OR GPL-3.0)"
}

If you are using a license that hasn't been assigned an SPDX identifier, or if you are using a custom license, use a string value like this one:

{
  "license": "SEE LICENSE IN <filename>"
}

Then include a file named <filename> at the top level of the package.

Some old packages used license objects or a "licenses" property containing an array of license objects:

// Not valid metadata
{
  "license" : {
    "type" : "ISC",
    "url" : "https://opensource.org/licenses/ISC"
  }
}

// Not valid metadata
{
  "licenses" : [
    {
      "type": "MIT",
      "url": "https://www.opensource.org/licenses/mit-license.php"
    },
    {
      "type": "Apache-2.0",
      "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}

Those styles are now deprecated. Instead, use SPDX expressions, like this:

{
  "license": "ISC"
}

{
  "license": "(MIT OR Apache-2.0)"
}

Finally, if you do not wish to grant others the right to use a private or unpublished package under any terms:

{
  "license": "UNLICENSED"
}

Consider also setting "private": true to prevent accidental publication.
people fields: author, contributors

The "author" is one person. "contributors" is an array of people. A "person" is an object with a "name" field and optionally "url" and "email", like this:

{
  "name": "Barney Rubble",
  "email": "b@rubble.com",
  "url": "http://barnyrubble.tumblr.com/"
}

Or you can shorten that all into a single string, and npm will parse it for you:

{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}

Both email and url are optional either way.

npm also sets a top-level "maintainers" field with your npm user info.
funding

You can specify an object containing a URL that provides up-to-date information about ways to help fund development of your package, or a string URL, or an array of these:

{
  "funding": {
    "type": "individual",
    "url": "http://example.com/donate"
  },

  "funding": {
    "type": "patreon",
    "url": "https://www.patreon.com/my-account"
  },

  "funding": "http://example.com/donate",

  "funding": [
    {
      "type": "individual",
      "url": "http://example.com/donate"
    },
    "http://example.com/donateAlso",
    {
      "type": "patreon",
      "url": "https://www.patreon.com/my-account"
    }
  ]
}

Users can use the npm fund subcommand to list the funding URLs of all dependencies of their project, direct and indirect. A shortcut to visit each funding url is also available when providing the project name such as: npm fund <projectname> (when there are multiple URLs, the first one will be visited)
files

The optional files field is an array of file patterns that describes the entries to be included when your package is installed as a dependency. File patterns follow a similar syntax to .gitignore, but reversed: including a file, directory, or glob pattern (*, **/*, and such) will make it so that file is included in the tarball when it's packed. Omitting the field will make it default to ["*"], which means it will include all files.

Some special files and directories are also included or excluded regardless of whether they exist in the files array (see below).

You can also provide a .npmignore file in the root of your package or in subdirectories, which will keep files from being included. At the root of your package it will not override the "files" field, but in subdirectories it will. The .npmignore file works just like a .gitignore. If there is a .gitignore file, and .npmignore is missing, .gitignore's contents will be used instead.

Certain files are always included, regardless of settings:

    package.json
    README
    LICENSE / LICENCE
    The file in the "main" field
    The file(s) in the "bin" field

README & LICENSE can have any case and extension.

Some files are always ignored by default:

    *.orig
    .*.swp
    .DS_Store
    ._*
    .git
    .npmrc
    .hg
    .lock-wscript
    .npmrc
    .svn
    .wafpickle-N
    CVS
    config.gypi
    node_modules
    npm-debug.log
    package-lock.json (use npm-shrinkwrap.json if you wish it to be published)
    pnpm-lock.yaml
    yarn.lock

Most of these ignored files can be included specifically if included in the files globs. Exceptions to this are:

    .git
    .npmrc
    node_modules
    package-lock.json
    pnpm-lock.yaml
    yarn.lock

These can not be included.
main

The main field is a module ID that is the primary entry point to your program. That is, if your package is named foo, and a user installs it, and then does require("foo"), then your main module's exports object will be returned.

This should be a module relative to the root of your package folder.

For most modules, it makes the most sense to have a main script and often not much else.

If main is not set, it defaults to index.js in the package's root folder.
browser

If your module is meant to be used client-side the browser field should be used instead of the main field. This is helpful to hint users that it might rely on primitives that aren't available in Node.js modules. (e.g. window)
bin

A lot of packages have one or more executable files that they'd like to install into the PATH. npm makes this pretty easy (in fact, it uses this feature to install the "npm" executable.)

To use this, supply a bin field in your package.json which is a map of command name to local file name. When this package is installed globally, that file will be either linked inside the global bins directory or a cmd (Windows Command File) will be created which executes the specified file in the bin field, so it is available to run by name or name.cmd (on Windows PowerShell). When this package is installed as a dependency in another package, the file will be linked where it will be available to that package either directly by npm exec or by name in other scripts when invoking them via npm run-script.

For example, myapp could have this:

{
  "bin": {
    "myapp": "./cli.js"
  }
}

So, when you install myapp, in case of unix-like OS it'll create a symlink from the cli.js script to /usr/local/bin/myapp and in case of windows it will create a cmd file usually at C:\Users\{Username}\AppData\Roaming\npm\myapp.cmd which runs the cli.js script.

If you have a single executable, and its name should be the name of the package, then you can just supply it as a string. For example:

{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}

would be the same as this:

{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}

Please make sure that your file(s) referenced in bin starts with #!/usr/bin/env node, otherwise the scripts are started without the node executable!

Note that you can also set the executable files using directories.bin.

See folders for more info on executables.
man

Specify either a single file or an array of filenames to put in place for the man program to find.

If only a single file is provided, then it's installed such that it is the result from man <pkgname>, regardless of its actual filename. For example:

{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}

would link the ./man/doc.1 file in such that it is the target for man foo

If the filename doesn't start with the package name, then it's prefixed. So, this:

{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/bar.1"]
}

will create files to do man foo and man foo-bar.

Man files must end with a number, and optionally a .gz suffix if they are compressed. The number dictates which man section the file is installed into.

{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/foo.2"]
}

will create entries for man foo and man 2 foo
directories

The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object. If you look at npm's package.json, you'll see that it has directories for doc, lib, and man.

In the future, this information may be used in other creative ways.
directories.bin

If you specify a bin directory in directories.bin, all the files in that folder will be added.

Because of the way the bin directive works, specifying both a bin path and setting directories.bin is an error. If you want to specify individual files, use bin, and for all the files in an existing bin directory, use directories.bin.
directories.man

A folder that is full of man pages. Sugar to generate a "man" array by walking the folder.
repository

Specify the place where your code lives. This is helpful for people who want to contribute. If the git repo is on GitHub, then the npm docs command will be able to find you.

Do it like this:

{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli.git"
  }
}

The URL should be a publicly available (perhaps read-only) url that can be handed directly to a VCS program without any modification. It should not be a url to an html project page that you put in your browser. It's for computers.

For GitHub, GitHub gist, Bitbucket, or GitLab repositories you can use the same shortcut syntax you use for npm install:

{
  "repository": "npm/npm",

  "repository": "github:user/repo",

  "repository": "gist:11081aaa281",

  "repository": "bitbucket:user/repo",

  "repository": "gitlab:user/repo"
}

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives:

{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}

scripts

The "scripts" property is a dictionary containing script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.

See scripts to find out more about writing package scripts.
config

A "config" object can be used to set configuration parameters used in package scripts that persist across upgrades. For instance, if a package had the following:

{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}

It could also have a "start" command that referenced the npm_package_config_port environment variable.
dependencies

Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.

Please do not put test harnesses or transpilers or other "development" time tools in your dependencies object. See devDependencies, below.

See semver for more details about specifying version ranges.

    version Must match version exactly
    >version Must be greater than version
    >=version etc
    <version
    <=version
    ~version "Approximately equivalent to version" See semver
    ^version "Compatible with version" See semver
    1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
    http://... See 'URLs as Dependencies' below
    * Matches any version
    "" (just an empty string) Same as *
    version1 - version2 Same as >=version1 <=version2.
    range1 || range2 Passes if either range1 or range2 are satisfied.
    git... See 'Git URLs as Dependencies' below
    user/repo See 'GitHub URLs' below
    tag A specific version tagged and published as tag See npm dist-tag
    path/path/path See Local Paths below

For example, these are all valid:

{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}

URLs as Dependencies

You may specify a tarball URL in place of a version range.

This tarball will be downloaded and installed locally to your package at install time.
Git URLs as Dependencies

Git urls are of the form:

<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]

<protocol> is one of git, git+ssh, git+http, git+https, or git+file.

If #<commit-ish> is provided, it will be used to clone exactly that commit. If the commit-ish has the format #semver:<semver>, <semver> can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither #<commit-ish> or #semver:<semver> is specified, then the default branch is used.

Examples:

git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git#v1.0.27

When installing from a git repository, the presence of certain fields in the package.json will cause npm to believe it needs to perform a build. To do so your repository will be cloned into a temporary directory, all of its deps installed, relevant scripts run, and the resulting directory packed and installed.

This flow will occur if your git dependency uses workspaces, or if any of the following scripts are present:

    build
    prepare
    prepack
    preinstall
    install
    postinstall

If your git repository includes pre-built artifacts, you will likely want to make sure that none of the above scripts are defined, or your dependency will be rebuilt for every installation.
GitHub URLs

As of version 1.1.65, you can refer to GitHub urls as just "foo": "user/foo-project". Just as with git URLs, a commit-ish suffix can be included. For example:

{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature/branch"
  }
}

Local Paths

As of version 2.0.0 you can provide a path to a local directory that contains a package. Local paths can be saved using npm install -S or npm install --save, using any of these forms:

../foo/bar
~/foo/bar
./foo/bar
/foo/bar

in which case they will be normalized to a relative path and added to your package.json. For example:

{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}

This feature is helpful for local offline development and creating tests that require npm installing where you don't want to hit an external server, but should not be used when publishing packages to the public registry.

note: Packages linked by local path will not have their own dependencies installed when npm install is ran in this case. You must run npm install from inside the local path itself.
devDependencies

If someone is planning on downloading and using your module in their program, then they probably don't want or need to download and build the external test or documentation framework that you use.

In this case, it's best to map these additional items in a devDependencies object.

These things will be installed when doing npm link or npm install from the root of a package, and can be managed like any other npm configuration param. See config for more on the topic.

For build steps that are not platform-specific, such as compiling CoffeeScript or other languages to JavaScript, use the prepare script to do this, and make the required package a devDependency.

For example:

{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepare": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}

The prepare script will be run before publishing, so that users can consume the functionality without requiring them to compile it themselves. In dev mode (ie, locally running npm install), it'll run this script as well, so that you can test it easily.
peerDependencies

In some cases, you want to express the compatibility of your package with a host tool or library, while not necessarily doing a require of this host. This is usually referred to as a plugin. Notably, your module may be exposing a specific interface, expected and specified by the host documentation.

For example:

{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}

This ensures your package tea-latte can be installed along with the second major version of the host package tea only. npm install tea-latte could possibly yield the following dependency graph:

├── tea-latte@1.3.5
└── tea@2.2.0

In npm versions 3 through 6, peerDependencies were not automatically installed, and would raise a warning if an invalid version of the peer dependency was found in the tree. As of npm v7, peerDependencies are installed by default.

Trying to install another plugin with a conflicting requirement may cause an error if the tree cannot be resolved correctly. For this reason, make sure your plugin requirement is as broad as possible, and not to lock it down to specific patch versions.

Assuming the host complies with semver, only changes in the host package's major version will break your plugin. Thus, if you've worked with every 1.x version of the host package, use "^1.0" or "1.x" to express this. If you depend on features introduced in 1.5.2, use "^1.5.2".
peerDependenciesMeta

When a user installs your package, npm will emit warnings if packages specified in peerDependencies are not already installed. The peerDependenciesMeta field serves to provide npm more information on how your peer dependencies are to be used. Specifically, it allows peer dependencies to be marked as optional.

For example:

{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x",
    "soy-milk": "1.2"
  },
  "peerDependenciesMeta": {
    "soy-milk": {
      "optional": true
    }
  }
}

Marking a peer dependency as optional ensures npm will not emit a warning if the soy-milk package is not installed on the host. This allows you to integrate and interact with a variety of host packages without requiring all of them to be installed.
bundleDependencies

This defines an array of package names that will be bundled when publishing the package.

In cases where you need to preserve npm packages locally or have them available through a single file download, you can bundle the packages in a tarball file by specifying the package names in the bundleDependencies array and executing npm pack.

For example:

If we define a package.json like this:

{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundleDependencies": ["renderized", "super-streams"]
}

we can obtain awesome-web-framework-1.0.0.tgz file by running npm pack. This file contains the dependencies renderized and super-streams which can be installed in a new project by executing npm install awesome-web-framework-1.0.0.tgz. Note that the package names do not include any versions, as that information is specified in dependencies.

If this is spelled "bundledDependencies", then that is also honored.

Alternatively, "bundleDependencies" can be defined as a boolean value. A value of true will bundle all dependencies, a value of false will bundle none.
optionalDependencies

If a dependency can be used, but you would like npm to proceed if it cannot be found or fails to install, then you may put it in the optionalDependencies object. This is a map of package name to version or url, just like the dependencies object. The difference is that build failures do not cause installation to fail. Running npm install --omit=optional will prevent these dependencies from being installed.

It is still your program's responsibility to handle the lack of the dependency. For example, something like this:

try {
  var foo = require("foo");
  var fooVersion = require("foo/package.json").version;
} catch (er) {
  foo = null;
}
if (notGoodFooVersion(fooVersion)) {
  foo = null;
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings();
}

Entries in optionalDependencies will override entries of the same name in dependencies, so it's usually best to only put in one place.
overrides

If you need to make specific changes to dependencies of your dependencies, for example replacing the version of a dependency with a known security issue, replacing an existing dependency with a fork, or making sure that the same version of a package is used everywhere, then you may add an override.

Overrides provide a way to replace a package in your dependency tree with another version, or another package entirely. These changes can be scoped as specific or as vague as desired.

To make sure the package foo is always installed as version 1.0.0 no matter what version your dependencies rely on:

{
  "overrides": {
    "foo": "1.0.0"
  }
}

The above is a short hand notation, the full object form can be used to allow overriding a package itself as well as a child of the package. This will cause foo to always be 1.0.0 while also making bar at any depth beyond foo also 1.0.0:

{
  "overrides": {
    "foo": {
      ".": "1.0.0",
      "bar": "1.0.0"
    }
  }
}

To only override foo to be 1.0.0 when it's a child (or grandchild, or great grandchild, etc) of the package bar:

{
  "overrides": {
    "bar": {
      "foo": "1.0.0"
    }
  }
}

Keys can be nested to any arbitrary length. To override foo only when it's a child of bar and only when bar is a child of baz:

{
  "overrides": {
    "baz": {
      "bar": {
        "foo": "1.0.0"
      }
    }
  }
}

The key of an override can also include a version, or range of versions. To override foo to 1.0.0, but only when it's a child of bar@2.0.0:

{
  "overrides": {
    "bar@2.0.0": {
      "foo": "1.0.0"
    }
  }
}

You may not set an override for a package that you directly depend on unless both the dependency and the override itself share the exact same spec. To make this limitation easier to deal with, overrides may also be defined as a reference to a spec for a direct dependency by prefixing the name of the package you wish the version to match with a $.

{
  "dependencies": {
    "foo": "^1.0.0"
  },
  "overrides": {
    // BAD, will throw an EOVERRIDE error
    // "foo": "^2.0.0"
    // GOOD, specs match so override is allowed
    // "foo": "^1.0.0"
    // BEST, the override is defined as a reference to the dependency
    "foo": "$foo",
    // the referenced package does not need to match the overridden one
    "bar": "$foo"
  }
}

engines

You can specify the version of node that your stuff works on:

{
  "engines": {
    "node": ">=0.10.3 <15"
  }
}

And, like with dependencies, if you don't specify the version (or if you specify "*" as the version), then any version of node will do.

You can also use the "engines" field to specify which versions of npm are capable of properly installing your program. For example:

{
  "engines": {
    "npm": "~1.0.20"
  }
}

Unless the user has set the engine-strict config flag, this field is advisory only and will only produce warnings when your package is installed as a dependency.
os

You can specify which operating systems your module will run on:

{
  "os": ["darwin", "linux"]
}

You can also block instead of allowing operating systems, just prepend the blocked os with a '!':

{
  "os": ["!win32"]
}

The host operating system is determined by process.platform

It is allowed to both block and allow an item, although there isn't any good reason to do this.
cpu

If your code only runs on certain cpu architectures, you can specify which ones.

{
  "cpu": ["x64", "ia32"]
}

Like the os option, you can also block architectures:

{
  "cpu": ["!arm", "!mips"]
}

The host architecture is determined by process.arch
private

If you set "private": true in your package.json, then npm will refuse to publish it.

This is a way to prevent accidental publication of private repositories. If you would like to ensure that a given package is only ever published to a specific registry (for example, an internal registry), then use the publishConfig dictionary described below to override the registry config param at publish-time.
publishConfig

This is a set of config values that will be used at publish-time. It's especially handy if you want to set the tag, registry or access, so that you can ensure that a given package is not tagged with "latest", published to the global public registry or that a scoped module is private by default.

See config to see the list of config options that can be overridden.
workspaces

The optional workspaces field is an array of file patterns that describes locations within the local file system that the install client should look up to find each workspace that needs to be symlinked to the top level node_modules folder.

It can describe either the direct paths of the folders to be used as workspaces or it can define globs that will resolve to these same folders.

In the following example, all folders located inside the folder ./packages will be treated as workspaces as long as they have valid package.json files inside them:

{
  "name": "workspace-example",
  "workspaces": ["./packages/*"]
}

See workspaces for more examples.
DEFAULT VALUES

npm will default some values based on package contents.

    "scripts": {"start": "node server.js"}

    If there is a server.js file in the root of your package, then npm will default the start command to node server.js.

    "scripts":{"install": "node-gyp rebuild"}

    If there is a binding.gyp file in the root of your package and you have not defined an install or preinstall script, npm will default the install command to compile using node-gyp.

    "contributors": [...]

    If there is an AUTHORS file in the root of your package, npm will treat each line as a Name <email> (url) format, where email and url are optional. Lines which start with a # or are blank, will be ignored.

# 20

JavaScript fetch() Method
Read
Discuss
Courses

JavaScript fetch() method is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.
Syntax:

fetch('url')           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));

Parameters:

    URL: It is the URL to which the request is to be made.
    Options: It is an array of properties. It is an optional parameter.

Return Value:

It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. It can be an array of objects or simply a single object.

Example: This example shows the use of the javascript fetch() method.

NOTE: Without options, Fetch will always act as a get request.

// API for get requests
let fetchRes = fetch(
"https://jsonplaceholder.typicode.com/todos/1");
     
// FetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })

Output:

Making Post Request using Fetch

Post requests can be made using fetch by giving options as given below:

let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)
}

Example: In this example, we will see the use of the post method in fetch() in javascript.

user = {
    "name": "Geeks for Geeks",
    "age": "23"
}
 
// Options to be given as parameter 
// in fetch for making requests
// other then GET
let options = {
    method: 'POST',
    headers: {
        'Content-Type':
            'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}
 
// Fake api for making post requests
let fetchRes = fetch(
    "http://dummy.restapiexample.com/api/v1/create",
    options);
fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })

Output:


Last Updated : 24 Nov, 2023
Previous 

# 21

# Node.js

![Node Icon](NodeIcon.png)

In 2009 Ryan Dahl created `Node.js`. It was the first successful application for deploying JavaScript outside of a browser. This changed the JavaScript mindset from a browser technology to one that could run on the server as well. This means that JavaScript can power your entire technology stack. One language to rule them all. Node.js is often just referred to as Node, and is currently maintained by the [Open.js Foundation](https://openjsf.org/).

![Ryan Dahl](webServicesRyanDahl.jpg)

> “You can never understand everything. But, you should push yourself to understand the system”
>
> — Ryan Dahl

Browsers run JavaScript using a JavaScript interpreter and execution engine. For example, Chromium based browsers all use the [V8](https://v8.dev/) engine created by Google. Node.js simply took the V8 engine and ran it inside of a console application. When you run a JavaScript program in Chrome or Node.js, it is V8 that reads your code and executes it. With either program wrapping V8, the result is the same.

![Node.js](webServicesNode.jpg)

## Installing NVM and Node.js

Your production environment web server comes with Node.js already installed. However, you will need to install Node.js in your development environment if you have not already. The easiest way to install Node.js is to first install the `Node Version Manager` (NVM) and use it to install, and manage, Node.js.

### Installing on Windows

If you are using Windows, then follow the installation instructions from the [windows-nvm](https://github.com/coreybutler/nvm-windows#installation--upgrades) repository. Click on `latest installer` and then scroll down to the `Assets` and download and execute nvm-setup.exe. Once the installation is complete, you will need to open a new console window so that it gets the updated path that includes NVM.

In the console application install the long term support (LTS) version of Node.

```sh
➜ nvm install lts
➜ nvm use lts
```

### Installing on Linux or MacOS

If you are using Linux or MacOS then you can install NVM with the following console commands.

```sh
➜ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

➜ . ~/.nvm/nvm.sh
```

In the console application install the long term support (LTS) version of Node.

```sh
➜ nvm install --lts
```

## Checking that Node is installed

The node.js console application is simply called `node`. You can verify that Node is working correctly by running `node` with the `-v` parameter. Note that your version might be different than what is shown here. As long as it is an LTS version you should be fine.

```sh
➜ node -v
v18.13.0
```

## Running programs

You can execute a line of JavaScript with Node.js from your console with the `-e` parameter.

```sh
➜  node -e "console.log(1+1)"
2
```

However, to do real work you need to execute an entire project composed of dozens or even hundreds of JavaScript files. You do this by creating a single starting JavaScript file, named something like `index.js`, that references the code found in the rest of your project. You then execute your code by running `node` with `index.js` as a parameter. For example, with the following JavaScript saved to a file named `index.js`

```js
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();
```

We can execute the JavaScript by passing the file to `node`, and receive the following result.

```sh
➜  node index.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5
```

You can also run `node` in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.

```sh
➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello
```

## Node package manager

While you could write all of the JavaScript for everything you need, it is always helpful to use preexisting packages of JavaScript for implementing common tasks. To load a package using Node.js you must take two steps. First install the package locally on your machine using the Node Package Manager (NPM), and then include a `require` statement in your code that references the package name. NPM is automatically installed when you install Node.js.

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the [NPM website](https://www.npmjs.com/). However, before you start using NPM to install packages you need to initialize your code to use NPM. This is done by creating a directory that will contain your JavaScript and then running `npm init`. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use `npm init -y` and skip the Q&A.

```sh
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

## Package.json

If you list the files in the directory you will notice that it has created a file named `package.json`. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands (scripts) that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. The following shows what your `package.json` looks like currently. It has some default metadata and a simple placeholder script that just runs the echo command when you execute `npm run test` from the console.

```json
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

With NPM initialized to work with your project, you can now use it to install a node package. As a simple example, we will install a package that knows how to tell jokes. This package is called `give-me-a-joke`. You can search for it on the [NPM website](https://www.npmjs.com/), see how often it is installed, examine the source code, and learn about who created it. You install the package using `npm install` followed by the name of the package.

```sh
➜  npm install give-me-a-joke
```

If you again examine the contents of the `package.json` file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the `npm uninstall <package name here>` console command.

With the dependency added, the unnecessary metadata removed, the addition of a useful script to run the program, and also adding a description, the `package.json` file should look like this:

```json
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "Simple Node.js demo",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "node index.js"
  },
  "dependencies": {
    "give-me-a-joke": "^0.5.1"
  }
}
```

⚠ Note that when you start installing package dependencies, NPM will create an additional file named `package-lock.json` and a directory named `node_modules` in your project directory. The `node_modules` directory contains the actual JavaScript files for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do **not** want to check this directory into your source control system since it can be very large and can be rebuilt using the information contained in the `package.json` and `package-lock.json` files. So make sure you include `node_modules` in your `.gitignore` file.

When you clone your source code from GitHub to a new location, the first thing you should do is run `npm install` in the project directory. This will cause NPM to download all of the previously installed packages and recreate the `node_modules` directory.

The `package-lock.json` file tracks the version of the package that you installed. That way if you rebuild your `node_modules` directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.

With NPM and the joke package installed, you can now use the joke package in a JavaScript file by referencing the package name as a parameter to the `require` function. This is then followed by a call to the joke object's `getRandomDadJoke` function to actually generate a joke. Create a file named `index.js` and paste the following into it.

**index.js**

```js
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```

If you run this code using `node.js` you should get a result similar to the following.

```sh
➜  node index.js
What do you call a fish with no eyes? A fsh.
```

This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.

1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node_modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your application's JavaScript
1. Use the code the package provides in your JavaScript
1. Run your code with `node index.js`

## Creating a web service

With JavaScript we can write code that listens on a network port (e.g. 80, 443, 3000, or 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

First create your project.

```sh
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
```

Now, open VS Code and create a file named `index.js`. Paste the following code into the file and save.

```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```

This code uses the Node.js built-in `http` package to create our HTTP server using the `http.createServer` function along with a callback function that takes a request (`req`) and response (`res`) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.

The `server.listen` call starts listening on port 8080 and blocks until the program is terminated.

We execute the program by going back to our console window and running Node.js to execute our index.js file. If the service starts up correctly then it should look like the following.

```sh
➜ node index.js
Web service listening on port 8080
```

You can now open your browser and point it to `localhost:8080` and view the result. The interaction between the JavaScript, node, and the browser looks like this.

![Node HTTP](webServicesNodeHttp.jpg)

Use different URL paths in the browser and note that it will echo the HTTP method and path back in the document. You can kill the process by pressing `CTRL-C` in the console.

Note that you can also start up Node and execute the `index.js` code directly in VS Code. To do this open index.js in VS Code and press the 'F5' key. This should ask you what program you want to run. Select `node.js`. This starts up Node.js with the `index.js` file, but also attaches a debugger so that you can set breakpoints in the code and step through each line of code.

⚠ Make sure you complete the above steps. For the rest of the course you will be executing your code using Node.js to run your backend code and serve up your frontend code to the browser. This means you will no longer be using the `VS Code Live Server extension` to serve your frontend code in the browser.

## Deno and Bun

You should be aware that Ryan has created a successor to Node.js called [`Deno`](https://deno.land/). This version is more compliant with advances in ECMAScript and has significant performance enhancements. There are also competitor server JavaScript applications. One of the more interesting rising stars is called [`Bun`](https://bun.sh/). If you have the time you should learn about them.

# 22

vite
what does vite do

For our toolchain we are going to use Vite. Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.

# file 1

# Vite

📖 **Deeper dive reading**: [Vite](https://vitejs.dev/guide/)

Now that we have covered the basics of React, we want to extend our usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application.

For our toolchain we are going to use [Vite](https://vitejs.dev/). Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.

To create a new React-based web application using Vite, open your console and run the following commands:

```sh
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```

This will create a new web application in the `demoVite` directory, download the required 3rd party packages, and start up the application using a local HTTP debugging server. You can tell Vite to open your browser to the URL that is hosting your application by pressing `o`, or press `h` to see all of the Vite CLI options.

![Vite Demo](viteDemo.gif)

Congratulations! You have just created your first React-enabled web application.

Once you have played around with the application in your browser, you can return to your console and stop Vite from hosting the application by pressing `q`.

## Generated project

Now, let's explore the application files that Vite created. From the console, use VS Code (`code .`) to open the project directory and take a look at the files.

| Directory    | File              | Purpose                                                                                                                   |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ./           |                   |                                                                                                                                |
|              | index.html        | Primary page for the application. This is the starting point to load all of the JSX components beginning with `main.jsx`. |
|              | package.json      | NPM definition for package dependencies and script commands. This is what maps `npm run dev` to actually start up Vite.   |
|              | package-lock.json | Version constraints for included packages (do not edit this).                                                             |
|              | vite.config.js    | Configuration setting for Vite. Specifically this sets up React for development.                                          |
| ./public     |                   |                                                                                                                           |
|              | vite.svg          | Vite logo for use as favicon and for display in the app.                                                                  |
| ./src        |                   |                                                                                                                           |
|              | main.jsx          | Entry point for code execution. This simply loads the App component found in `App.jsx`.                                   |
|              | index.css         | CSS for the entire application.                                                                                           |
|              | App.jsx           | JSX for top level application component. This displays the logs and implements the click counter.                         |
|              | App.css           | CSS for the top level application component.                                                                              |
| ./src/assets |                   |                                                                                                                           |
|              | react.svg         | React logo for display in the app.                                                                                        |

The main files in the application are `index.html`, `main.jsx`, and `App.jsx`. The browser loads `index.html` which provides the HTML element (`#root`) that the React application will be injected into. It also includes the script element to load `main.jsx`.

`main.jsx` creates the React application by associating the `#root` element with the `App` component found in `App.jsx`. This causes all of the component render functions to execute and the generated HTML, CSS, and JavaScript to be executed in `index.html`.

![File relationship](reactFiles.png)

## JSX vs JS

The `Vite` CLI uses the `.jsx` extension for JSX files instead of the JavaScript `.js` extension. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you should prefer `.jsx` for files that contain JSX. The developers at AirBNB had an interesting [conversation](https://github.com/airbnb/javascript/pull/985) on this topic that you might browse if you would like to consider the differing opinions on this subject.

## Building a production release

When you execute `npm run dev` you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run `npm run build`. This executes the `build` script found in your `package.json` and invokes the `Vite` CLI. `vite build` transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named `dist`.

```sh
➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms
```

## Deploying a production release

The deployment script for Simon React (`deployReact.sh`) creates a production distribution by calling `npm run build` and then copying the resulting `dist` directory to your production server.

Take some time to build a production release by running `npm run build`. Then examine what Vite actually builds by examining the `dist` directory. For example, if you look at the `dist/assets` directory you will see the bundled and minified JavaScript and CSS files.

## ☑ Assignment

Now that you have reviewed the application in VS Code, take a moment to manipulate the files and see what impact your changes have. If you break the application, and can't figure out how to fix it, just delete the demo directory and start again. The more you play around with this code, the better you will understand how all the pieces of the application fit together.

Make the following modifications:

1. Alter the CSS to change background and text colors to something different.
1. Replace the text in the App component with your name.
1. Change the counter to increment by 10 instead of by one.

After these changes, the application should look similar to this:

![React altered](reactAppAltered.png)

When you are done, submit a screen capture of the altered application to the Canvas assignment.

Don't forget to update your GitHub startup repository `notes.md` with all of the things you learned and want to remember.

# file 2

Getting Started
Overview
Vite (French word for "quick", pronounced /vit/

, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

    A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

    A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box. Read about what's possible in the Features Guide. Support for frameworks or integration with other tools is possible through Plugins. The Config Section explains how to adapt Vite to your project if needed.

Vite is also highly extensible via its Plugin API and JavaScript API with full typing support.

You can learn more about the rationale behind the project in the Why Vite section.
Browser Support

During development, Vite sets esnext as the transform target, because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code.

For the production build, by default Vite targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official @vitejs/plugin-legacy. See the Building for Production section for more details.
Trying Vite Online

You can try Vite online on StackBlitz. It runs the Vite-based build setup directly in the browser, so it is almost identical to the local setup but doesn't require installing anything on your machine. You can navigate to vite.new/{template} to select which framework to use.

The supported template presets are:
JavaScript	TypeScript
vanilla	vanilla-ts
vue	vue-ts
react	react-ts
preact	preact-ts
lit	lit-ts
svelte	svelte-ts
solid	solid-ts
qwik	qwik-ts
Scaffolding Your First Vite Project

Compatibility Note

Vite requires Node.js version 18+. 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
NPM
Yarn
PNPM
Bun
bash

$ npm create vite@latest

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:
bash

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bunx create-vite my-vue-app --template vue

See create-vite for more details on each supported template: vanilla, vanilla-ts, vue, vue-ts, react, react-ts, react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts, solid, solid-ts, qwik, qwik-ts.
Community Templates

create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for community maintained templates that include other tools or target different frameworks.

For a template at https://github.com/user/project, you can try it out online using https://github.stackblitz.com/user/project (adding .stackblitz after github to the URL of the project).

You can also use a tool like degit to scaffold your project with one of the templates. Assuming the project is on GitHub and uses main as the default branch, you can create a local copy using:
bash

npx degit user/project#main my-project
cd my-project

npm install
npm run dev

index.html and Project Root

One thing you may have noticed is that in a Vite project, index.html is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.

Vite treats index.html as source code and part of the module graph. It resolves <script type="module" src="..."> that references your JavaScript source code. Even inline <script type="module"> and CSS referenced via <link href> also enjoy Vite-specific features. In addition, URLs inside index.html are automatically rebased so there's no need for special %PUBLIC_URL% placeholders.

Similar to static http servers, Vite has the concept of a "root directory" which your files are served from. You will see it referenced as <root> throughout the rest of the docs. Absolute URLs in your source code will be resolved using the project root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.

Vite also supports multi-page apps with multiple .html entry points.
Specifying Alternative Root

Running vite starts the dev server using the current working directory as root. You can specify an alternative root with vite serve some/sub/dir. Note that Vite will also resolve its config file (i.e. vite.config.js) inside the project root, so you'll need to move it if the root is changed.
Command Line Interface

In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with npx vite. Here are the default npm scripts in a scaffolded Vite project:
json

{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}

You can specify additional CLI options like --port or --open. For a full list of CLI options, run npx vite --help in your project.

Learn more about the Command Line Interface
Using Unreleased Commits

If you can't wait for a new release to test the latest features, you will need to clone the vite repo to your local machine and then build and link it yourself (pnpm is required):
bash

git clone https://github.com/vitejs/vite.git
cd vite
pnpm install
cd packages/vite
pnpm run build
pnpm link --global # use your preferred package manager for this step

Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!
