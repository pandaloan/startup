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
  1. The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things. 
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

4. 
CSS box model

Margin and padding are the components of the CSS box model, a design specificity related to any HTML element. These boxes of multi-layered elements are combined to form a single layout of the web page. 

In general, box model usually contains four components:

    Content is the core of the box. It’s around the content the other layers are built. Content can have different visualizations: it can be text, image, icon or something else.
    Padding is the space between content and border, which is the next component of the box.
    Border is a visible or invisible line around the edge of the box. 
    Margin is the outer space around the box.

For better visibility, let’s look at the picture below, which gives a general presentation box model.
https://aheadworks.com/media/Blog/shopify/Translation_6_.png

12. The <span> tag is an inline container used to mark up a part of a text, or a part of a document.

The <span> tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.

The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.

33. HTTPS is secure and is on port 443, while HTTP is unsecured and available on port 80. Information that travels on the port 443 is encrypted using Secure Sockets Layer (SSL) or its new version, Transport Layer Security (TLS) and hence safer. The TLS 1.2 is the latest version which has fixed several recent vulnerabilities.

Using HTTPS also helps minimize a Ransomware attack by identifying open ports and then blocking access with a firewall. It is highly advisable to access and transact on sites with HTTPS to protect yourself from malicious elements as it prevents your personal information, passwords, customer data, and business-critical data from being intercepted and stolen.

port 22 is for ssh






