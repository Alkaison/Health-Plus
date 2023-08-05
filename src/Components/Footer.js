import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Health <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <div className="ft-info-p2">
            <p className="ft-input-title">Stay Update to our Newsletter</p>
            <input
              type="text"
              className="ft-input"
              placeholder="Enter your email address"
            />
            <button className="ft-btn">Subscribe</button>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>Emergency Care</li>
            <li>Heart Disease</li>
            <li>Dental Care</li>
            <li>Prescription</li>
            <li>Insights for doctors</li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>General Info</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Consultations</li>
            <li>How it Works</li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>support@healthplus.com</li>
            <li>appointment@healthplus.com</li>
            <li>+022 5454 5252</li>
            <li>+022 2326 6232</li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2013-2023 Health+. All rights reserved.</p>
        <p>Social Links</p>
      </div>
    </div>
  );
}

export default Footer;
