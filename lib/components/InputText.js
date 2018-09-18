import React from 'react';

const InputText = (props) =>
  <input type="text" className={props.cssClass} name={props.inputName} value={props.inputValue} placeholder={props.placeholder} required={props.required} onChange={props.onChange} autoComplete={props.autoComplete} />;

export default InputText;
