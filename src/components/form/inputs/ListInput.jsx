import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputBuilder from '~/components/form/inputBuilder/InputBuilder';

const ListInput = ({ meta, formInstance, defaultValue }) => {

  const { key, fields, addButtonText = '+ Add New', addButtonClassName, labelPrefix, listItemClassName, limit } = meta;
  const { control } = formInstance;

  const { fields: fieldsData, append, remove } = useFieldArray({
    control,
    name: key
  });

  const addItem = (data) => {
    append(data || {})
  };

  return (
    <>
      {fieldsData.map((data, index) => {
        const fieldNamePrefix = `${key}[${index}]`;
        return (
          <div key={fieldNamePrefix} className={`list-input-row ${listItemClassName || ''}`}>
            <span className="cross-btn"
              onClick={() => {
                remove(index);
              }}>
              <i className='fa fa-close' />
            </span>
            {!!labelPrefix && <h3>{`${labelPrefix} ${index + 1}`}</h3>}
            {fields
              .map((field, idx) =>
                <InputBuilder
                  defaultValue={defaultValue?.[index]?.[field?.key]}
                  key={idx}
                  meta={{ ...field, key: `${fieldNamePrefix}.${field.key}` }}
                  formInstance={formInstance}
                />
              )}
          </div>
        );
      })}

      {(!limit || fieldsData.length < limit) &&
        <a type="button" onClick={() => addItem()} className={addButtonClassName || 'link'}>
          {addButtonText}
        </a>}

    </>
  );
};

export default ListInput;