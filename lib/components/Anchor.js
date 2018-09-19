// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
import React from 'react';

const Anchor = (props) =>
  <a href={props.href} className={props.cssClass} onClick={props.onClick} target={props.target}>{props.children}</a>;

export default Anchor;
