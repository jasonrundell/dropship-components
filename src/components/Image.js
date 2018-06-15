import React from 'react';

const Image = (props) =>
  <img src={props.src} alt={props.alt || ""} />;

export default Image;
