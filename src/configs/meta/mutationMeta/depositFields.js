import { CURRENCY_SYMBOLS } from '~/configs/currencySymbols';
import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { getLocalAgentsForDropdown } from '~/services/api/queries/agents';
import { getPaymentMethodsForDropdown } from '~/services/api/queries/settings';
import { getData } from '~/services/storage';

const depositFields = [
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'type',
    labelText: 'Deposit Type',
    rules: { required: true },
    options: [
      { value: 'bank', label: 'Bank' },
      { value: 'bkash', label: 'Bkash' },
      { value: 'nagad', label: 'Nagad' },
      { value: 'paypal', label: 'Paypal for UK' },
      { value: 'rocket', label: 'Rocket fo walkabilityBD' },
    ],
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'cheque_no',
    labelText: 'Cheque No',
    placeholder: 'Enter Cheque No',
    defaultValue: 0.00,
    rules: { required: true },
    dependencies: ['type'],
    onDependencyValueChange: ({ type }, key, { toggleVisibility }) => {
      toggleVisibility('cheque_no', type !== 'bank');
    },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'bank_name',
    labelText: 'Bank Name',
    placeholder: 'Enter Bank Name',
    defaultValue: 0.00,
    rules: { required: true },
    dependencies: ['type'],
    onDependencyValueChange: ({ type }, key, { toggleVisibility }) => {
      toggleVisibility('bank_name', type !== 'bank');
    },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.DATE,
    key: 'issue_date',
    labelText: 'Issue Date',
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'agent_id',
    labelText: 'Select an Agent',
    rules: { required: true },
    lookupQuery: getLocalAgentsForDropdown,
    permissions: ['agent_management__local_agent_list']
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'payment_method_id',
    labelText: 'Deposit In A/C',
    placeholder: 'Select Deposited Bank A/C',
    rules: { required: true },
    lookupQuery: getPaymentMethodsForDropdown,
    dependencies: ['type'],
    onDependencyValueChange: ({ type }, key, { performLookupQuery }) => {
      performLookupQuery?.({ payment_type: type, is_active: true })
    },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.NUMBER,
    key: 'amount',
    labelText: `Amount ( ${CURRENCY_SYMBOLS[getData(STORAGE_KEY_AGENT_COUNTRY)]} )`,
    defaultValue: 0.00,
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.FILE,
    key: 'attachment_url',
    labelText: 'Attachment',
  },
]

export default depositFields;