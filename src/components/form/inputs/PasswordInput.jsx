import React, { useState } from 'react';

const PasswordInput = ({ meta, formInstance }) => {
  const [showPassword, setShowPassword] = useState(false);


  const { key, placeholder, rules = {}, readOnly } = meta;
  const { register } = formInstance;

  return (
    <>
      <input
        step="any"
        readOnly={readOnly ? true : false}
        type={showPassword ? 'text' : 'password'}
        className={`${readOnly ? 'form__input disabled' : 'form__input'}`}
        placeholder={placeholder || ' '}
        {...register(key, { ...rules })}
      />
      <span title={showPassword ? 'Hide password' : 'Show password'} className='form__append form__append--action' onClick={() => setShowPassword(!showPassword)}><i className={`fa fa-eye${showPassword ? '' : '-slash'}`} /></span>
    </>

  );
};

export default PasswordInput;
