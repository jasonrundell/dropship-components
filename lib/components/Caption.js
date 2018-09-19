// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
import React from 'react';

const Caption = (props) =>
  <caption className={props.cssClass}>{props.children}</caption>;

export default Caption;
