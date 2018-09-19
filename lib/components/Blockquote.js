// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
import React from 'react';

const Blockquote = (props) =>
  <blockquote className={props.cssClass} cite={props.cite}>{props.children}</blockquote>;

export default Blockquote;
