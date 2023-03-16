import { Button, Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavbarItem from '~/components/Layout/NavbarItem';
import useAuthModal from '~/hooks/useAuthModal';

function NavbarComponent() {
  const { toggleModal } = useAuthModal();
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#222222', color: '#F8F8F8', height: '10vh' }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#F8F8F8' }}>
          Walkability
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ color: '#F8F8F8' }}>
          <Nav className="ms-auto">
            <NavbarItem href="about" name="About"></NavbarItem>
            <NavbarItem href="documentation" name="Documentation"></NavbarItem>
            <NavbarItem href="data-entry" name="Data Entry"></NavbarItem>
            {/* <NavbarItem href="login" name="Login"></NavbarItem> */}
            <Button onClick={() => toggleModal()}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
