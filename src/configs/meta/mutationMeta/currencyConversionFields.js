import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { CURRENCY_CODES } from '~/configs/currencyCodes';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { getData } from '~/services/storage';

const currencyConvertionFields = [
  {
    className: 'col-4 d-inline-block',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'from_currency',
    labelText: 'From Currency',
    rules: { required: true },
    defaultValue: '1 GBP',
    readOnly: true,
  },
  {
    className: 'col-2 d-inline-block mt-4 pt-3 px-2 text-center',
    inputType: inputTypes.CUSTOM,
    render: () => (<h2>=</h2>)
  },
  {
    className: 'col-4 d-inline-block',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.NUMBER,
    key: 'data.to_currency',
    labelText: 'To Currency',
    rules: { required: true },
  },
  {
    className: 'col-2 d-inline-block mt-4 pt-3 px-2 text-center',
    inputType: inputTypes.CUSTOM,
    render: () => (<h2>{CURRENCY_CODES[getData(STORAGE_KEY_AGENT_COUNTRY)]}</h2>)
  },
]

export default currencyConvertionFields;