import React from 'react';

const Heading = (props) => {
  const Component = `h${props.level}`;

  return <Component className={props.className}>{props.children}</Component>
}

export default Heading;
