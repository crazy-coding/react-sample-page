import React from "react";
import classnames from "classnames";
import { connect } from 'react-redux'
import * as actionTypes from "store/actions";
import CONSTANT from "store/constant";

// reactstrap components
import {
  Container,
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
  DropdownItem,
  NavbarText,
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  componentDidMount() {
    
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Navbar expand="lg" className="fixed-top list-unstyled" >
        <Container className="navbar-body">
          <NavbarBrand href="/">
            <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="28.0909" y="7.95349" width="20.1818" height="20.1818" rx="10.0909" fill="#B4BDFF"/>
            <rect x="13.0908" y="3.34888" width="29.4545" height="29.4545" rx="14.7273" fill="#7282F5"/>
            <rect width="36" height="36" rx="18" fill="#3C50E0"/>
            </svg>
          </NavbarBrand>
          <UncontrolledDropdown className="pull-right language" nav>
            <DropdownToggle nav>
              {this.props.lang.name}
              <i className="fa fa-angle-down ml-2" ></i>
            </DropdownToggle>
            <DropdownMenu right>
              { CONSTANT.LAGUAGES.map((value, index) => {
                return <DropdownItem key={value.key} onClick={() => this.props.onChangeLanguage(value)}>
                    {value.name}
                  </DropdownItem>
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
          <div
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
            onClick={this.toggleCollapse}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="11" width="22" height="3" rx="1.5" fill="black"/>
            <rect x="3" y="18" width="27" height="3" rx="1.5" fill="black"/>
            </svg>
          </div>
          <Collapse className="justify-content-center" isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/">
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                  Blockchain
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                  Token
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                  Roadmap
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFullScreen: () => dispatch({ type: actionTypes.FULL_SCREEN }),
      onChangeLanguage: (key) => dispatch({ type: actionTypes.LANGUAGE, lang: key })
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)