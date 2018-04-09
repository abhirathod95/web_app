import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

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
    var navLinkPages = this.props.pages.map(function(page){
      if (page.name === "Home") {
        return null
      } else {
        return <NavLink key={page.name} className="h3" tag={Link} to={page.url}>{page.name}</NavLink>
      }
    })

    return (
      <div>
        <Navbar light expand="lg" sticky-top="true">
          <NavbarBrand tag={Link} to="/">
            <img width="200" height="50" src={logo} alt="logo"/>
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