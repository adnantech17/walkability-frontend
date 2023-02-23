import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

export const paymentMethodFilterMeta = [
  {
    className: 'status_dropdown col-lg-8',
    key: 'payment_type',
    defaultValue: '',
    labelText: 'Select Payment Method',
    inputType: inputTypes.SELECT,
    variant: inputVariants.PLAIN_SM,
    options: [
      { value: 'bank', label: 'Bank' },
      { value: 'paypal_for_uk', label: 'Paypal for UK' },
      { value: 'bkash', label: 'Bkash' },
      { value: 'nagad', label: 'Nagad' },
      { value: 'rocket', label: 'Rocket' },
    ]
  },
];
