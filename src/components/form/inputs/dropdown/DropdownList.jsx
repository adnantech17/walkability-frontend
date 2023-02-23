import React from 'react';
import List from '~/components/form/inputs/dropdown/List';
import VirtualizedList from '~/components/form/inputs/dropdown/VirtualizedList';


const DropdownList = ({ isGrouped, data, selectedValue, handleSelect }) => {
  const showVirtualized = data.length > 20;

  const rowRenderer = ({ index, style }) => data[index] ? (
    <div
      key={data[index].value}
      style={{ ...style, overflow: 'hidden' }}
      className={`dropdown-item ${data?.[index]?.value == selectedValue ? 'clicked-item' : ''}`}
      onClick={() => handleSelect(data[index].value)}
    >
      <span>{data[index].label}</span>
      <span
        className={`item-click ${data[index].value === selectedValue ? 'clicked' : ''}`}
      >
      </span>
    </div>
  ) : null;

  const groupedRowRenderer = ({ index, style }) => data[index] ? (
    <div
      key={index}
      style={{ ...style, overflow: 'hidden' }}
      className='group-list'
    >
      <li className={`dropdown-item ${selectedValue === data[index]?.value ? 'clicked-item' : ''}`}
        onClick={() => handleSelect(data[index]?.value, data?.[index]?.group)}
      >
        <div className='d-flex align-items-center'>
          {data[index].iconSrc && <div className='icon-container mx-1'><img src={data[index].iconSrc} alt='Icon' /></div>}
          <div className='label-container'>
            <span className='title d-block'>{data[index].label}</span>
            <span className='group-name' >{data?.[index]?.group}</span>
          </div>
        </div>
      </li>
    </div>
  ) : null;

  if (data.length > 0) {
    return (
      <>
        {
          showVirtualized ?
            <VirtualizedList
              className={'dropdown-item-list'}
              itemSize={isGrouped ? 60 : 40}
              listSize={data.length}
              row={isGrouped ? groupedRowRenderer : rowRenderer}
            />
            :
            <List
              isGrouped={isGrouped}
              data={data}
              selectedValue={selectedValue}
              handleSelect={handleSelect} />
        }
      </>)
  }

};

export default DropdownList;
