import React from 'react';

const Link = (props) =>
  <a href={props.href} className={props.cssClass} onClick={props.onClick}>{props.children}</a>;

export default Link;
