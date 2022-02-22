import React from "react";
import { Link, useLocation } from "react-router-dom";
import SettingImg from "../../assets/image/settingss.svg";
import ProductImg from "../../assets/image/shopping-ba.svg";
import CartImg from "../../assets/image/shopping-cart.svg";
import History from "../../assets/image/user.svg";
import Dashboardimg from "../../assets/image/dashboard.png";
import Command from "../../assets/image/command.svg";
import { ImgActive, LiBox, NavbarWrapper } from "./style";

import "./style.css";

function Navbar() {
  return (
    <NavbarWrapper>
      <div className="navbar-logo">
        <p>IBS</p>
      </div>
      <div className="nav-navbar">
        <ul className="nav">
          <LiBox className="container">
            <Link to="/" className="link list-item title">
              <img src={Command} />
              <p>Dashboard</p>
            </Link>
          </LiBox>
          <LiBox className="container">
            <Link to="/products" className="link list-item title">
              <img src={ProductImg} />
              <p>Products</p>
            </Link>
          </LiBox>
          <LiBox className="container">
            <Link to="/cart" className="link list-item title">
              <img src={CartImg} />
              <p>Cart</p>
            </Link>
          </LiBox>
          <LiBox className="container">
            <Link to="/history" className="link list-item title">
              <img src={History} />
              <p>History</p>
            </Link>
          </LiBox>
          <LiBox className="container">
            <Link to="/settings" className="link list-item title">
              <img src={SettingImg} />
              <p>Setting</p>
            </Link>
          </LiBox>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
