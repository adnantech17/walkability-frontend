import 'bootstrap/dist/css/bootstrap.css';
import AuthModal from '~/components/authModals/AuthModal';
import NavbarComponent from '~/components/Layout/Navbar';
import { AuthModalProvider } from '~/contexts/AuthModalContext';
import '~/styles/index.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <AuthModalProvider>
        <NavbarComponent />
        <AuthModal />
        <Component {...pageProps} />
      </AuthModalProvider>
    </div>
  );
};
export default MyApp;
