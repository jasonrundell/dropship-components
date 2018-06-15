import React from 'react';

const Card = (props) => {
  return (
    <div className="Card__container">
    {props.children}
  </div>
  )
}
  

export default Card;
