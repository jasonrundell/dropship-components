// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
import React from 'react';

const Link = (props) =>
  <a
  href={props.href}
  className={props.className}
  rel={props.rel}
  media={props.media}
  as={props.as}
  type={props.type}
  crossOrigin={props.crossorigin}
  media={props.media}
  importance={props.importance}
  integrity={props.integrity}
  referrerPolicy={props.referrerpolicy}
  sizes={props.sizes}
  title={props.title}>{props.children}</a>;

export default Link;
