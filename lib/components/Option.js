// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
import React from 'react';

const Option = (props) =>
  <option {... props}>{props.children}</option>;

export default Option;
