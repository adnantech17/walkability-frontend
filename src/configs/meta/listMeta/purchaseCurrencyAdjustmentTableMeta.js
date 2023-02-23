import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { renderDate } from '~/components/table/utils';
import { CURRENCY_CODES } from '~/configs/currencyCodes';
import purchaseCurrencyAdjustmentFields from '~/configs/meta/mutationMeta/purchaseCurrencyAdjustmentFields';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { createPurchaseCurrencyAdjustment, getPurchaseAdjustmentHistory } from '~/services/api/queries/settings';
import { getData } from '~/services/storage';


const getPurchaseCurrencyAdjustmentTableMeta = () => {
  return {
    columns: [
      {
        Header: 'FROM DATE',
        accessor: 'current_data.data.from_date',
        Cell: ({ value }) => renderDate(value)
      },
      {
        Header: 'TO DATE',
        accessor: 'current_data.data.to_date',
        Cell: ({ value }) => {
          return !value ? 'Continued' : renderDate(value)
        }
      },
      {
        Header: 'CONVERSION RATE',
        accessor: 'current_data.data.to_currency',
        Cell: ({ value }) => <span>1 GBP = {value} {CURRENCY_CODES[getData(STORAGE_KEY_AGENT_COUNTRY)]}</span>
      },
    ],
    actions: [
      <ModalFormOpener key={1}
        submitService={createPurchaseCurrencyAdjustment}
        fields={purchaseCurrencyAdjustmentFields}
        heading={'Let’s add a new adjustment rate!'}
        openerText='+ New Adjustment Rate'
        openerClassName='primaryBtn_sm'
        refreshEvent='refresh_table'
        successMessage='New Adjustment Rate Added!'
        doNotReset={true}
      />
    ],
    queryService: getPurchaseAdjustmentHistory
  }
}

export default getPurchaseCurrencyAdjustmentTableMeta;