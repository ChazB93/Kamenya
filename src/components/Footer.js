import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Our Partners</Link>
            <Link to="/">On Going Projects</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          <div className="footer-link-items">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.3163588092984!2d8.3075163146614!3d46.99476087914884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffa0b496b7b71%3A0xe071fd3b8df33c44!2sObermattweg%209%2C%206052%20Hergiswil!5e0!3m2!1sen!2sch!4v1667605199465!5m2!1sen!2sch" title="GoogleMap"></iframe>
          </div>
        </div>

        <div className="footer-link-wrapper">
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              KAMENYA <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights"> All rights reserved to Kamenya © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/facebook.com/charles.bizindavyi"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>

            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              className="social-icon-link linkedlin"
              //to="https://www.linkedin.com/company/kamenya/"
              target="https://www.linkedin.com/company/kamenya/"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
