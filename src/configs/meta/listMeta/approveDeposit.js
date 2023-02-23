import ActionButton from '~/components/actions/ActionButton';
import { PERMISSIONS } from '~/configs/permissions';
import { getDepositList, updateDeposit } from '~/services/api/queries/deposit';

const getApproveDeposit = () => {
  return {
    columns: [
      {
        Header: 'Deposit Date',
        accessor: 'issue_date'
      },
      {
        Header: 'Deposit Type',
        accessor: 'type',
      },
      {
        Header: 'Agency Name',
        accessor: 'agent',
        Cell: ({ value }) => {
          return value?.name
        }
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <p className={value}>{value}</p>
      },
      {
        Header: 'Amount(BDT)',
        accessor: 'amount'
      },
      {
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues = {}, hideActions) =>
            <ActionButton key="approve" disabled={defaultValues.status === 'approved'} refreshEvent='refresh_table' className="submenu_item" text="Approve" data={{ id: defaultValues.id, status: 'approved' }} onClick={updateDeposit} onClose={hideActions} permissions={[PERMISSIONS.BALANCE_MANAGEMENT_DEPOSIT_APPROVE]} />
          ,

          (defaultValues = {}, hideActions) =>
            <ActionButton key="reject" disabled={defaultValues.status === 'rejected'} refreshEvent='refresh_table' className="submenu_item" text="Reject" data={{ id: defaultValues.id, status: 'rejected' }} onClick={updateDeposit} onClose={hideActions} />
          ,
        ]
      },
    ],
    actions: [],
    queryService: getDepositList
  }
}

export default getApproveDeposit;