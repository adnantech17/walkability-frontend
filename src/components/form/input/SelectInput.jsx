import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ label, name, options, register }) => {
  const [value, setValue] = useState('');
  return (
    <div className="text-input-container">
      <select
        type="text"
        className="text-input"
        {...register(name)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className={`text-input-label ${value ? 'shrink' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default SelectInput;
