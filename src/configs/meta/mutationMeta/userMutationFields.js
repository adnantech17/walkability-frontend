import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { COUNTRY_CODES } from '~/configs/countryCodes';
import { getData } from '~/services/storage';
import { STORAGE_KEY_AGENT_COUNTRY } from '~/constants/localstorage';
import { countryNames } from '~/configs/countryNames';
import { roleApplicableLookupQuery } from '~/services/api/queries/userManagement';

const userMutationFields = [
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
    defaultValue: COUNTRY_CODES[getData(STORAGE_KEY_AGENT_COUNTRY)],
    readOnly: true,
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
    inputType: inputTypes.TEXT,
    key: 'country',
    labelText: 'Country',
    defaultValue: countryNames[getData(STORAGE_KEY_AGENT_COUNTRY)],
    readOnly: true,
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
    className: 'col-6 d-inline-block pe-3',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.PASSWORD,
    key: 'password',
    labelText: 'Password',
    rules: { required: true },
    // append: () => {
    //   return (<i className='fa fa-eye'></i>)
    // },
  },
  {
    className: 'col-6 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.PASSWORD,
    key: 'confirm_password',
    labelText: 'Confirm Password',
    rules: { required: true },
    // append: () => {
    //   return (<i className='fa fa-eye-slash'></i>)
    // },
  },

  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'role',
    labelText: 'User Role',
    rules: { required: true },
    placeholder: 'Select Role',
    lookupQuery: roleApplicableLookupQuery
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.CHECKBOX,
    key: 'agree_with_terms',
    labelText: 'I agree with',
    render: () => <a href='#' className="link"> Terms & Conditions Policy</a>,
    rules: { required: true }
  },
]

export default userMutationFields;