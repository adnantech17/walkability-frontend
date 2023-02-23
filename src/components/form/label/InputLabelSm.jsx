import React from 'react';

const InputLabelSm = ({ meta }) => {
  return (
    <label htmlFor={meta?.key} id={meta?.key} className="form__label__search">{meta?.labelText}</label>
  );
};

export default InputLabelSm;