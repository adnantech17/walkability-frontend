import { Badge } from 'react-bootstrap';
import ActionButton from '~/components/actions/ActionButton';
import RedirectButton from '~/components/actions/RedirectButton';
import { renderAmount } from '~/components/table/utils';
import { AMOUNT_DISPLAY_FORMAT_1 } from '~/configs/format';
import { PERMISSIONS } from '~/configs/permissions';
import { BOOKING_DETAILS_PATH } from '~/constants/route';
import { getBookings, sendBookingReport } from '~/services/api/queries/booking';

const localAgentBookingListTableMeta = () => {

  return {
    columns: [
      {
        Header: 'Booking ID',
        accessor: 'id_guest_name',
        Cell: ({ value }) => value.split(' ')[0]
      },
      {
        Header: 'Local Agency',
        accessor: 'agency_name',
      },
      {
        Header: 'Hotel',
        accessor: 'hotel_name',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <Badge className={value === 'Successful' ? 'success' : value === 'Pending' ? 'warning' : 'danger'}>{value}</Badge>
      },
      {
        Header: 'Issue Date',
        accessor: 'created_date',
      },
      {
        Header: 'Purchase Price',
        accessor: 'country_agent_purchase_price',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1)}</p>
      },
      {
        Header: 'Markup',
        accessor: 'local_agent_markup',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1)}</p>
      },
      {
        Header: 'Sell Price',
        accessor: 'local_agent_purchase_price',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1)}</p>
      },
      {
        Header: 'Net Profit',
        accessor: 'country_agent_profit',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1)}</p>
      },
      {
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues = {}) =>
            <RedirectButton key="seeDetail" pathName={BOOKING_DETAILS_PATH} text="Details" className="submenu_item" query={{ booking_id: `${defaultValues.id}` }} permissions={[PERMISSIONS.BOOKING_MANAGEMENT_BOOK_LIST]} />
          ,
        ]
      }
    ],
    actions: [
      <ActionButton
        key="download_excel"
        className="primaryBtn_sm"
        text="Excel Generate"
        queryParams={{ excel_report: true, limit: '0' }}
        onClick={sendBookingReport}
      />
    ],
    queryService: getBookings
  }
}

export default localAgentBookingListTableMeta;