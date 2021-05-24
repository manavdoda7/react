import React from 'react'
import ReactDom from 'react-dom'

import './CSS/index.css'

import {books} from './books'
import SBook from './Book'

const newBooks = books.map((book, index) => {
  // We can do any of the following according to our convenience
    /* return(
      <div className="tile">
        <img src={book.url} alt="" />
        <h6>{book.title}</h6>
        <h6>{book.price}</h6>
      </div>
    ); */
    // return <Book key={book.id} details = {book}/>
    // Or we can also make the id equal to index of array as following:
    return <SBook key = {index} details = {book}/>
});

const List = () =>{
  console.log(newBooks)
  return (
    <div>
      {newBooks}
      {/* <Book details = {books[0]}/>
      <Book details = {books[1]}/> */}
    </div>
  )
}




// Or we can simply do
/* const List = () => {
  return (
    <div>
      {books.map( (book) => {
        return (<div className="tile">
          <img src={book.url} alt="" />
          <h5>{book.title}</h5>
          <h6>{book.price}</h6>
        </div>)
      })}
    </div>
  )
} */

ReactDom.render(<List/>, document.getElementById('root'));