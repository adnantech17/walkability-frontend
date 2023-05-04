import 'bootstrap/dist/css/bootstrap.css';
import AuthModal from '~/components/authModal/AuthModal';
import NavbarComponent from '~/components/Layout/Navbar';
import { AuthContextProvider } from '~/contexts/AuthContext';
import { AuthModalProvider } from '~/contexts/AuthModalContext';
import '~/styles/index.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <AuthModalProvider>
        <AuthContextProvider>
          <NavbarComponent />
          <AuthModal />
          <Component {...pageProps} />
        </AuthContextProvider>
      </AuthModalProvider>
    </div>
  );
};
export default MyApp;
