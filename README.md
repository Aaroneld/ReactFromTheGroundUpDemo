# ReactFromTheGroundUpDemo with Studio Ghibli

React's purpose is to allow a Web Developer to rapidly develop dynamic and complex Web Applications, its method of implementation stands out from the classical usage of JavaScript for development by allowing one to write "HTML markup in JS" (JSX), as well as modifications to that markup contingent on the state of the application at any point in time. All bundled together in unit like native JS functions known as components. This allows the developer to organize their projects in a functional format according to the specification of their project's design (e.g. every page is component, each part of a page is a component, a component can be a container that contains a list of similar components.)  

**What is State?**

State is a concept deeply embedded in the science of programming. Essentially state is a reference to the value of pieces of data at discrete (particular) points in time. React manages state natively (that is to say according to itself) using the `useState` hook a method (that is to say a function which belongs to an Object) that allows the React application to monitor and modify the variable which is attached to it when it is invoked. These variables are pieces of the application's state and according to the whims of the designer can be changed following some condition (e.g. a user clicks a button, 2 seconds have passed, a user login session has expired.) React notes these changes and itself can "React" to them. 

For example: by changing another piece of stateful data, or by updating the HTML to reflect that changed information. 

 * `useState` as with all React hook methods are utilized within the interior of a component function as the component functions are the place where you specify the design of your application unit by unit (function by function)*

**What are Props?**

Props (short for properties) are the method by which React passes data and the ability to change data from component to component. Most essentially they are an object passed in and out of component functions whose key:value pairs are the data the user is looking to extend to another component. This being so the props object can be treated like any other object in JavaScript can be treated.

**What are Side Effects?**

Sides effects in React are operations you want to occur after a certain condition is met. In React these conditions can be user defined, but I will list some of the most common ones: when the component loads, when the component unloads, when a piece of state changes. The `useEffect` hook is the method React utilizes to execute side effects. The `useEffect` function takes in two arguments, a callback function which specifies the operation the developer wishes to occur (e.g. when the component loads, make a request to the an API.), and an array, know as the dependency array, which delineates when the side effect should occur. If the array is empty ([ ]) the callback function only runs when the component loads for the first time, otherwise pieces of state data (i.e variables created with `useState`) can be put inside the array to indicate the if these pieces of data change in value then the side effect operation should occur.

**What is Routing?**

Routing is how we navigate between different locations in an application. For Web Applications this is how we navigate between pages i.e. how and if we can get from one page to another. React requires the addition of an extra library, react-router, in order to facilitate routing. React-Router is essentially a component library which wraps the functionality you would expect natively from anchor tags and seperate HTML pages in React components so that these essential web site features can be utilized with React. Below is a visual of the routing flow for this application. 

<img src="./GhibliRouting.PNG"
     alt="Color Palette"
     style="float: left; margin-right: 10px;" /> 

## Today's Project 

This walk through will entail the creation of a three-page React application which will utilize the Studio Ghibli API to display data about movies allowing user's to choose their favorites and save them. The user will be able to "login" to view Studio Ghibli movies and add them to favorites (we will be mocking the persistent storage of user information using localstorage being that we dont have a back-end). This should touch upon most of the concepts fundamental to using React (e.g routing, fetching data, managing state, styling, side effects, handling user input) as well as how to implement them correctly. 

Link to API specs: https://ghibliapi.herokuapp.com/

### Color Palette 

<img src="./ghibli.png"
     alt="Color Palette"
     style="float: left; margin-right: 10px;" />






