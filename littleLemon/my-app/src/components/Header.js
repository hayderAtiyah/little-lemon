import logo from "../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <div className="nav-links">
        <Link to="/" className="nav-Link">
          {" "}
          Home{" "}
        </Link>
        <Link to="/about" className="nav-Link">
          {" "}
          About{" "}
        </Link>
        <Link to="/menu" className="nav-Link">
          {" "}
          Menu{" "}
        </Link>
        <Link to="/booking" className="nav-Link">
          {" "}
          Book{" "}
        </Link>
        <Link to="/contact" className="nav-Link">
          {" "}
          Contact{" "}
        </Link>
      </div>
    </header>
  );
}
