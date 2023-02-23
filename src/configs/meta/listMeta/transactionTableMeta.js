import { getTransactionList } from '~/services/api/queries/deposit';

const getTransactions = () => {
  return {
    columns: [
      {
        Header: 'Type',
        accessor: 'type'
      },
      {
        Header: 'Deposit Type',
        accessor: 'deposit',
        Cell: ({ value }) => <span> {value?.type || '-'}</span>
      },
      {
        Header: 'Agent Name',
        accessor: 'agent.name'
      },
      {
        Header: 'Payment Method Name',
        accessor: 'payment_method.account_name',
        Cell: ({ value }) => <span> {value || '-'}</span>
      },
      {
        Header: 'Booking ID',
        accessor: 'booking.booking_number',
        Cell: ({ value }) => <span> {value || '-'}</span>
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ value }) => <p>{value.toFixed(2)}</p>
      },
      {
        Header: 'Balance',
        accessor: 'balance',
        Cell: ({ value }) => <p>{value.toFixed(2)}</p>
      },
      // {
      //   Header: 'Deposit ID',
      //   accessor: 'deposit_id',
      //   Cell: ({ value }) => <span> {value || '-'}</span>
      // },
    ],
    actions: [],
    queryService: getTransactionList
  }
}

export default getTransactions;