import { renderDateTime } from '~/components/table/utils';
import { getMarkupHistory } from '~/services/api/queries/markup';

const getMarkupHistoryTableMeta = () => {
  return {
    columns: [
      {
        Header: 'FROM DATE',
        accessor: 'previous_data.updatedAt',
        Cell: ({ value }) => renderDateTime(value)
      },
      {
        Header: 'TO DATE',
        accessor: 'current_data',
        Cell: ({ value }) => {
          return !value ? 'Continued' : renderDateTime(value.updatedAt)
        }
      },
      {
        Header: 'Applicable For',
        accessor: 'previous_data.data.company_name',
      },
      {
        Header: 'Markup Type',
        accessor: 'previous_data.data.markup_type',
        Cell: ({ value }) => <span> {value}</span>
      },
      {
        Header: 'Markup Amount ( £ )',
        accessor: 'previous_data.data.markup_amount',
        Cell: ({ value }) => <span>{value}</span>
      },
    ],
    actions: [],
    queryService: getMarkupHistory
  }
}

export default getMarkupHistoryTableMeta;