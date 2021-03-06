
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

export default class Header extends React.Component {
     constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    
     <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">Header</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
         
        </Navbar>
      </div>

    );
  }
}
