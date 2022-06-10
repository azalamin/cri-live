import React from 'react';
import { AiFillChrome } from "react-icons/ai";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import './Footer.css';



const Footer = () => {
    return (
      <footer>
        <div className="container footer_container">
          <div className="icon-container">
            <BsTelephoneFill className="icon-phone icon" />
            <p className='footer-item'>
              <a href="tell:1800 200 1234">Toll free 1800 200 1234</a>
            </p>
          </div>
          <div className="icon-container">
            <BsFacebook className="icon" />
            <p className='footer-item'>
              <a href="https://www.facebook.com/cribumps">
                https://www.facebook.com/cribumps
              </a>
            </p>
          </div>
          <div className="icon-container">
            <AiFillChrome className="icon" />
            <p className='footer-item'>
              <a href="https://www.crigroups.com/">
                https://www.crigroups.com/
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;