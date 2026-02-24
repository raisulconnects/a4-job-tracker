1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById is used to grab an element with an ID, getElementsByClassName is used to grab elements with a particular class name and it can be many as we know that class can be used for multiple elements and this returns an array like thing. We can use querySelector to select any kind of element, it can be a class named or an Id assigned element, we have to ensure that we are using the like notaiton for it like . and #, where as querySelectorAll selects all the elemnets with that particular query which we used to grab element, it returns an array like thing based of how many elemnets were grabbed.

2. How do you create and insert a new element into the DOM?
Answer: to create an element we do document.createElement('--') and inside that we define what we want to create, such as div,p,h1,span etc.. and then we select the element where we want to put newly created element with query selector and just appendChild the newly created element into it. an example can be dashboard.appendChild(newElement), assuming we have selected the dashboard with query selector already.

3. What is Event Bubbling? And how does it work?
Answer: If we attach a eventlistener to a child element, it'll also trigger the event listener of the parent element, and this process continues until it reaches the root element. This is called event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a mechanism which uses bubbling to it's usage. Attaching eventlistener to all the child elements inside a parent element is not efficient, cause we are attaching so many listeners. Instead we can attach a single eventlistener to the parent element and use the event.target to identify the child element which was clicked. This is called event delegation. It can increase the performence quite a lot. We just use the bubbling, recognize where it came from and use the event.target to identify where it came from.

5. What is the difference between preventDefault() and stopPropagation() methoAnswer:
Answer: preventDefault is used to stop forms default behavior. By default when we are using form tag and if we use a button inside it which has type attribute set to submit, afterwards on press it'll refresh the form and for that the data wont go roght proepr.y. that's whhere we use preventDefault to stop it from happening. and StopProgpagation is used for stopping the bubbling events to the root. We can just stop the bubbling at a certain child element.
