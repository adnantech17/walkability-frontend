import React, { useCallback } from 'react';
import PageSize from './PageSize';
import PaginatedItems from './PaginatedItems';

const Pagination = ({
  goToPageInput,
  setGoToPageInput,
  pageSize,
  current,
  total,
  onChange,
}) => {
  const rangeStartAt = (current - 1) * pageSize + 1;
  const rangeEndAt = current * pageSize > total ? total : current * pageSize;

  const handleChange = useCallback(
    async (e) => {
      setGoToPageInput(e.target.value || '');
      if (
        e.target.value &&
        e.target.value > 0 &&
        e.target.value <= Math.ceil(total / pageSize)
      ) {
        onChange(parseInt(e.target.value));
      }
    },
    [onChange, pageSize, setGoToPageInput, total]
  );

  return (
    <>
      <div className="custom_pagination">
        <div className="d-flex align-items-center">
          <span className="show_count_options">
            <PageSize pageSize={pageSize} onChange={onChange} />
          </span>
          <span className="page_count">
            {pageSize
              ? `Showing ${rangeStartAt} - ${rangeEndAt} of ${total} items`
              : `${total} results`}
          </span>
        </div>
        <div className="d-flex align-items-center">
          <span className="paginate_pages  pe-3">
            <PaginatedItems
              current={current}
              pagesCount={pageSize ? Math.ceil(total / pageSize) : 1}
              onChange={onChange}
            />
          </span>

          <span className="paginate_select">
            <input
              type="number"
              value={goToPageInput}
              onChange={handleChange}
              min="1"
              max={`${pageSize ? Math.ceil(total / pageSize) : 1}`}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Pagination;
