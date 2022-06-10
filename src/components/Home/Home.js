import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
      <>
        <div className="container">
          <Banner />
          <Products />
        </div>
        <Footer />
      </>
    );
};

export default Home;