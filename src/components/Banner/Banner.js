import React from 'react';
import IMG2 from '../../asserts/1.png';
import IMG from '../../asserts/2.png';
import logo from '../../asserts/logo.png';
import './Banner.css';

const Banner = () => {
    return (
      <>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <header className="top-banner">
          <div className="award">
            <img src={IMG2} alt="" />
          </div>
          <div className="right-container">
            <div>
              <p>
                <strong>
                  C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                  for the 4th time.
                </strong>
              </p>
              <ul className="list-container">
                <li>
                  C.R.I's energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C..I. is the highest contributor in the country for the
                  projects of EEL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IT enabled control panel.
                </li>
              </ul>
            </div>
            <div className="award-taking">
              <img src={IMG} alt="" />
            </div>
            <p>
              Government of India has awarded the{" "}
              <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
              Selvaraj, Joint Managing Director of C..I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </header>
      </>
    );
};

export default Banner;