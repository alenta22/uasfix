import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../CartContex';
const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Loka Phone Cell</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/homepage"className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about"className="nav-link">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/barang"className="nav-link">Barang</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/"className="nav-link">Logout</NavLink>
              </NavItem>
              {/*<NavItem>
              <NavLink to="/kelas"className="nav-link">Class</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hooks"className="nav-link">Hook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/useEffect"className="nav-link">Use Effects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/produk" className="nav-link">Produk</NavLink>
              </NavItem>*/}
            </Nav>

          </Collapse>
          </Navbar>
      </div>
      );
    }

export default NavbarComp