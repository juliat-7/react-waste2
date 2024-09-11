// components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logo from "./assets/img/logo.png"

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                <img src={logo} alt="Logo" style={{ width: '80px', height: '60px' }} />
              </h3>
              <p>
                Mahendranagar<br />
                Kanchanpur, Sudurpacchhim State<br />
                Nepal<br /><br />
                <strong>Phone:</strong> +977 16609952111<br />
                <strong>Email:</strong> info@bheemdattamun.gov.np<br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#faq">FAQ</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Waste Pick up</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">E-waste management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Garbage Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Awareness program</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Complain Handling</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Follow us on our social media to stay updated about community waste management.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>WMS</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Janak Bista</a> and <a href="#">Image Kunwar</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;