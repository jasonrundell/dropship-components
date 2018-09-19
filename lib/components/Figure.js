// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
import React from 'react';

const Figure = (props) =>
  <figure className={props.cssClass}>{props.children}</figure>;

export default Figure;
