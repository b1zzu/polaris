import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "shards-react";
import logo from "../logo-white.svg";
import { useTranslation } from "react-i18next";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const { t } = useTranslation();

  const [collapse, setCollapse] = useState<Boolean>();

  const toggleNavbar = () => setCollapse(!collapse)

  return (
    <Navbar type="dark" expand="md">
      <NavbarBrand tag={Link} to="/">
        <img src={logo} className="logo mr-2" alt="" />
        Polaris
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={collapse} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink active tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/products">
              {t("Products")}
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
          <NavLink tag={Link} to="/cart">
            {t("Cart")}
          </NavLink>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
