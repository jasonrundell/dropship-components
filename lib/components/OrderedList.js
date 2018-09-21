import React from 'react';

const OrderedList = (props) => {
  const listItems = props.items.map((item) =>
    <li key={item.toString()} className={props.classNameChildren}>{item}</li>
  );

  return(
    <ol type={props.listType} className={props.className}>{listItems}</ol>
  )
}


export default OrderedList;
