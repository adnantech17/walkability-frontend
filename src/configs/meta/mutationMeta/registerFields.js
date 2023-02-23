import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { COUNTRY_CODES } from '~/configs/countryCodes';
import { getCountries } from '~/services/api/queries/countries';

const registerFields = [
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'company',
    labelText: 'Company Name',
    defaultValue: 'Arbree Solutions',
    rules: { required: true },
  },
  {
    className: 'col-5 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'country',
    labelText: 'Country',
    defaultValue: 'pk',
    rules: { required: true },
    lookupQuery: getCountries,
    // options: [
    //   { value: 'bangladesh', label: 'Bangladesh' },
    //   { value: 'india', label: 'India' },
    //   { value: 'japan', label: 'Japan' },
    //   { value: 'sri_lanka', label: 'Sri Lanka' },
    //   { value: 'canada', label: 'Canada' },
    //   { value: 'uk', label: 'United Kingdom' },
    //   { value: 'us', label: 'United States' },
    // ],
  },
  {
    className: 'col-2 d-inline-block px-2',
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
    className: 'col-5 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'number',
    labelText: 'Phone Number',
    rules: { required: true, },
  },
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your email',
    rules: { required: true, },
    dependencies: ['country_code'],
    append: () => {
      return (<span>@youmail.com</span>)
    },
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXTAREA,
    key: 'address',
    labelText: 'Your address',
    placeholder: 'Hello, your address...',
    rules: { required: true },
    dependencies: ['country'],
    onDependencyValueChange: ({ country }, key, { toggleVisibility }) => {
      toggleVisibility('address', country === 'pk');
    },
  },

  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.FILE,
    key: 'image',
    labelText: 'Attachment/Legal Documents',
    rules: { required: true },
    multiple: true,
    accept: 'image/png, image/jpeg',
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.CHECKBOX,
    key: 'agree',
    labelText: 'I agree with',
    render: () => <a href='#' className="link"> Terms & Conditions</a>,
    rules: { required: true },
  },
  {
    className: 'col-12',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.LIST_INPUT,
    key: 'list',
    labelText: 'I agree with',
    rules: { required: true },
    fields: [
      {
        className: 'col-5 d-inline-block',
        variant: inputVariants.OUTLINED,
        inputType: inputTypes.SELECT,
        key: 'country',
        labelText: 'Country',
        defaultValue: 'pk',
        rules: { required: true },
        lookupQuery: getCountries,
      },
    ]
  },
];

export default registerFields;