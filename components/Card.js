import React from 'react';

const Card = (props) =>
  <div className={props.cssClass}>{props.children}</div>;

export default Card;
