import "./secMarketplace.css";
import React from "react";
import tree from "../public/images/tree.jpg";
const SecMarketplace = (props) => {
  console.log("isClicked sec marketplace ", props.clickEvent);
  return (
    <div className="sec-marketplace">
      <div className="card">
        <span className="material-symbols-outlined"> 123 </span>
        <div className="card-container">
          <h4>
            <b>SECONDARY MARKET LIQUIDITY(in Millions)</b>
          </h4>
          <p>1000</p>
        </div>
      </div>
      <div className="card">
        <span className="material-symbols-outlined"> equalizer </span>
        <div className="card-container">
          <h4>
            <b>RESOLD CARBON CREDITS TOKENS</b>
          </h4>
          <p>1000</p>
        </div>
      </div>
      <div className="card">
        <span className="material-symbols-outlined">source_environment</span>
        <div className="card-container">
          <h4>
            <b>AVAILABLE TOKENS FOR RESELLING</b>
          </h4>
          <p>1000</p>
        </div>
      </div>
      <div className="card">
        <span className="material-symbols-outlined"> poker_chip </span>
        <div className="card-container">
          <h4>
            <b>CARBON CREDITS VOLUME</b>
          </h4>
          <p>1000</p>
        </div>
      </div>
      <div className="sec-tokens">
        <h1>SECONDARY CARBON CARBON TOKENS</h1>
        <div className="cards">
          <div className="card">
            <div className="details">
              <img src={tree} alt="" />
              <div className="details-list">
                <h3>ORG1</h3>
              </div>
              <h4>20/100 Credits Sold</h4>
              <h4>Issued By Govt. of India</h4>
              <button>VIEW</button>
            </div>
          </div>
          <div className="card">
            <div className="details">
              <img src={tree} alt="" />
              <div className="details-list">
                <h3>ORG2</h3>
              </div>
              <h4>50/100 Credits Sold</h4>
              <h4>Issued By Govt. of India</h4>
              <button>VIEW</button>
            </div>
          </div>
          <div className="card">
            <div className="details">
              <img src={tree} alt="" />
              <div className="details-list">
                <h3>ORG3</h3>
              </div>
              <h4>20/100 Credits Sold</h4>
              <h4>Issued By Govt. of India</h4>
              <button>VIEW</button>
            </div>
          </div>
          <div className="card">
            <div className="details">
              <img src={tree} alt="" />
              <div className="details-list">
                <h3>ORG4</h3>
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

export default SecMarketplace;
