// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
import React from 'react';

const Anchor = (props) =>
  <a {... props}>{props.children}</a>;

export default Anchor;
