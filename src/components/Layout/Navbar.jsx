import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavbarItem from '~/components/Layout/NavbarItem';
import { AuthContext } from '~/contexts/AuthContext';
import useAuthModal from '~/hooks/useAuthModal';

function NavbarComponent() {
  const { toggleModal } = useAuthModal();
  const { userData, logoutUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      const res = await logoutUser();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#222222', color: '#F8F8F8', height: '10vh' }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ color: '#F8F8F8' }}>
          Walkability
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color: '#F8F8F8' }}>
          <Nav className="ms-auto">
            <NavbarItem href="about" name="About"></NavbarItem>
            <NavbarItem href="documentation" name="Documentation"></NavbarItem>
            <NavbarItem href="data-entry" name="Data Entry"></NavbarItem>
            {/* <NavbarItem href="login" name="Login"></NavbarItem> */}
            {userData?.email ? (
              <span onClick={logout}>
                <NavbarItem name="Logout"></NavbarItem>
              </span>
            ) : (
              <span onClick={() => toggleModal()}>
                <NavbarItem name="Login"></NavbarItem>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
