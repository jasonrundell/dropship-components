//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
import React from 'react';
import Li from './Li';

const OrderedList = (props) => {
  const listItems = props.items.map((item) =>
    <Li key={item.toString()} className={props.classNameChildren}>{item}</Li>
  );

  return(
    <ol type={props.listType} className={props.className}>{listItems}</ol>
  )
}

export default OrderedList;
