import React from 'react';

const Image = (props) =>
  <img src={props.src} {... props} alt={props.alt || ""} />;

export default Image;
