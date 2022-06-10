import React from "react";
import Product from "../../asserts/3.png";
import './Products.css';

const Products = () => {
  return (
    <section>
      <p className="center-text">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION
      </p>
      <div>
        <img src={Product} alt="" />
        <p className="center-text">
          Valves - Pumps - Pipes - IT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div className="divider-bottom"></div>
      <div>
        <p className="center-text cri-fluid">
          <strong>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </strong>
        </p>
        <p className="center-text">
          CHEMICALS <span className="divider"> | </span> PROCESS POWER WATER
          <span className="divider">|</span>
          WASTE WATER I OILS <span className="divider"> | </span> GAS PHARMAI
          SUGARS <span className="divider">|</span> DISTILLERIES PAPER
          <span className="divider"> | </span> PULP MARINE
          <span className="divider"> | </span> DEFENCE METAL
          <span className="divider"> | </span> MINING
          <span className="divider"> | </span>
          FOOD <span className="divider"> | </span> BEVERAGE PETROCHEMICAL S
          REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE
          <span className="divider"> | </span> RESIDENTIAL
        </p>
      </div>
    </section>
  );
};

export default Products;
