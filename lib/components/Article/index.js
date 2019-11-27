import React from 'react';

const Article = (props) =>
  <article className={props.cssClass}>{props.children}</article>;

export default Article;
