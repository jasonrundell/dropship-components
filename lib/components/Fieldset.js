// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
import React from 'react';

const Fieldset = (props) =>
  <fieldset className={props.cssClass}>{props.children}</fieldset>;

//let disabled = props.isReadonly ? {'disabled' : 'disabled'} : {};
//<fieldset className={props.cssClass} {...disabled}>{props.children}</fieldset>;

export default Fieldset;
