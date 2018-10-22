// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
import React from 'react';
import Div from './Div';
import Dt from './Dt';
import Dd from './Dd';

const DescriptionList = (props) => {
  const items = props.items;
  const listItems = items.map((item) =>
    <Div key={item.toString()} className={props.classNameChildren}>
      <Dt className={props.classNameDtChildren}>{item[0]}</Dt>
      <Dd className={props.classNameDdChildren}>{item[1]}</Dd>
    </Div>
  );

  return(
    <dl className={props.className}>{listItems}</dl>
  )
}

export default DescriptionList;
