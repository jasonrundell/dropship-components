// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
import React from 'react';

const Aside = (props) =>
  <aside className={props.cssClass}>{props.children}</aside>;

export default Aside;
