// import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useAuthModal from '~/hooks/useAuthModal';
import styles from './AuthModal.module.scss';

const AuthModal = () => {
  const { showModal, toggleModal } = useAuthModal();
  // const [authType, setAuthType] = useState('login'); // login or register
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
            <div className={styles['input-elements']}>
              <div>
                <label>Email</label>
                <input type="email"></input>
              </div>
              <div>
                <label>Password</label>
                <input type="password"></input>
              </div>
              <button type="button" className={styles['btn-forgot']}>
                Forgot password
              </button>
            </div>
            <button className={styles['btn-submit']}>Login</button>
            <button type="button" className={styles['btn-switch-register']}>
              {`Don't have an account? Create one`}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
