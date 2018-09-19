// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
import React from 'react';

const Sub = (props) =>
  <sub className={props.cssClass}>{props.children}</sub>;

export default Sub;
