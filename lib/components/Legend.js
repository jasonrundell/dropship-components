// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
import React from 'react';

const Legend = (props) =>
  <legend {... props}>{props.children}</legend>;

export default Legend;
