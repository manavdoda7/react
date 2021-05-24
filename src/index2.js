import React from "react";
import ReactDom from "react-dom";

// Import CSS
import './CSS/index.css'


// Two ways of writing functions
// const Greeting = () => {
/* function Greeting(){
  // Either specify in Html
  return <h4 className  = 'M'>This is Manav Doda </h4>;
  // Or use create element function
  // return React.createElement('h1', {}, "Hi! Manav Doda here!!!");
}; */




/* function Greeting() {
  return <div>
    <Person />
    <Message/>
  </div>;
}
const Person = () => <h1>Manav Doda</h1>;
const Message = () => {
  return <p>Hi from Manav Doda</p>
};


// Either use this
ReactDom.render(<Greeting />, document.getElementById("root"));
// Or this 
// But if we need to return div inside div we can use create element function again in the place of hello world string
// ReactDom.render(React.createElement('div', {}, React.createElement('h1', {}, 'Hello World') ), document.getElementById("root")); */

// const Book = (props) => {
//   console.log(props)
//   return (
//     // For specifying CSS in react we do the following, it will owerwrite the attached css file:
//     // Double brackets are used bcz first brackets take us into js from react and the second ones are for defining an array of key value pairs.
//     <div className='tile' style={{borderRadius: '20px', border: '4px #621478 solid'}}>
//       {/* Commenting is also done in brackets here */}
//       <Image />
//       <Title />
//       <Seller />
//     </div>
//   )
// }

// // If we want to use javascript inside react we can create a variable and then for accessing it we use {var-name}
// var Url = "https://rukminim1.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70";
// const Image = () => <img src={Url} alt="" />;
// const Title = () => <h4>HP Laptop</h4>;
// const Seller = () => <h6>HP store</h6>
// function List(props) {
//   return <div>
//      <Book key1="gur" key2 = "simran"/>, 
//      {/* This is how we access the arguments taken during function call(by using {props.key}) */}
//      <Book key1 = "manav" num = {props.number}/>{/*, <Book />, <Book />, <Book />, <Book />, <Book />, <Book />, <Book />, <Book /> */}
//   </div>
// }




 var details1 = {
  url : "https://rukminim1.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70",
  name : "HP Laptop", 
  seller : "HP Store"
} 
/*function List(props) {
  return(
    <div>
      <Laptop details = {details1}/>
    </div>
  )
} */

/* const Laptop = (props) => {
  return (
    <div className = 'tile'>
      <img src={props.details.url} details="" />
      <h4>{props.details.name}</h4>
      <h6>{props.details.seller } </h6>
    </div>
  )
} */

// This is another way of doing the same thing.
/* const Laptop = (props) => {
  const {url, name, seller} = props.details;
  return (
    <div className = 'tile'>
      <img src={url} alt="" />
      <h4>{name}</h4>
      <h6>{seller } </h6>
    </div>
  )
} */



// This is one more way of doing it.(We can also pass a tuple like{name,url,seller} in place of details if we send three arguments separately.)
// But the names of args in tuple should exactly match the names we pass while calling the function.
/* const Laptop = ({details}) => {
  // const {url, name, seller} = props.details;
  return (
    <div className = 'tile'>
      <img src={details.url} alt="" />
      <h4>{details.name}</h4>
      <h6>{details.seller } </h6>
    </div>
  )
} */



function List(props) {
  return(
    <div>
      <Laptop url = {details1.url} name = {details1.name} seller = {details1.seller}>
        <p>This parag raph is a child of Laptop and it will be passed in children arg of laptop</p>
      </Laptop>
    </div>
  )
}

const Laptop = ({url, name, seller, children}) => {
  // const {url, name, seller} = props.details;
  return (
    <div className = 'tile'>
      <img src={url} alt="" />
      <h4>{name}</h4>
      <h6>{seller } </h6>
      {children}
    </div>
  )
}

ReactDom.render(<List number = {10}/>, document.getElementById('root'));