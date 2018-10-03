// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
import React from 'react';

const Li = (props) =>
  <li {... props}>{props.children}</li>;

export default Li;
