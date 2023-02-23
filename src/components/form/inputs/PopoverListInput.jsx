
import React, { useState, useRef } from 'react';

import InputBuilder from '~/components/form/inputBuilder/InputBuilder';
import { useOutsideClickAlerter } from '~/hooks/useOutsideClickAlerter';

const PopoverListInput = ({
  meta: propMeta,
  formInstance,
  defaultValue
}) => {
  const { key, rules = {}, renderExtraText, meta } = propMeta;
  const { register, watch } = formInstance;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useOutsideClickAlerter(dropdownRef, () => setIsOpen(false), []);
  const toggleDropdown = () => !rules.disabled && setIsOpen(!isOpen);
  const watchValue = watch();

  return (
    <>
      <input
        type="text"
        {...register(key, { ...rules })}
        style={{ display: 'none' }}
      />
      <div
        className={`form__select w-100 ${rules.disabled ? 'disabled' : ''}`}
        onClick={toggleDropdown}
      >
        <span>
          {renderExtraText ? renderExtraText({ value: watchValue }) : 'Select Options'}
        </span>
        <i className={`fa fa-chevron-down icon ${isOpen ? 'open' : ''}`}></i>
      </div>
      <div
        ref={dropdownRef}
        className={`form__options custom__select__dropdown  ${isOpen ? 'open' : ''}`}
      >
        {meta?.map((child, idx) => <InputBuilder
          defaultValue={defaultValue?.[idx]}
          key={idx}
          meta={child}
          formInstance={formInstance} />)}
        <div className='d-flex'>
          <button type='button' onClick={toggleDropdown} className='done_btn'>Done</button>
        </div>
      </div>

    </>
  );
};

export default PopoverListInput;
