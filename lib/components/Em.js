// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
import React from 'react';

const Em = (props) =>
  <em className={props.cssClass}>{props.children}</em>;

export default Em;
