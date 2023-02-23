import { useCallback, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import InputBuilder from '~/components/form/inputBuilder/InputBuilder';

const CounterInputWithDependentFields = ({ meta, formInstance }) => {
  const { key, placeholder, rules = {}, readOnly, dependentFields: fields, rowLabelPrefix = '' } = meta;
  const { control, watch } = formInstance;
  const { register, setValue, getValues } = formInstance;
  const childrenKey = key + '_children';

  const [watchValue] = watch([key]);


  const { fields: fieldsData, append, remove } = useFieldArray({
    control,
    name: childrenKey
  });

  useEffect(() => {
    if (parseInt(watchValue) > fieldsData?.length) {
      Array.from({ length: parseInt(watchValue) || 0 }, (_, idx) => {
        if (idx >= fieldsData?.length) {
          append({})
        }
      });
    } else {
      remove(parseInt(watchValue));
    }
  }, [append, fieldsData?.length, remove, watchValue]);

  const increaseCounter = useCallback(() => {
    const data = parseInt(getValues(key)) || 0
    setValue(key, data + 1);
  }, [getValues, key, setValue]);

  const decreaseCounter = useCallback(() => {
    const data = parseInt(getValues(key)) || 0
    if (data > 0) {
      setValue(key, data - 1);
    }
  }, [getValues, key, setValue]);

  return (
    <div>

      <div className="counter_container">

        <button type="button" className="control_btn" onClick={decreaseCounter}>-</button>
        <input
          readOnly={readOnly ? true : false}
          defaultValue={0}
          type="number"
          className="counter_output w-1"
          placeholder={placeholder || ' '}
          {...register(key, { ...rules })} />
        <button type="button" className="control_btn" onClick={increaseCounter}>+</button>

      </div>
      {fieldsData.map((data, index) => {
        const fieldNamePrefix = `${childrenKey}[${index}]`;
        return (
          <div key={fieldNamePrefix}>
            {!!rowLabelPrefix && <h3>{`${rowLabelPrefix} ${index + 1}`}</h3>}
            {fields
              .map((field, idx) =>
                <InputBuilder
                  key={idx}
                  meta={{ ...field, key: `${fieldNamePrefix}.${field.key}` }}
                  formInstance={formInstance}
                />
              )}
          </div>
        );
      })}


    </div>
  );
}

export default CounterInputWithDependentFields;