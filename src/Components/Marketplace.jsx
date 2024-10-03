import React from "react";
import tree from "../public/images/tree.jpg";
import "./marketplace.css";
const Marketplace = () => {
  return (
      <div className="marketplace">
        <div className="newly-issued">
          <h1>NEWLY GOVT ISSUED CREDITS</h1>
          <div className="cards">
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>TATA MOTORS</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>MAHINDRA</h3>
                </div>
                <h4>50/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>MARUTI</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>TOYOTA</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="trending-credits">
          <h1>HIGH CO2 EMISSION VOLUME CREDITS</h1>
          <div className="cards">
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>TATA MOTORS</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>MAHINDRA</h3>
                </div>
                <h4>50/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>MARUTI</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>TOYOTA</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="low-emission-volume-credits">
          <h1>LOW CO2 EMISSION VOLUME CREDITS</h1>
          <div className="cards">
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>TATA MOTORS</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>MAHINDRA</h3>
                </div>
                <h4>50/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>MARUTI</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
            <div className="card">
            <span class="material-symbols-outlined">verified</span>
              <div className="details">
                <img src={tree} alt="" />
                <div className="details-list">
                  <h3>TOYOTA</h3>
                </div>
                <h4>20/100 Credits Sold</h4>
                <h4>Issued By Govt. of India</h4>
                <button>VIEW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Marketplace;
