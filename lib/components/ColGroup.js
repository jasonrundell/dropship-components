// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
import React from 'react';

const ColGroup = (props) =>
  <colgroup {... props}>{props.children}</colgroup>;

export default ColGroup;
