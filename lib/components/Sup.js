// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
import React from 'react';

const Sup = (props) =>
  <sup className={props.cssClass}>{props.children}</sup>;

export default Sup;
