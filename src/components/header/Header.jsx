import React from "react";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="header__logo-img" />
        </div>
        <div className="header__login">
          <nav className="header__auth">
            <ul className="header__auth-list">
              <li className="header__auth-item">
                <Link to="/signin" className="header__auth-link1">
                  Sign in
                </Link>
                <Link to="/signup" className="header__auth-link2">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
