import React from 'react';

const Heading = (props) => {
  const Component = `h${props.level}`;

  return <Component className={props.cssClass}>{props.children}</Component>
}

export default Heading;
