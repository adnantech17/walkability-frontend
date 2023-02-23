import React, { useEffect } from 'react';

const CheckboxInput = ({ meta, formInstance }) => {

  const { key, inputType, labelText, rules = {}, render, onChange } = meta;
  const { register, watch, setValue, clearErrors } = formInstance;
  const value = onChange && watch(meta.key)

  useEffect(() => {
    if (!onChange) return
    onChange?.(value, {key, setValue, clearErrors})
  }, [value, key, onChange, setValue, clearErrors])

  return (
    <div className="form__checkbox">
      <input
        type={inputType}
        id={key}
        className=""
        {...register(key, { ...rules })}
      />
      <label htmlFor={key} id={key}>{labelText} {render && render()} </label>
    </div>
  );
};

export default CheckboxInput;