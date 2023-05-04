import React from 'react';
import { Nav } from 'react-bootstrap';

const NavbarItem = ({ name, href, className }) => {
  return (
    <Nav.Link href={href} className={`nav-item ${className}`}>
      {name}
    </Nav.Link>
  );
};

export default NavbarItem;
