import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

const changePasswordFields = [
  {
    className: 'col-12 d-inline-block pe-3',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.PASSWORD,
    key: 'old_password',
    labelText: 'Old Password',
    rules: { required: true },
  },
  {
    className: 'col-12 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.PASSWORD,
    key: 'password',
    labelText: 'New Password',
    rules: { required: true },
  },


]

export default changePasswordFields;