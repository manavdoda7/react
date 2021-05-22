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

const Book = () => {
  return (
    <div className='tile'>
      <Image />
      <Title />
      <Seller />
    </div>
  )
}

const Image = () => <img src="https://rukminim1.flixcart.com/image/312/312/kcm9t3k0/computer/q/x/r/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg?q=70" alt="" />;
const Title = () => <h4>HP Laptop</h4>;
const Seller = () => <h6>HP store</h6>
function List() {
  return <div>
    <Book />, <Book />, <Book />, <Book />, <Book />, <Book />, <Book />, <Book />, <Book />, <Book />
  </div>
}

ReactDom.render(<List />, document.getElementById('root'));