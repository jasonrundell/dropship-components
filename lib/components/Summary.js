// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
import React from 'react';

const Summary = (props) =>
  <summary {... props}>{props.children}</summary>;

export default Summary;
