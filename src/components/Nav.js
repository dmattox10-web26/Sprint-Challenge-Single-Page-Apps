import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand><Link to='/'>Rick and Morty!</Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink to='/list' style={{marginLeft: '2rem'}}>Characters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/search' style={{marginLeft: '2rem'}}>Search</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Navigation