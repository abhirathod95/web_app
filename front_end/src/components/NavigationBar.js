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
  DropdownItem } from 'reactstrap';
  import logo from '../assets/logo.png'

export default class NavigationBar extends React.Component {
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
    var pages = [
      {"name" : "Roadmap", "url" : "/roadmap"},
      {"name" : "Whitepaper", "url" : "/whitepaper"},
      {"name" : "FAQ", "url" : "/faq"},
      {"name" : "About Us", "url" : "/aboutus"}
    ]

    var navLinkPages = pages.map(function(page){
      return <NavLink href={page.url} className="mb-0 h3">{page.name}</NavLink>
    })

    return (
      <div>
        <Navbar color="faded" light expand="lg" fixed="true">
          <NavbarBrand href="/">
            <img height="50%" width="50%" src={logo} alt="logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar> {navLinkPages} </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}