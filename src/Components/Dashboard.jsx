import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <main className={props.clickEvent === false ? "": "mainClosed"}>
        <div>
          <div className="firstDiv">
            <div className="card">
              <span className="material-symbols-outlined"> 123 </span>
              <div className="card-container">
                <h4>
                  <b>TOTAL <br /> LIQUIDITY(In Millions)</b>
                </h4>
                <p>1000</p>
              </div>
            </div>
            <div className="card">
              <span className="material-symbols-outlined"> equalizer </span>
              <div className="card-container">
                <h4>
                  <b>TOTAL CARBON LQUIDITY(in Millions)</b>
                </h4>
                <p>1000</p>
              </div>
            </div>
            <div className="card">
              <span className="material-symbols-outlined">
                source_environment
              </span>
              <div className="card-container">
                <h4>
                  <b>TOTAL COMPANIES ONBOARDED</b>
                </h4>
                <p>10</p>
              </div>
            </div>
            <div className="card">
              <span className="material-symbols-outlined"> poker_chip </span>
              <div className="card-container">
                <h4>
                  <b>TOTAL CARBON TOKENS BRIDGED</b>
                </h4>
                <p>1000</p>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="tokens-table">
              <h4>LATEST TOKENS CREATED</h4>
              <table>
                <tr>
                  <th>COMPANY</th>
                  <th>CONTACT</th>
                  <th>COUNTRY</th>
                  <th>STATE</th>
                  <th>DATE</th>
                  <th>TOKEN ID</th>
                  <th>WALLET ADDRESS</th>
                  <th>TOTAL APPROVALS</th>
                  <th>TOKEN SIGNATURE</th>
                  <th>TRANSACTION HASH</th>
                  <th>TOKEN URL</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>7020542111</td>
                  <td>Germany</td>
                  <td>Bavaria</td>
                  <td>05/08/2024</td>
                  <td>TKN_905_MX_01</td>
                  <td>0x9D...f3247</td>
                  <td>5</td>
                  <td>0xm87s...7055</td>
                  <td>0x95e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
                <tr>
                  <td>Jonathan Johnson</td>
                  <td>8902142536</td>
                  <td>Germany</td>
                  <td>Saxony</td>
                  <td>15/08/2024</td>
                  <td>TKN_905_MX_02</td>
                  <td>0x7BD...f3247</td>
                  <td>10</td>
                  <td>0x2Ps...7055</td>
                  <td>0x09e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
                <tr>
                  <td>Wilfred Johnson</td>
                  <td>9125642225</td>
                  <td>Germany</td>
                  <td>Saarland</td>
                  <td>25/5/2024</td>
                  <td>TKN_905_MX_03</td>
                  <td>0xM9D...f3247</td>
                  <td>15</td>
                  <td>0x8s...7055</td>
                  <td>0x5e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
              </table>
              <div className="pagination">
                <Link to="/">
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_left
                  </span>
                </Link>
                <Link to="/">1</Link>
                <Link to="/" className="active">
                  2
                </Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
                <Link to="/">5</Link>
                <Link to="/">
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                  </span>
                </Link>
              </div>
            </div>
            <div className="buying-table">
              <h4>LATEST PURCHASES</h4>
              <table>
                <tr>
                  <th>COMPANY</th>
                  <th>CONTACT</th>
                  <th>COUNTRY</th>
                  <th>STATE</th>
                  <th>DATE</th>
                  <th>TOKEN ID</th>
                  <th>WALLET ADDRESS</th>
                  <th>TOTAL APPROVALS</th>
                  <th>TOKEN SIGNATURE</th>
                  <th>TRANSACTION HASH</th>
                  <th>TOKEN URL</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>7020542111</td>
                  <td>Germany</td>
                  <td>Bavaria</td>
                  <td>05/08/2024</td>
                  <td>TKN_905_MX_01</td>
                  <td>0x9D...f3247</td>
                  <td>5</td>
                  <td>0xm87s...7055</td>
                  <td>0x95e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
                <tr>
                  <td>Jonathan Johnson</td>
                  <td>8902142536</td>
                  <td>Germany</td>
                  <td>Saxony</td>
                  <td>15/08/2024</td>
                  <td>TKN_905_MX_02</td>
                  <td>0x7BD...f3247</td>
                  <td>10</td>
                  <td>0x2Ps...7055</td>
                  <td>0x09e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
                <tr>
                  <td>Wilfred Johnson</td>
                  <td>9125642225</td>
                  <td>Germany</td>
                  <td>Saarland</td>
                  <td>25/5/2024</td>
                  <td>TKN_905_MX_03</td>
                  <td>0xM9D...f3247</td>
                  <td>15</td>
                  <td>0x8s...7055</td>
                  <td>0x5e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
              </table>
              <div className="pagination">
                <Link to="/">
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_left
                  </span>
                </Link>
                <Link to="/">1</Link>
                <Link to="/" className="active">
                  2
                </Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
                <Link to="/">5</Link>
                <Link to="/">
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                  </span>
                </Link>
              </div>
            </div>
            <div className="users-table">
              <h4>TOTAL COMPANIES ONBOARDED</h4>
              <table>
                <tr>
                  <th>COMPANY</th>
                  <th>CONTACT</th>
                  <th>COUNTRY</th>
                  <th>STATE</th>
                  <th>DATE</th>
                  <th>TOKEN ID</th>
                  <th>WALLET ADDRESS</th>
                  <th>TOTAL APPROVALS</th>
                  <th>TOKEN SIGNATURE</th>
                  <th>TRANSACTION HASH</th>
                  <th>TOKEN URL</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>7020542111</td>
                  <td>Germany</td>
                  <td>Bavaria</td>
                  <td>05/08/2024</td>
                  <td>TKN_905_MX_01</td>
                  <td>0x9D...f3247</td>
                  <td>5</td>
                  <td>0xm87s...7055</td>
                  <td>0x95e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
                <tr>
                  <td>Jonathan Johnson</td>
                  <td>8902142536</td>
                  <td>Germany</td>
                  <td>Saxony</td>
                  <td>15/08/2024</td>
                  <td>TKN_905_MX_02</td>
                  <td>0x7BD...f3247</td>
                  <td>10</td>
                  <td>0x2Ps...7055</td>
                  <td>0x09e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
                <tr>
                  <td>Wilfred Johnson</td>
                  <td>9125642225</td>
                  <td>Germany</td>
                  <td>Saarland</td>
                  <td>25/5/2024</td>
                  <td>TKN_905_MX_03</td>
                  <td>0xM9D...f3247</td>
                  <td>15</td>
                  <td>0x8s...7055</td>
                  <td>0x5e...271f</td>
                  <td>https:token-image.kiya.ai/1</td>
                </tr>
              </table>
              <div className="pagination">
                <Link to="/">
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_left
                  </span>
                </Link>
                <Link to="/">1</Link>
                <Link to="/" className="active">
                  2
                </Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
                <Link to="/">5</Link>
                <Link to="/">
                  <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
