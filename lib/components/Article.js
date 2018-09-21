import React from 'react';

const Article = (props) =>
  <article {... props}>{props.children}</article>;

export default Article;
