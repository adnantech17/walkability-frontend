import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from '~/components/Layout/Navbar';
import '~/styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavbarComponent />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp