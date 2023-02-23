import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

const paymentMethodFields = [
  // {
  //   className: 'col-12',
  //   variant: inputVariants.OUTLINED,
  //   inputType: inputTypes.SELECT,
  //   key: 'account_id',
  //   labelText: 'Account',
  //   rules: { required: true },
  //   request: getLocalAgentsForDropdown
  // },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'payment_type',
    labelText: 'Payment Type',
    rules: { required: true },
    options: [
      { value: 'bank', label: 'Bank' },
      { value: 'paypal_for_uk', label: 'Paypal for UK' },
      { value: 'bkash', label: 'Bkash' },
      { value: 'nagad', label: 'Nagad' },
      { value: 'rocket', label: 'Rocket' },
    ],
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'account_name',
    labelText: 'Account Name',
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'account_number',
    labelText: 'Account Number',
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.CHECKBOX,
    key: 'is_active',
    labelText: 'Is Active',
  },
]

export default paymentMethodFields;