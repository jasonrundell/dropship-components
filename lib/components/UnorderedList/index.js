import React from 'react';

const UnorderedList = (props) => {
  const listItems = props.items.map((item) =>
    <li key={item.toString()} className={props.cssClassChildren}>{item}</li>
  );

  return(
    <ul className={props.cssClass}>{listItems}</ul>
  )
}


export default UnorderedList;
