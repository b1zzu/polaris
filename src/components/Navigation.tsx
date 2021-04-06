import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import logo from "../logo-white.svg";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

function Navigation() {
  const { t } = useTranslation();

  return (
    <Navbar type="dark" expand="md">
      <NavbarBrand href="#">
        <img src={logo} className="logo mr-2" alt="" />
        Polaris
      </NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink active href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">{t("Store")}</NavLink>
        </NavItem>
      </Nav>
      <Nav navbar className="ml-auto">
        <NavLink>Cart</NavLink>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
