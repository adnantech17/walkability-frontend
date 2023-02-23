import React from 'react';

const TextAreaInput = ({ meta, formInstance }) => {

  const { key, placeholder, rules = {} } = meta;
  const { register, } = formInstance;

  return (
    <textarea
      className="form__textarea"
      placeholder={placeholder || ' '}
      {...register(key, { ...rules })}
    />
  );
};

export default TextAreaInput;