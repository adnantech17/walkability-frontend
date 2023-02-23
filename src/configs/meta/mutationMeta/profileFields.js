import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

const profileFields = [
  {
    className: 'col-5 pb-3 pe-5 d-inline-block',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'first_name',
    labelText: 'First Name',
    rules: { required: true },
    placeholder: 'Enter First Name',
  },
  {
    className: 'col-5 pb-3 d-inline-block',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'last_name',
    labelText: 'Last Name',
    rules: { required: true },
    placeholder: 'Enter Last Name',
  },

  {
    className: 'col-5 pb-3 pe-5 d-inline-block',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your Email',
    rules: { required: true, },
    // readOnly: true,
  },

  {
    className: 'col-5 pb-3 d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'phone_number',
    labelText: 'Phone Number',
    rules: { required: true, },
    readOnly: true,

  },
  {
    className: 'col-5 pb-3 pe-5 d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'user_type',
    labelText: 'User Type',
    rules: { required: true, },
    readOnly: true,
  },

  {
    className: 'col-5 pb-3  d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'status',
    labelText: 'Status',
    rules: { required: true, },
    readOnly: true,
  },

  {
    className: 'col-5 pb-3 pe-5 d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'companyName',
    labelText: 'Company Name',
    rules: { required: true, },
    readOnly: true,
  },

  {
    className: 'col-5 pb-3 d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'country',
    labelText: 'Country',
    rules: { required: true, },
    readOnly: true,

  },
  {
    className: 'col-5 pb-3 d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'creditLimit',
    labelText: 'Credit Limit',
    rules: { required: true, },
    readOnly: true,

  },
  {
    className: 'col-5 pb-3 d-inline-block',
    variant: inputVariants.PLAIN,
    key: 'role',
    labelText: 'User Role',
    rules: { required: true, },
    readOnly: true,

  },
  {
    className: 'col-10 pb-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.FILE,
    key: 'attachment_url',
    labelText: 'Profile image :',
  },
];

export default profileFields;