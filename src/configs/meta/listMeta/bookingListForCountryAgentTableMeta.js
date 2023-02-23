import { Badge } from 'react-bootstrap';
import ActionButton from '~/components/actions/ActionButton';
import RedirectButton from '~/components/actions/RedirectButton';
import { renderAmount } from '~/components/table/utils';
import { AMOUNT_DISPLAY_FORMAT_1 } from '~/configs/format';
import { PERMISSIONS } from '~/configs/permissions';
import { BOOKING_DETAILS_PATH } from '~/constants/route';
import { getBookings, sendBookingReport } from '~/services/api/queries/booking';

const bookingListForCountryAgentTableMeta = () => {

  return {
    columns: [
      {
        Header: 'Booking ID',
        accessor: 'id_guest_name',
        Cell: ({ value }) => value.split(' ')[0]
      },
      {
        Header: 'Local agency',
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
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1, 'uk')}</p>
      },
      {
        Header: 'Purchase Conversion Rate',
        accessor: 'country_agent_purchase_conversion_rate',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1, 'uk')}</p>
      },
      {
        Header: 'Total Purchase Price',
        accessor: 'country_agent_purchase_convert_price',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1)}</p>
      },
      {
        Header: 'Markup',
        accessor: 'local_agent_markup',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1, 'uk')}</p>
      },
      {
        Header: 'Sale Conversion Rate',
        accessor: 'conversion_rate',
        Cell: ({ value }) => <p>{renderAmount(value, AMOUNT_DISPLAY_FORMAT_1)}</p>
      },
      {
        Header: 'Total Sale Price',
        accessor: 'total_cost',
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

export default bookingListForCountryAgentTableMeta;