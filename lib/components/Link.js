import React from 'react';

const Link = (props) =>
  <a href={props.href} className={props.cssClass}>{props.children}</a>;

export default Link;
