// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
import React from 'react';

const Link = (props) =>
  <a {... props}>{props.children}</a>;

export default Link;
