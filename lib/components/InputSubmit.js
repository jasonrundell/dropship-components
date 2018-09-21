import React from 'react';

const InputSubmit = (props) =>
  <input type={`submit`} {... props} name={props.inputName} value={props.inputValue} />;

export default InputSubmit;
