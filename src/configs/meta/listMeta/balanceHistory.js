import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { getDepositList, createDeposit } from '~/services/api/queries/deposit';
import depositFields from '~/configs/meta/mutationMeta/depositFields';
import { PERMISSIONS } from '~/configs/permissions';
import RedirectButton from '~/components/actions/RedirectButton';
import { DEPOSIT_HISTORY_PATH } from '~/constants/route';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { getData } from '~/services/storage';
import { CURRENCY_SYMBOLS } from '~/configs/currencySymbols';


const getBalanceHistoryMeta = () => {
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
        Header: `Amount (${CURRENCY_SYMBOLS[getData(STORAGE_KEY_AGENT_COUNTRY)]})`,
        accessor: 'amount'
      },
      {
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues = {}) =>
            <RedirectButton key="depositHistory" pathName={DEPOSIT_HISTORY_PATH} text="Details" className="submenu_item" query={{ deposit_id: `${defaultValues.id}` }} permissions={[PERMISSIONS.BALANCE_MANAGEMENT_DEPOSIT_HISTORY_LIST]} />
          ,
        ]
      },
    ],
    actions: [<ModalFormOpener
      key={1}
      submitService={createDeposit}
      fields={depositFields}
      heading={'Create a New Deposit'}
      openerText='+ New Deposit'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      size="lg"
      successMessage='Deposit created Successfully!'
      doNotReset={true}
      permissions={[PERMISSIONS.BALANCE_MANAGEMENT_DEPOSIT_CREATE]}
    />],
    queryService: getDepositList
  }
}

export default getBalanceHistoryMeta;



