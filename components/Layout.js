import React from 'react';

import './Layout.scss';

const Layout = (props) =>
  <div className="Layout__container">
    {props.children}
  </div>;

export default Layout;
