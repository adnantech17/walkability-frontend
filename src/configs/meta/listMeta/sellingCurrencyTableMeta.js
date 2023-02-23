import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { renderDateTime } from '~/components/table/utils';
import { CURRENCY_CODES } from '~/configs/currencyCodes';
import currencyConversionFields from '~/configs/meta/mutationMeta/currencyConversionFields';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { createSellingCurrencyConversion, getSellingCurrencyHistory } from '~/services/api/queries/settings';
import { getData } from '~/services/storage';


const getSellingCurrencyTableMeta = () => {
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
        Header: 'CONVERSION RATE',
        accessor: 'previous_data.data.to_currency',
        Cell: ({ value }) => <span>1 GBP = {value} {CURRENCY_CODES[getData(STORAGE_KEY_AGENT_COUNTRY)]}</span>
      },
    ],
    actions: [
      <ModalFormOpener key={1}
        submitService={createSellingCurrencyConversion}
        fields={currencyConversionFields}
        heading={'Let’s create a new conversion rate!'}
        openerText='+ New Conversion Rate'
        openerClassName='primaryBtn_sm'
        refreshEvent='refresh_table'
        successMessage='Currency conversion created!'
        doNotReset={true}
      />
    ],
    queryService: getSellingCurrencyHistory
  }
}

export default getSellingCurrencyTableMeta;