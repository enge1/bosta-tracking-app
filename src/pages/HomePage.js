import React from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="quotes">
        <h1>Join A New Generation Of Logistics!</h1>
        <p>Redefining how you ship, track, collect, deliver all through innovative tech-solutions and efficient operations.</p>
        <button type='button' className="ant-btn ant-btn-primary button-primary">
        <span>Start now</span>
        </button>
      </div>
      <div className="image">
        <img src="https://rak-experience.com/wp-content/uploads/2020/08/delivery.jpg" alt="Bosta img" />
      </div>
    </div>
  );
};

export default HomePage;
