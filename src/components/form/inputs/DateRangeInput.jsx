// import { addDays } from 'date-fns';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import { DateRangePicker } from 'react-date-range';
import { renderDate } from '~/components/table/utils';
import { DATE_DISPLAY_FORMAT_3 } from '~/configs/format';
import { useOutsideClickAlerter } from '~/hooks/useOutsideClickAlerter';
import { getDateRangeSearchUrlParam, parseDateRangeSearchUrlParam } from '~/utils/urls';


const DateRangeInput = ({
  meta, formInstance, defaultValue
}) => {
  const { key, rules = {}, filter, placeholder } = meta;
  const { register, setValue, watch } = formInstance;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useOutsideClickAlerter(dropdownRef, () => setIsOpen(false), []);
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: null,
      endDate: new Date(''),
      key: 'selection',
    },
  ]);

  useOutsideClickAlerter(dropdownRef, () => setIsOpen(false), []);
  const [watchValue] = watch([key]);

  // console.log('DateRange =', 'state =', selectedDate.endDate);

  const handleChange = useCallback((selectedDate) => {
    if (selectedDate[0].startDate && selectedDate[0].endDate) {
      setValue(key, getDateRangeSearchUrlParam(selectedDate))
    }
  }, [key, setValue])

  useEffect(() => {
    setSelectedDate(parseDateRangeSearchUrlParam(watchValue) || [])
  }, [watchValue, setValue, key, filter]);

  useEffect(() => {
    setValue(key, defaultValue)
    const startDate = moment(defaultValue?.split('|')?.[0], DATE_DISPLAY_FORMAT_3).toDate()
    const endDate = moment(defaultValue?.split('|')?.[1], DATE_DISPLAY_FORMAT_3).toDate()
    defaultValue && setSelectedDate([{ startDate, endDate, key: 'selection' }])
  }, [defaultValue, filter, key, setValue]);

  const labelRender = (value, altText,) => {
    if (!value || isNaN(value)) return <span className='text-muted'>{altText}</span>;
    const str = renderDate(value, DATE_DISPLAY_FORMAT_3)
    return str;
  }

  function updatePosition(elementClassName) {
    const element = document.querySelector(elementClassName);
    element.classList.add('pos-left')
    element.classList.remove('pos-right')
    const dateRangePickerRect = element.getBoundingClientRect();
    if ((dateRangePickerRect.right) > window.innerWidth) {
      element.classList.add('pos-right')
      element.classList.remove('pos-left')
    }
  }

  useEffect(() => {
    if (isOpen) {
      updatePosition(`.date__range__${key}`);
    }
  }, [isOpen, key])

  return (
    < >
      <input
        type='date'
        className='d-none'
        {...register(key, { ...rules })}
      />
      <div
        className={'form__select'}
        onClick={() => {
          setIsOpen(!isOpen);
        }}

      >
        <span className='d-flex justify-content-center'>
          <span> {labelRender(selectedDate[0]?.startDate, placeholder || 'Check in',)}</span>
          <span className='dash'></span>
          <span>{labelRender(selectedDate[0]?.endDate, placeholder ? '' : 'Check Out')}</span>
          <span className='calendar-icon'><img className='w-100' src="/images/icons/calender.png" alt="" /></span>
        </span>
        <div onClick={(e) => e.stopPropagation()} ref={dropdownRef} className={`date__range__${key} date__form open`} style={{ top: '40px' }}>
          {isOpen ? <div className='date-range-content-wrapper d-block w-100'>
            <DateRangePicker
              onChange={item => handleChange([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={selectedDate}
              direction="horizontal"
            />
            <div className='d-flex align-items-start justify-content-end mb-2 me-2'>
              <button type='button' className='date_confirm_btn' onClick={() => setIsOpen(false)}>Done</button>
            </div>
          </div> : null}
        </div>
      </div>
    </>

  );
};

export default DateRangeInput;