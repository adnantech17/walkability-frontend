import React from 'react'
import { Nav } from 'react-bootstrap'

const NavbarItem = ({ name, href }) => {
  return (
    <Nav.Link href={href} className="nav-item">{name}</Nav.Link>
  )
}

export default NavbarItem