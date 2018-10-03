// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
import React from 'react';
import Option from './Option';

const OptGroup = (props) => {
  const listItems = props.items.map((item) =>
    <Option key={item.toString()} className={props.classNameChildren}>{item}</Option>
  );

  return(
    <optgroup className={props.className}>{listItems}</optgroup>
  )
}

export default OptGroup;
