import { createContext, useState } from 'react';

export const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <AuthModalContext.Provider value={{ toggleModal, setShowModal, showModal }}>
      {children}
    </AuthModalContext.Provider>
  );
};
