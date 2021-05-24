import React from 'react'

export const pressed2 = (details) => {
    alert(details.title);
  }


const Book = ({details}) => {
    return(
      <div className="tile">
        <img src={details.url} alt="" />
        <h6>{details.title}</h6>
        <h6>{details.price}</h6>
        {/* Note that we can't pass in any args here */}
        {/* <button type = 'button' onClick = {pressed}>{details.price}</button> */}
        {/* If we want to pass on any args  we should do that as following*/}
        <button type="button" onClick={() => pressed2(details)}>{details.price}</button>
      </div>
    );
  } 

export default Book;