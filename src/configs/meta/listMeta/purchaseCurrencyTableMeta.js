import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { CURRENCY_CODES } from '~/configs/currencyCodes';
import currencyConversionFields from '~/configs/meta/mutationMeta/currencyConversionFields';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { createPurchaseCurrencyConversion, getPurchaseCurrency, getPurchaseCurrencyHistory } from '~/services/api/queries/settings';
import { getData } from '~/services/storage';


const getPurchaseCurrencyTableMeta = () => {
  return {
    columns: [
      {
        Header: 'CONVERSION RATE',
        accessor: 'data.to_currency',
        Cell: ({ value }) => <span>1 GBP = {value} {CURRENCY_CODES[getData(STORAGE_KEY_AGENT_COUNTRY)]}</span>
      },
    ],
    actions: [
      <ModalFormOpener key={1}
        submitService={createPurchaseCurrencyConversion}
        fields={currencyConversionFields}
        heading={'Let’s create a new conversion rate!'}
        openerText='Loading...'
        openerTextKey='text'
        dataLookupQuery={getPurchaseCurrency}
        openerClassName='primaryBtn_sm'
        refreshEvent='refresh_table'
        successMessage='Currency conversion created!'
        doNotReset={true}
      />
    ],
    queryService: getPurchaseCurrencyHistory
  }
}

export default getPurchaseCurrencyTableMeta;