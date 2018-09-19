// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
import React from 'react';

const Header = (props) =>
  <header className={props.cssClass}>{props.children}</header>;

export default Header;
