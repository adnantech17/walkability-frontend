/* eslint-disable indent */
import { useMemo, useRef, useState } from 'react';
import { useRowSelect, useTable } from 'react-table';
import { usePermission } from '~/components/auth/usePermission';
import { Loader } from '~/components/layout/Loader';
import { useOutsideClickAlerter } from '~/hooks/useOutsideClickAlerter';


export const Table = ({
  columns,
  data,
  isLoading,
  manualPagination = false,
  showRowActionsInDropdown = true,
  batchSelection = {},
}) => {
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const { checkPermission } = usePermission();
  const columnData = useMemo(
    () => columns?.filter?.((data) => data.accessor !== 'actions'),
    [columns]
  );
  const rowActions = useMemo(
    () => columns?.filter?.((data) => data.accessor === 'actions'),
    [columns]
  )?.[0]?.options.filter((i) => {
    const { permissions } = i().props;
    return permissions ? checkPermission(permissions) : true;
  });

  const rowData = useMemo(() => data, [data]);
  const actionButtonRef = useRef();

  useOutsideClickAlerter(actionButtonRef, () => setShowDropdownItems(false), [
    'dropdown_component',
    'modal',
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columnData,
        data: rowData,
        manualPagination,
      },
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) =>
          rowActions
            ? [
              ...columns,
              {
                id: 'Actions',
                Header: 'Action',
                Cell: ({ row }) => (
                  <>
                    {showRowActionsInDropdown ? (
                      <button
                        ref={actionButtonRef}
                        className={'action_toggler'}
                        onClick={() => {
                          setSelectedRow(row);
                          setShowDropdownItems(true);
                        }}
                      ></button>
                    ) : (
                      renderRowActions(row.original)
                    )}
                  </>
                ),
              },
            ]
            : [...columns]
        );
      }
    );

  const renderRowActions = (record) => {
    return rowActions.map((tableAction) =>
      tableAction(record, () => setShowDropdownItems(false), batchSelection)
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='table-responsive'>
          <table
            // className="container"
            className='table'
            {...getTableProps()}>
            {/* <div className='d-flex justify-content-between '>
              <h3>
                {title}
              </h3>
              {
                <div>
                  {actions?.map(action => action)}
                </div>
              }
            </div> */}
            {/* Table Header render */}
            <thead
            // className="table_head"
            >
              {headerGroups.map((headerGroup, idx) => (
                <tr
                  key={idx}
                  // className="table_row table_row_title"
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column, idx) => (
                    <th
                      key={idx}
                      {...column.getHeaderProps()}
                    // className="item_cell"
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* Table Body Render  */}
            {rowData?.length ? (
              <tbody
                // className="table_body"
                {...getTableBodyProps()}>
                {rows.map((row, idx) => {
                  prepareRow(row);
                  return (
                    <tr
                      key={idx}
                      // className="table_row"
                      id="table"
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell, idx) => {
                        return (
                          <td
                            key={idx}
                            {...cell.getCellProps()}
                            className="item_cell"
                          >
                            {cell.render('Cell')}
                            {/* Dropdown Render  */}
                            {showDropdownItems &&
                              cell.column?.id === 'Actions' &&
                              cell.row?.id === selectedRow.id && (
                                <div
                                  className="action_submenu"
                                  id="dropdown_component"
                                >
                                  {renderRowActions(row.original)}
                                </div>
                              )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              null
              // <h4 className="text-no-data">No Data Found</h4>
            )}
          </table>
        </div>
      )}
    </>
  );
};
