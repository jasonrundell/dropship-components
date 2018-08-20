import React from 'react';

const Section = (props) =>
  <section className={props.cssClass}>{props.children}</section>;

export default Section;
