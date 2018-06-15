import React from 'react';

const Image = (props) =>
  <img src={props.src} className={props.cssClass} alt={props.alt || ""} />;

export default Image;
