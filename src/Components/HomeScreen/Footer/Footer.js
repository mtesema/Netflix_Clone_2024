import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Style/Footer.css";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer_section container-fluid ">
      <div className="footer_icons">
        <a className="icons" href="facebook.com">
          <FacebookIcon />
        </a>
        <a className="icons" href="instagram.com">
          <InstagramIcon />
        </a>
        <a className="icons" href="https://twitter.com/">
          <XIcon />
        </a>
        <a className="icons" href="https://youtube.com/">
          <YouTubeIcon />
        </a>
      </div>

      <ul className="member-footer-links">
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/browse/audio-description">
            <span className="member-footer-link-content">Audio Description</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="http://ir.netflix.com/">
            <span className="member-footer-link-content">Investor Relations</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a
            className="member-footer-link"
            href="https://help.netflix.com/legal/privacy"
          >
            <span className="member-footer-link-content">Privacy</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a
            className="member-footer-link"
            href="https://help.netflix.com/contactus"
          >
            <span className="member-footer-link-content">Contact Us</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://help.netflix.com/">
            <span className="member-footer-link-content">Help Center</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://jobs.netflix.com/">
            <span className="member-footer-link-content">Jobs</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a
            className="member-footer-link"
            href="https://help.netflix.com/legal/notices"
          >
            <span className="member-footer-link-content">Legal Notices</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://www.netflix.com/dnsspi">
            <span className="member-footer-link-content">
              Do Not Sell or Share My Personal Information
            </span>
          </a>
        </li>

        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/redeem">
            <span className="member-footer-link-content">Gift Cards</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://netflix.shop/">
            <span className="member-footer-link-content">Netflix Shop</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/Cookies">
            <span className="member-footer-link-content">Cookie Preferences</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://netflix.com/adchoices-us">
            <span className="member-footer-link-content">Ad Choices</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="https://media.netflix.com/">
            <span className="member-footer-link-content">Media Center</span>
          </a>
        </li>

        <li className="member-footer-link-wrapper">
          <a
            className="member-footer-link"
            href="https://help.netflix.com/legal/termsofuse"
          >
            <span className="member-footer-link-content">Terms of Use</span>
          </a>
        </li>

        <li className="member-footer-link-wrapper">
          <a
            className="member-footer-link"
            href="https://help.netflix.com/legal/corpinfo"
          >
            <span className="member-footer-link-content">
              Corporate Information
            </span>
          </a>
        </li>
      </ul>

      <div className="service_code_wrapper">
        <button className="service-code">Service Code</button>
      </div>

      <div className="footer_copyright">© 1997 - 2024 Netflix, inc.</div>
    </div>
  );
}

export default Footer;
