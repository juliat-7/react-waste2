// components/About/About.js
import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              The 'WASTE MANAGEMENT SYSTEM' is a web application aimed to provide a
              digital way of complaining about the concerns of general citizens to their
              relative municipalities.
            </p>
            <ul>
              <li>Complaining about waste or garbage problems near their locality.</li>
              <li>See their complain Report and check if the work is done or not.</li>
              <li>People can take different ideas regarding recycling of waste through this website.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Complaining about the waste problem encountered everyday to municipality
              is a hefty process and waste management aims to make this process easier.
              With a simple handheld device with access to internet, users can use this
              platform to complain their concerns to municipality. The automated system
              will redirect the complains. The municipality admins at the receiving
              side can acknowledge the reports which lets the users know whether their
              complain is addressed or not.
            </p>
            <a href="" className="btn-learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;