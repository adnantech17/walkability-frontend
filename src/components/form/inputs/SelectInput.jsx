import React, { useCallback, useState, useEffect, useRef, Fragment } from 'react';
import DropdownList from '~/components/form/inputs/dropdown/DropdownList';
import { useOutsideClickAlerter } from '~/hooks/useOutsideClickAlerter';
import { debounce } from '~/utils/debounce';


const SelectInput = ({
  meta,
  defaultValue,
  formInstance,
  isWatchSubscribed,
  dependencyValues,
}) => {
  const { key, rules = {}, lookupQuery, search, isGrouped, placeholder, autoOpen } = meta;
  const { register, setValue, watch } = formInstance;
  const [isFetching, setIsFetching] = useState(false);
  const [dropdownData, setDropdownData] = useState(meta.options || []);
  const [isOpen, setIsOpen] = useState(!!autoOpen);
  const [selectedValue, setSelectedValue] = useState();
  const dropdownRef = useRef();
  useOutsideClickAlerter(dropdownRef, () => setIsOpen(false), []);
  const [watchValue] = watch([key]);

  useEffect(() => {
    setSelectedValue(watchValue);
  }, [defaultValue, watchValue]);


  const performLookupQuery = useCallback(
    async (data) => {
      setIsFetching(true);
      try {
        const res = await lookupQuery(data);
        res?.length && setDropdownData(res);
      } catch (err) {
        setDropdownData([]);
        throw err;
      }
      setIsFetching(false);
    },
    [lookupQuery]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const performLookupQueryWithDelay = useCallback(debounce(performLookupQuery, 500), [performLookupQuery]);

  useEffect(() => {
    if (!lookupQuery || meta.dependencies) return;
    if (!search) performLookupQueryWithDelay(watchValue, 0);
    performLookupQueryWithDelay(watchValue);

  }, [watchValue, performLookupQueryWithDelay, lookupQuery, search, meta.dependencies]);

  const toggleDropdown = () => !rules.disabled && setIsOpen(!isOpen);
  const handleSelect = useCallback(
    (value, group) => {
      setSelectedValue(value);
      setIsOpen(false);
      setValue(key, value);
      (isGrouped && group) && setValue(`${key}_group`, group);
    },
    [key, setValue, isGrouped]
  );

  useEffect(() => {
    if (isWatchSubscribed) handleSelect(defaultValue);
  }, [defaultValue, handleSelect, isWatchSubscribed]);

  useEffect(() => {
    if (!meta.dependencies?.length || !Object.keys(dependencyValues).length)
      return;
    meta.onDependencyValueChange(dependencyValues, meta.key, {
      performLookupQuery,
    });
  }, [meta, performLookupQuery, dependencyValues]);

  return (
    <>
      {/* Label */}
      {search ?
        <>
          <input  {...register(key, { ...rules })}
            onClick={() => setIsOpen(true)}
            onFocus={() => setIsOpen(true)}
            autoComplete='off'
            type='text' className='form__select' placeholder={placeholder || ' '} />
        </>
        :
        <>
          <div
            className={`form__select ${selectedValue ? 'selected' : ''} ${rules.disabled ? 'disabled' : ''}`}
            onClick={toggleDropdown}
          >
            <input type='text' {...register(key, { ...rules })} style={{ display: 'none' }} />
            {isFetching ?
              (<span>{'Loading...'}</span>)
              :
              (<span>
                {((selectedValue === 0) || selectedValue) ? dropdownData.find((o) => o.value === selectedValue)?.label : placeholder ? placeholder : 'Select an option'}
              </span>)
            }
            <i className={`fa fa-chevron-down icon ${isOpen ? 'open' : ''}`}></i>
          </div>
        </>}

      {/* Dropdown*/}
      <div
        ref={dropdownRef}
        style={dropdownData.length < 20 ? { overflowY: 'scroll' } : { overflowY: 'hidden' }}
        className={`form__options ${isOpen ? 'open' : ''}`}
      >
        <DropdownList
          isGrouped={isGrouped}
          data={dropdownData}
          selectedValue={setValue}
          handleSelect={handleSelect}
        />
      </div>
    </>
  );
};

export default SelectInput;


