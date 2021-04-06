import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import logo from "../logo-white.svg";
import { useTranslation } from "react-i18next";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const { t } = useTranslation();

  return (
    <Navbar type="dark" expand="md">
      <NavbarBrand tag={Link} to="/">
        <img src={logo} className="logo mr-2" alt="" />
        Polaris
      </NavbarBrand>
      <Nav navbar>
        <NavItem>
            <NavLink active tag={Link} to="/">
              Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} to="/products">{t("Products")}</NavLink>
        </NavItem>
      </Nav>
      <Nav navbar className="ml-auto">
        <NavLink tag={Link} to="/cart">{t('Cart')}</NavLink>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
