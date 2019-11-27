import React from 'react';

const Label = (props) =>
  <label htmlFor={props.labelName} className={props.cssClass}>{props.children}</label>;

export default Label;
