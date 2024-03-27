import React from "react";
import './Why.css'

export default function Why() {
  return(
    <section className="why">
      <div className="container-fluid">
        <div className="content">
          <h2>WHY <span>CHOOSE US?</span></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-wallet2"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">LIMITED SUPPLY</h5>
                      <p className="card-text">No further minting of Roger NFTs will occur beyond the predetermined limit of 2000.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-check2-square"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Advantageous Early </h5>
                      <p className="card-text"> Early investors will have the opportunity to acquire Roger NFTs at a fixed rate of 500 Matic each, providing them with favorable pricing terms.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-lightning"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Discounts for Holders</h5>
                      <p className="card-text">Roger NFT holders qualify for varying discounts based on their ecosystem ranking.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="col-md-12">
                <img className="img-fluid center-img" src={require('../images/land-cta.png')} alt="center-img"/>          
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-brush"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">STAKEHOLDER</h5>
                      <p className="card-text">NFT holders and developers can stake Roger NFTs for boosted APY and long-term engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-coin"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DEV DISCOUNT</h5>
                      <p className="card-text">Developers get up to 10% off via ROGER AirDrop, promoting broader distribution and community engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-boxes"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">airdrop incentives</h5>
                      <p className="card-text">Developers get up to 10% off with ROGER AirDrop for wider reach and community engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}