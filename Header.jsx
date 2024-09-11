// components/Header/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Waste Management System</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero"><i className="fa fa-home"></i> Home</a></li>
            <li><a className="nav-link scrollto" href="#about"><i className="fa fa-info-circle" aria-hidden="true"></i> About us</a></li>
            <li><a className="nav-link scrollto" href="phpGmailSMTP/trash.php"><i className="fa fa-trash"></i> Complain</a></li>
            <li><a className="nav-link scrollto" href="adminlogin/welcome.php"><i className="fa fa-edit"></i> Preview Complain</a></li>
            <li><a className="nav-link scrollto" href="#faq"><i className="fa fa-question-circle"></i> FAQ</a></li>
            <li><a className="nav-link scrollto" href="logout-user.php"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;