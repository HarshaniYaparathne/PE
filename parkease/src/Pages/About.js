import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="intro">
        <h2>About Us</h2>
        <p>
          The "Park Ease" solution by SLTMobitel’s innovation center, “The Embryo,” is an AI and cloud-based parking management system designed to enhance security and efficiency in parking facilities.
        </p>
      </section>

      <section className="video-slider">
        <div className="slider-box">
          <p>🎥 Video</p>
          <img src="./images/slider-image.png" alt="Slider visual" />
        </div>
      </section>

      <section className="edge-device">
        <h3>AI | EDGE DEVICE</h3>
        <div className="device-images">
          <img src="./images/edge-device.png" alt="Edge Device" />
        </div>
      </section>

      <section className="iot-features">
        <h3>IoT Device Features</h3>
        <div className="circle-grid">
          {[
            'ANPR Camera',
            'Boom Barrier',
            'Network Switch',
            'Radar Sensor',
            'Loop Sensor',
            'Access Control',
            'RFID Reader',
            'Digital Signage',
            'Controller'
          ].map((feature, index) => (
            <div className="circle" key={index}>
              <div className="icon-placeholder">📷</div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="requirements">
        <h3>Base Requirements for Park Ease System Installation</h3>
        <div className="requirement-grid">
          {[
            'Power Supply',
            'Internet Connectivity',
            'Single Entry/Exit Point',
            'Backend Database',
            'Security Measures',
            'Parking Layout',
            'Compatibility',
            'Operator Setup',
            'Environmental Constraints',
            'Maintenance Access'
          ].map((req, index) => (
            <div className="requirement-card" key={index}>
              <div className="icon-placeholder"></div>
              <p>{req}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
