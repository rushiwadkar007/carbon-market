import React from "react";
import tree from "../public/images/tree.jpg";
import tata from "../public/images/tata.jpeg";
import mahindra from "../public/images/mahindra.jpeg";
import maruti from "../public/images/maruti.png";
import toyota from "../public/images/toyota.png";
import "./marketplace.css";
const Marketplace = (props) => {
  console.log("isClicked marketplace", props.clickEvent)
  return (
    <div className={props.clickEvent === false ? "marketplace": "marketplaceClose"}>
      <div className="newly-issued">
        <h1>NEWLY GOVT ISSUED CREDITS</h1>
        <div className="cards">
          <div className="card">
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
      <div className="trending-credits">
        <h1>HIGH CO2 EMISSION VOLUME CREDITS</h1>
        <div className="cards">
          <div className="card">
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
      <div className="low-emission-volume-credits">
        <h1>LOW CO2 EMISSION VOLUME CREDITS</h1>
        <div className="cards">
          <div className="card">
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
            <span class="material-symbols-outlined">verified</span>
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
      <div className="credit-seeking-companies">
        <h1>HIGH CARBON EMITTING COMPANIES</h1>
        <div className="cards">
          <div className="card">
            <img src={tata} alt="" />
          </div>
          <div className="card">
            <img src={mahindra} alt="" />
          </div>
          <div className="card">
            <img src={maruti} alt="" />
          </div>
          <div className="card">
            <img src={toyota} alt="" />
          </div>
        </div>
      </div>
      <div className="credit-selling-companies">
        <h1>LOW CARBON EMITTING COMPANIES</h1>
        <div className="cards">
          <div className="card">
            <img src={tata} alt="" />
          </div>
          <div className="card">
            <img src={mahindra} alt="" />
          </div>
          <div className="card">
            <img src={maruti} alt="" />
          </div>
          <div className="card">
            <img src={toyota} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
