import React from 'react';

const InputLabel = ({ meta, className }) => {
  return (
    <label
      htmlFor={meta?.key}
      id={meta?.key}
      className={className ? className : 'form__label'}
    >
      {meta?.labelText}
    </label>
  );
};

export default InputLabel;
