import React from 'react';
import './About.css';
import collectionImage from '../images/collection_roger.png';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img src={collectionImage} className="img-fluid" alt="Collection" />
          </div>
          <div className="col-md-6 panel-content">
            <h3 className="about-title">ABOUT<br />
              <span>COLLECTION</span>
            </h3>
            <p className="about-content">Roger NFTs introduce an innovative paradigm for digital ownership and interaction within the Roger ecosystem. As distinct digital assets, Roger NFTs provide owners with exclusive perks and advantages, including early access to presales and platform features, as well as discounted opportunities for developers seeking to initiate projects on Roger Pad or engage in AirDrop campaigns.</p>
            <p className="about-content">These NFTs act as a portal to an active community of enthusiasts, developers, and creators, nurturing engagement, participation, and expansion within the Roger ecosystem. By prioritizing incentivized engagement and recognizing loyalty, Roger NFTs redefine the notion of digital ownership, granting holders a vested interest in the platform's development and success.</p>
           
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-layers"></i>
                <h2>10+</h2>
                <p>Artist</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>2000</h2>
                <p>NFT artworks</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>160+</h2>
                <p>Community members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <h2>2.5x</h2>
                <p>Estimated value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, value }) => {
  return (
    <div className="col-md-3 about-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};


