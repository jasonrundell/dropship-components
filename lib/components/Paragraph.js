import React from 'react';

const Paragraph = (props) =>
  <p className={props.cssClass}>{props.children}</p>;

export default Paragraph;
