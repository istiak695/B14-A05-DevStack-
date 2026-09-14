Name of my project             :Dev Stack
A little description           : A react web application that users can explore different development technologies to their stack.
Technology that you use        :  React,TailwindCss,vite,JSON,daisyui
3 features about your project  :  1.Explore Technologies
                                   2. Add to stack
                                   3.Manage stack




1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.

It makes React components easier to write and understand.


 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State  stores data inside a component and can change when the user interacts with the application.

3. What does the useState hook do, and where did you use it in this project?

useState is used to create and update data that can change in a React component.

I used it to manage the technologies added to the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs some code after the component renders.

I used it to load the technology data from the JSON file when the application starts.


5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list.

It helps React know which item has been added, removed, or changed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a condition is true.

For example, I used it to show a message when the stack is empty:


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send something back to the parent by using a function passed through props.

