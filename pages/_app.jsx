import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from '~/components/Layout/Navbar';
import { AuthModalProvider } from '~/contexts/AuthModalContext';
import '~/styles/index.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <AuthModalProvider>
        <NavbarComponent />
        <Component {...pageProps} />
      </AuthModalProvider>
    </div>
  );
};
export default MyApp;
