import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';




const forgotPasswordFields = [
  {
    className: 'col-12',
    variant: inputVariants.STANDARD,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your Email',
    rules: { required: true },
    append: () => <i className='fa fa-envelope'></i>,
  },

];


export default forgotPasswordFields;