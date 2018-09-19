// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
import React from 'react';

const Abbr = (props) =>
  <abbr className={props.cssClass} title={props.title}>{props.children}</abbr>;

export default Abbr;
