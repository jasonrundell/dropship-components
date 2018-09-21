import React from 'react';

const Label = (props) =>
  <label htmlFor={props.labelName} {... props}>{props.children}</label>;

export default Label;
