// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
import React from 'react';

const Legend = (props) =>
  <legend className={props.cssClass}>{props.children}</legend>;

export default Legend;
