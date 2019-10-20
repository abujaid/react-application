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
  DropdownItem
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authAction';
class Navegation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: true
    });
  };
  onLogout = () => {
    this.props.logout(this.props.history);
    window.location.href = './login';
  };
  render() {
    const { isAuthenticated, name } = this.props.auth;
    return (
      <div>
        {isAuthenticated ? (
          <Navbar color="primary" light expand="md">
            <NavbarBrand to="/dashboard">Dashboard</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Products
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/add-product">Add New</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/products">Products</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Category</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink to="#" onClick={this.onLogout}>
                    Logout
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/#" className="text-white">
                    Welcome {isAuthenticated.name}
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        ) : (
          <Navbar color="primary" light expand="md">
            <NavbarBrand to="/">Application</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Blog</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Navegation));
