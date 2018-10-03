// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
import React from 'react';
import Li from './Li';

const UnorderedList = (props) => {
  const items = props.items;
  const listItems = items.map((item) =>
    <Li key={item.toString()} className={props.classNameChildren}>{item}</Li>
  );

  return(
    <ul className={props.className}>{listItems}</ul>
  )
}

export default UnorderedList;
