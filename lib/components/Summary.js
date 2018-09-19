// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
import React from 'react';

const Summary = (props) =>
  <summary className={props.cssClass}>{props.children}</summary>;

export default Summary;
