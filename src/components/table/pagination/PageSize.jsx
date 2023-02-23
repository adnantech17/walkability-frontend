import React from 'react';

const PageSize = ({ pageSize, onChange }) => {

  return (
    <>
      <select
        className=""
        name="pageSizeValue"
        onChange={(e) => {
          onChange(1, parseInt(e.target.value));
        }}
        value={pageSize}
      >
        <option value="10">Show 10</option>
        <option value="20">Show 20</option>
        <option value="0">Show All</option>
      </select>
    </>
  );
};

export default PageSize;
