import { useCallback, useEffect } from 'react';

const CounterInput = ({ meta, formInstance, defaultValue }) => {
  const { key, placeholder, rules = {}, readOnly } = meta;
  const { register, setValue, getValues } = formInstance;


  useEffect(() => {
    setValue(key, defaultValue);
  },[defaultValue, key, setValue]);
  const maxValue = rules.max;

  const increaseCounter = useCallback(() => {
    const data = parseInt(getValues(key)) || 0;
    if (!maxValue || data < maxValue) setValue(key, data + 1);
  }, [getValues, key, setValue, maxValue]);

  const decreaseCounter = useCallback(() => {
    const data = parseInt(getValues(key)) || 0;
    if (data > 0) setValue(key, data - 1);

  }, [getValues, key, setValue]);


  return (
    <div className="counter_container d-flex align-items-center">
      <button type="button" className="control_btn" onClick={decreaseCounter}>-</button>
      <input
        readOnly={readOnly ? true : false}
        defaultValue={defaultValue}
        type="number"
        className="d-inline-block pt-1 w-1 counter_output"
        placeholder={placeholder || ' '}
        {...register(key, { ...rules })} />
      <button type="button" className="control_btn" onClick={increaseCounter}>+</button>

    </div>
  );
}

export default CounterInput;
