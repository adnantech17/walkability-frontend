import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { usePermission } from '~/components/auth/usePermission';
import { Loader } from '~/components/layout/Loader';
import TableFilter from '~/components/listView/TableFilter';
import { DEFAULT_PAGE_SIZE } from '~/configs/app';
import { eventBus } from '~/services/eventBus';
import Pagination from './pagination/Pagination';
import { Table } from './TableBuilder';

export const TableContainer = ({
  queryService,
  columns,
  title,
  actions,
  filtersMeta,
  refreshEvent,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(DEFAULT_PAGE_SIZE);
  const [goToPageInput, setGoToPageInput] = useState(1);
  const { checkPermission } = usePermission();
  const router = useRouter();
  const processedActions = actions.filter((i) =>
    i.props.permissions ? checkPermission(i.props.permissions) : true
  );

  const [pageData, setPageData] = useState({
    rowData: [],
    total: 0,
  });

  const performQuery = useCallback(
    (params) => {
      setIsLoading(true);
      const res = queryService(params).then((info) => {
        const { meta, data } = info;
        setPageData({
          rowData: data,
          total: meta?.count,
        });
        setIsLoading(false);
        return info;
      });
      return res;
    },
    [queryService]
  );

  useEffect(() => {
    eventBus.subscribe(refreshEvent, () => performQuery(router.query));

    return () => {
      eventBus.unsubscribe(refreshEvent);
    };
  }, [performQuery, refreshEvent, router.query]);

  useEffect(() => {
    if (router.isReady) {
      if (router.query.page) setCurrentPage(parseInt(router.query.page));
      setPageLimit(parseInt(router.query.limit || DEFAULT_PAGE_SIZE));
      setPageData((prevState) => ({
        ...prevState,
        rowData: [],
      }));
      performQuery(router.query);
    }
  }, [performQuery, router.isReady, router.query]);

  const handlePaginationChange = (current, pageSize = pageLimit) => {
    setPageLimit(pageSize);
    setCurrentPage(current);
    setGoToPageInput(current);

    router.push({
      query: { ...router.query, limit: parseInt(pageSize), page: current },
    }, undefined, { scroll: false });
    performQuery({ ...router.query, limit: parseInt(pageSize), page: current });
  };
  return (
    <>
      {filtersMeta && (
        <TableFilter filtersMeta={filtersMeta} queryService={performQuery} />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center table_primary_action">
            <h3 className="table_title">{title}</h3>
            <div>{processedActions}</div>
          </div>
          <div className="table_items_container">
            <Table
              columns={columns || []}
              data={pageData.rowData || []}
              isLoading={isLoading}
            />
            {!!pageData.rowData?.length && (
              <Pagination
                current={currentPage}
                setCurrent={setCurrentPage}
                total={pageData.total}
                onChange={handlePaginationChange}
                pageSize={pageLimit}
                goToPageInput={goToPageInput}
                setGoToPageInput={setGoToPageInput}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
