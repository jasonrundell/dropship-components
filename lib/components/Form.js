import React from 'react';

const Form = (props) =>
  <form className={props.cssClass} onSubmit={props.onSubmit}>{props.children}</form>;

export default Form;
