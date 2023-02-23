import { Badge } from 'react-bootstrap';
import RedirectButton from '~/components/actions/RedirectButton';
import { renderAmount } from '~/components/table/utils';
import { PERMISSIONS } from '~/configs/permissions';
import { BOOKING_DETAILS_PATH } from '~/constants/route';
import { getBookings } from '~/services/api/queries/booking';

const bookingListTableMeta = () => {

  return {
    columns: [
      {
        Header: 'Booking ID',
        accessor: 'id_guest_name',
        Cell: ({ value }) => value.split(' ')[0]
      },
      {
        Header: 'Hotel',
        accessor: 'hotel_name',
      },
      {
        Header: 'Check in/out Date',
        accessor: 'email',
        Cell: (value) => <p>{value.row.original?.check_in} - {value.row.original?.check_out}</p>
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
        Header: 'Price',
        accessor: 'total_cost',
        Cell: ({ value }) => <p>{renderAmount(value)}</p>
      },
      {
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues = {}) =>
            < RedirectButton key="seeDetail" pathName={BOOKING_DETAILS_PATH} text="Details" className="submenu_item" query={{ booking_id: `${defaultValues.id}` }} permissions={[PERMISSIONS.BOOKING_MANAGEMENT_BOOK_LIST]}
            />
          ,
        ]
      }
    ],
    actions: [],
    queryService: getBookings
  }
}

export default bookingListTableMeta;