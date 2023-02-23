import React from 'react';

const List = ({ isGrouped, data, selectedValue, handleSelect }) => {
  return (
    data.map((el, index) => (
      isGrouped ? (
        <div key={`group-list-${index + 1}`} className='group-list'>
          <li className={`dropdown-item ${selectedValue === el.value ? 'clicked-item' : ''}`}
            onClick={() => handleSelect(el.value, el.group)}
          >
            <div className='d-flex align-items-center'>
              {el.iconSrc && <div className='icon-container mx-1'><img src={el.iconSrc} alt='Icon' /></div>}
              <div className='label-container'>
                <span className='title d-block'>{el.label}</span>
                <span className='group-name' >{el.group}</span>
              </div>
            </div>
          </li>
        </div>)
        : (<div
          key={`list-${index + 1}`}
          className={`dropdown-item ${el.value == selectedValue ? 'clicked-item' : ''}`}
          onClick={() => handleSelect(el.value)}
        >
          <span>{el.label}</span>
          <span
            className={`item-click ${el.value === selectedValue ? 'clicked' : ''}`}
          >
          </span>
        </div>)
    ))
  );
};

export default List;