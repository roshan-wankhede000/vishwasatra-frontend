import React from "react";
import logo1 from '../assets/logo1.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <a className="navbar-brand" href="#">
          <img
            src={logo1}
            alt="logo"
            className="logo-img"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amenities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Price Plan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="d-block d-lg-none">
              <button className="enquiry-btn">Enquiry Now</button>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button className="enquiry-btn">Enquiry Now</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;