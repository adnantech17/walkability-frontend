import { useContext } from 'react';
import { AuthModalContext } from '~/contexts/AuthModalContext';
const useAuthModal = () => useContext(AuthModalContext);
export default useAuthModal;
