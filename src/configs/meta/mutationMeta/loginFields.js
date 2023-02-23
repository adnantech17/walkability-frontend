import Link from 'next/link';
import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { FORGOT_PASSWORD_PATH } from '~/constants/route';




const loginFields = [
  {
    className: 'col-12',
    variant: inputVariants.STANDARD,
    inputType: inputTypes.TEXT,
    key: 'email',
    labelText: 'Your Email',
    rules: { required: true },
    append: () => <i className='fa fa-envelope'></i>,
  },
  {
    className: 'col-12',
    variant: inputVariants.STANDARD,
    inputType: inputTypes.PASSWORD,
    key: 'password',
    labelText: 'Your Password',
    rules: { required: true },
  },
  // {
  //   className: 'col-8 d-inline-block',
  //   variant: inputVariants.PLAIN,
  //   inputType: inputTypes.CHECKBOX,
  //   key: 'remember_me',
  //   labelText: 'Remember me',
  // },
  {
    className: 'col-12 block flex align_right pb-3',
    inputType: inputTypes.CUSTOM,
    render: () => <Link href={{ pathname: FORGOT_PASSWORD_PATH }} ><a className='forgot_password' >Forgot Password?</a></Link>

  },
];


export default loginFields;