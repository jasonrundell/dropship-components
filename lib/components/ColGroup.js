// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
import React from 'react';
import Col from './Col';

const ColGroup = (props) => {
  const listItems = props.items.map((item) =>
    <Col key={item.toString()} className={props.classNameChildren} />
  );

  return(
    <colgroup className={props.className}>{listItems}</colgroup>
  )
}

export default ColGroup;
