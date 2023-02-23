import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { COUNTRY_CODES } from '~/configs/countryCodes';

const updatableUserMutationFields = [
  {
    className: 'col-6 d-inline-block pe-3',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'first_name',
    labelText: 'First Name',
    rules: { required: true },
  },
  {
    className: 'col-6 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'last_name',
    labelText: 'Last Name',
    rules: { required: true },
  },
  {
    className: 'col-2 d-inline-block pe-2',
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
    readOnly: true,

  },
  {
    className: 'col-5 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'company.country',
    labelText: 'Country',
    rules: { required: true },
    readOnly: true,

  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your email',
    rules: { required: true },
    // readOnly: true,
    append: () => {
      return (<span>@yourmail.com</span>)
    },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'status',
    labelText: 'Status',
    rules: { required: true },
    placeholder: 'Select Status',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ],
  },
]

export default updatableUserMutationFields;