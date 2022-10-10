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
            <Link to="/">How it works</Link>
            <Link to="/">Our Partners</Link>
            <Link to="/">On Going Projects</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Our Partners</Link>
            <Link to="/">On Going Projects</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
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
          <small className="website-rights"> All rights reserved to ULIMA © 2022</small>
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
              to="/"
              target="_blank"
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
