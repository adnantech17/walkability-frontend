import ReactPaginate from 'react-paginate';
import React from 'react';

const PaginatedItems = ({ pagesCount, current, onChange }) => {
  return (
    <>
      <ReactPaginate
        nextLabel={<i className="fa fa-chevron-right"></i>}
        onPageChange={(e) => {
          onChange(e.selected + 1);
        }}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pagesCount}
        previousLabel={<i className="fa fa-chevron-left"></i>}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        forcePage={parseInt(current) - 1}
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination-container mb-0"
        activeClassName="active"
      />
    </>
  );
};

export default PaginatedItems;
