import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useAuthModal from '~/hooks/useAuthModal';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './AuthModal.module.scss';
import { AuthContext } from '~/contexts/AuthContext';
import { register as registerUser } from '~/services/query/user';

const AuthModal = () => {
  const { showModal, toggleModal } = useAuthModal();
  const [authType, setAuthType] = useState('login'); // login or register

  const toggleAuthType = () => {
    if (authType == 'login') {
      setAuthType('register');
    } else {
      setAuthType('login');
    }
  };

  return (
    <>
      <Modal
        contentClassName={styles['modal-content']}
        dialogClassName={styles['modal-dialog']}
        centered
        show={showModal}
        onHide={toggleModal}
      >
        <Modal.Body>
          <form className={styles['form']}>
            <div className={styles['title']}>Haata.ai</div>
            {authType == 'login' ? (
              <Login toggleAuthType={toggleAuthType} />
            ) : (
              <Register toggleAuthType={toggleAuthType} />
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;

const LoginSchema = z.object({
  email: z.string().email({ message: 'Email not valid' }),
  password: z.string().min(1, { message: 'Please provide password' }),
});

const Login = ({ toggleAuthType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const { loginToAccount } = useContext(AuthContext);
  const { toggleModal } = useAuthModal();

  const onSubmit = async (val) => {
    try {
      const res = await loginToAccount(val);
      console.log(res);
      toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles['input-element-group']}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register('email')}></input>
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password')}></input>
          <span>{errors.password?.message}</span>
        </div>
        <button type="button" className={styles['btn-forgot']}>
          Forgot password
        </button>
      </div>
      <button onClick={handleSubmit(onSubmit)} className={styles['btn-submit']}>
        Login
      </button>
      <button
        type="button"
        onClick={toggleAuthType}
        className={styles['btn-switch-register']}
      >
        {"Don't have an account? Create one"}
      </button>
    </>
  );
};

const registerSchema = z
  .object({
    user_name: z.string({ message: 'Enter your name.' }),
    email: z.string().email({ message: 'Email not valid' }),
    password: z
      .string()
      .min(6, { message: 'Password length must be at least 6' }),
    confirmPassword: z.string(),
    date_of_birth: z
      .string()
      .refine(
        (dob) =>
          /^(19\d{2}|20\d{2})-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/.test(
            dob
          ),
        { message: 'Not a valid date' }
      ),
    gender: z
      .union([
        z.string().nullish(),
        z.literal('male'),
        z.literal('female'),
        z.literal('others'),
      ])
      .refine(
        (gender) => {
          if (!gender) return false;
          return (
            gender === 'female' || gender === 'male' || gender === 'others'
          );
        },
        { message: 'Please provide your gender' }
      ),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const Register = ({ toggleAuthType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { toggleModal } = useAuthModal();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await registerUser(data);
      console.log(res);
      toggleAuthType();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles['input-element-group']}>
        <div>
          <label htmlFor={'user_name'}>Name</label>
          <input type="text" {...register('user_name')}></input>
          <span>{errors.user_name?.message}</span>
        </div>
        <div>
          <label htmlFor={'email'}>Email</label>
          <input type="email" {...register('email')}></input>
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password')}></input>
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" {...register('confirmPassword')}></input>
          <span>{errors.confirmPassword?.message}</span>
        </div>
        <div>
          <label htmlFor="date_of_birth">Date of birth</label>
          <input type="date" {...register('date_of_birth')}></input>
          <span>{errors.date_of_birth?.message}</span>
        </div>
        <div>
          <div className={styles['input-gender']}>
            <label htmlFor="gender">Gender:</label>
            <div>
              <input
                type="radio"
                value={'male'}
                {...register('gender')}
              ></input>
              <label htmlFor="Male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                value={'female'}
                {...register('gender')}
              ></input>
              <label htmlFor="Female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                value={'others'}
                {...register('gender')}
              ></input>
              <label htmlFor="Others">Others</label>
            </div>
          </div>
          <span>{errors.gender?.message}</span>
        </div>
      </div>
      <button onClick={handleSubmit(onSubmit)} className={styles['btn-submit']}>
        Register
      </button>
      <button
        type="button"
        onClick={toggleAuthType}
        className={styles['btn-switch-register']}
      >
        {'Already have an account? Login'}
      </button>
    </>
  );
};
