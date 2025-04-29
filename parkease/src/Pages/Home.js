import React from 'react';
//import carImage from '../assets/car.jpg'; You need to place the car image in `src/assets/`

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1><span className="green">welcome to Park Ease !</span><br />Automatic license plate recognition made easy</h1>
        <p>The "Park Ease" solution by SLTMobitel's innovation center, "The Embryo," is an AI and cloud-based parking management system designed to enhance security and efficiency in parking facilities.</p>
        <img src="https://www.slt.lk/sites/default/files/sltmobitel_logo.png" alt="SLTMobitel logo" className="slt-logo" />
      </div>
    </div>
  );
};

export default Home;
