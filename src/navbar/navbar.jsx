import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
export function Navbar() {
  const [isActive, setIsActive] = useState(false); // initialize the state with a value of false

  const handleClick = () => {
    setIsActive(!isActive); // toggle the state value
  };

  return (
    <>
      <div className={isActive ? "menu" : "menu active"}>
        <div className="the-menu">
          <AiOutlineClose onClick={handleClick} size={30} className="close" />

          <ul className="nav-items-1">
            <li className="nav-item-1 added-list"> Model S</li>
            <li className="nav-item-1 added-list">Model 3</li>
            <li className="nav-item-1 added-list">Model X</li>
            <li className="nav-item-1 added-list">Model Y</li>
            <li className="nav-item-1 added-list">Solar Roof</li>
            <li className="nav-item-1 added-list">Solar Panels</li>
            <li className="nav-item-1 added-list">Powerwall</li>
            <li className="nav-item-1"> Existing Inventory</li>
            <li className="nav-item-1">Used Inventory</li>
            <li className="nav-item-1">Trade-In</li>
            <li className="nav-item-1">Demo Drive</li>
            <li className="nav-item-1">Insurance</li>
            <li className="nav-item-1">Cybertruck</li>
            <li className="nav-item-1">Roadster</li>
            <li className="nav-item-1"> Semi</li>
            <li className="nav-item-1">Charging</li>
            <li className="nav-item-1">Commercial Energy</li>
            <li className="nav-item-1">Utilities</li>
            <li className="nav-item-1">Find Us</li>
            <li className="nav-item-1">Support</li>
            <li className="nav-item-1">Investor Relations</li>
          </ul>
        </div>
      </div>
      <div className="nav-container">
        <img src={logo} alt="" width={"120px"} height={"24px"} />
        <ul id="main-navbar" className="nav-items">
          <li className="nav-item"> Model S</li>
          <li className="nav-item">Model 3</li>
          <li className="nav-item">Model X</li>
          <li className="nav-item">Model Y</li>
          <li className="nav-item">Solar Roof</li>
          <li className="nav-item">Solar Panels</li>
          <li className="nav-item">Powerwall</li>
        </ul>
        <ul id="secondry-navbar" className="nav-items">
          <li className="nav-item">Shop</li>
          <li className="nav-item">Account</li>
          <li onClick={handleClick} id="menu" className="nav-item">
            Menu
          </li>
        </ul>
      </div>
    </>
  );
}
