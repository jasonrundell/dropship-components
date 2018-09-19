// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
import React from 'react';

const Pre = (props) =>
  <pre className={props.cssClass}>{props.children}</pre>;

export default Pre;
