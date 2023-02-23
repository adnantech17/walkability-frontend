import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { COUNTRY_CODES } from '~/configs/countryCodes';
import { getCountries } from '~/services/api/queries/countries';

const countryAgentFields = [
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'name',
    labelText: 'Travel Agency Name',
    rules: { required: true },
  },
  {
    className: 'col-2 d-inline-block pe-3',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'country_code',
    defaultValue: '+88',
    readOnly: true,
    dependencies: ['country'],
    onDependencyValueChange: ({ country }, key, { setValue }) => {
      setValue('country_code', COUNTRY_CODES[country])
    },
  },
  {
    className: 'col-5 d-inline-block pe-3',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'phone_number',
    labelText: 'Phone Number',
    rules: { required: true },
  },
  {
    className: 'col-5 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'country',
    labelText: 'Country',
    rules: { required: true },
    options: getCountries(),
    defaultValue: 'bd'
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your email',
    rules: { required: true },
    append: () => {
      return (<span>@yourmail.com</span>)
    },
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXTAREA,
    key: 'address',
    labelText: 'Address',
    placeholder: 'Write your address here',
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'unique_identifier',
    labelText: 'Agent ID',
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'payment_policy',
    labelText: 'Payment Policy for Local Agents',
    rules: { required: true },
    options: [
      { value: 'prepaid', label: 'Prepaid' },
      { value: 'credit', label: 'Credit' },
    ],
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'status',
    labelText: 'Agent Status',
    rules: { required: true },
    options: [
      { value: 'active', label: 'Active' },
      { value: 'in_active', label: 'Inactive' },
    ],
    onlyEditable: true,
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.CHECKBOX,
    key: 'agree_with_terms',
    labelText: 'I agree with',
    render: () => <a href='#' className="link"> Terms & Conditions Policy</a>,
    rules: { required: true },
  },
]

export default countryAgentFields;