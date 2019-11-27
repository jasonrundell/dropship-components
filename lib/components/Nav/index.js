import React from 'react';

const Nav = (props) =>
  <nav className={props.cssClass}>{props.children}</nav>;

export default Nav;
