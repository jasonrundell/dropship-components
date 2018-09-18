import React from 'react';

const InputSubmit = (props) =>
  <input type={`submit`} className={props.cssClass} name={props.inputName} value={props.inputValue} />;

export default InputSubmit;
