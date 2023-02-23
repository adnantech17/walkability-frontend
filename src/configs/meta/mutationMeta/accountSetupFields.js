import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';


const accountSetupFields = [
  {
    className: 'col-12',
    variant: inputVariants.STANDARD,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your Email',
    readOnly: true,
    append: () => <i className='fa fa-envelope'></i>,
  },
  {
    className: 'col-12',
    variant: inputVariants.STANDARD,
    inputType: inputTypes.PASSWORD,
    key: 'password',
    labelText: 'Your Password',
    rules: { required: true },
    append: () => <i className='fa fa-eye-slash'></i>,
  },

  {
    className: 'col-12',
    variant: inputVariants.STANDARD,
    inputType: inputTypes.PASSWORD,
    key: 'confirmPassword',
    labelText: 'Re-enter Password',
    rules: { required: true },
    append: () => <i className='fa fa-eye-slash'></i>,
  },
];


export default accountSetupFields;
