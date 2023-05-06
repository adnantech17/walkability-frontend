import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, name, defaultValue, type, register }) => {
  const [value, setValue] = useState('');
  return (
    <div className="text-input-container">
      <input
        type={type || text}
        className="text-input"
        defaultValue={defaultValue}
        {...register(name)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <label className={`text-input-label ${value ? 'shrink' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
