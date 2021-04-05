import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from "shards-react";
import logo from "./logo-white.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <div className="landing d-flex justify-content-center flex-column">
      <Container>
        <Navbar type="dark" expand="md">
          <NavbarBrand href="#">
            <img src={logo} className="logo mr-2" alt=""/>
            Polaris
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink active href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Store</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavLink>Cart</NavLink>
          </Nav>
        </Navbar>
      </Container>
      <div className="inner-wrapper mt-auto mb-auto container">
          <div className="row">
            <div className="col-md-7">
                <h1 className="welcome-heading display-4 text-white">Gelateria Polaris</h1>
                <p className="text-white">dal 1989</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
