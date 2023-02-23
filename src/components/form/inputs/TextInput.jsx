import React from 'react';

const TextInput = ({ meta, formInstance }) => {
  const { key, inputType, placeholder, rules = {}, readOnly } = meta;
  const { register } = formInstance;

  return (
    <input
      step="any"
      readOnly={readOnly ? true : false}
      type={inputType}
      className={`${readOnly ? 'form__input disabled' : 'form__input'}`}
      placeholder={placeholder || ' '}
      {...register(key, { ...rules })}
    />
  );
};

export default TextInput;
