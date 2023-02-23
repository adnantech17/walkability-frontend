import React from 'react';

const DateInput = ({ meta, formInstance }) => {

  const { key, inputType, placeholder, rules = {}, readOnly } = meta;
  const { register, } = formInstance;

  return (
    <input
      readOnly={readOnly ? true : false}
      type={inputType}
      className="form__input"
      placeholder={placeholder || ' '}
      {...register(key, { ...rules })}
    />
  );
};

export default DateInput;