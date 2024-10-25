import React from 'react'
import "./admin.css";
import { Link } from 'react-router-dom';
const Admin = (props) => {
    console.log("isClicked admin", props.clickEvent)
    return (
        <div className='admin-main'>
            <div className="admin-data">
                <button className='search-button' >
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </button>
                <input type="text" class="search-input" placeholder="Search" />
                <div className="admin-search-menus">
                    <span class="material-symbols-outlined">
                        density_small
                    </span>
                    <svg width="10" height="20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="0" x2="5" y2="100" stroke="#540676" stroke-width="3" />
                    </svg>
                    <span class="material-symbols-outlined">
                        download
                    </span>
                    <svg width="10" height="20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="0" x2="5" y2="100" stroke="#540676" stroke-width="3" />
                    </svg>
                    <span class="material-symbols-outlined">
                        autorenew
                    </span>
                    <svg width="10" height="20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="0" x2="5" y2="100" stroke="#540676" stroke-width="3" />
                    </svg>
                    <span class="material-symbols-outlined">
                        filter_alt
                    </span>
                    <svg width="10" height="20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="0" x2="5" y2="100" stroke="#540676" stroke-width="3" />
                    </svg>
                    <span class="material-symbols-outlined">
                        west
                    </span>
                    <svg width="10" height="20" xmlns="http://www.w3.org/2000/svg">
                        <line x1="5" y1="0" x2="5" y2="100" stroke="#540676" stroke-width="3" />
                    </svg>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </div>
            </div>
            <div className="new-token-requests">
                <h4>NEW CARBON CREDIT TOKENIZATION REQUESTS</h4>
                <table>
                    <tr>
                        <th>COMPANY</th>
                        <th>CONTACT</th>
                        <th>COUNTRY</th>
                        <th>DATE</th>
                        <th>TOKEN ID</th>
                        <th>WALLET ADDRESS</th>
                        <th>TOTAL APPROVALS</th>
                        <th>TOKEN SIGNATURE</th>
                        <th>TRANSACTION HASH</th>
                        <th>APPROVAL STATUS</th>
                        <th>VIEW</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>7020542111</td>
                        <td>Germany</td>
                        <td>05/08/2024</td>
                        <td>TKN_905_MX_01</td>
                        <td>0x9D...f3247</td>
                        <td>5</td>
                        <td>0xm87s...7055</td>
                        <td>0x95e...271f</td>
                        <td style={{ color: "#016a70", fontWeight: "500" }}><span class="material-symbols-outlined" style={{ fontSize: "40px" }}>
                            recommend
                        </span></td>
                        <td><span class="material-symbols-outlined" style={{ textAlign: "center", padding: "10px", justifyContent: "center", fontSize: "30px", color: "#540676", fontWeight: "800", cursor: "pointer" }}>
                            visibility
                        </span></td>
                    </tr>
                    <tr>
                        <td>Jonathan Johnson</td>
                        <td>8902142536</td>
                        <td>Germany</td>
                        <td>15/08/2024</td>
                        <td>TKN_905_MX_02</td>
                        <td>0x7BD...f3247</td>
                        <td>10</td>
                        <td>0x2Ps...7055</td>
                        <td>0x09e...271f</td>
                        <td style={{ color: "#016a70", fontWeight: "500" }}><span class="material-symbols-outlined" style={{ fontSize: "40px" }}>
                            recommend
                        </span></td>
                        <td><span class="material-symbols-outlined" style={{ textAlign: "center", padding: "10px", justifyContent: "center", fontSize: "30px", color: "#540676", fontWeight: "800", cursor: "pointer" }}>
                            visibility
                        </span></td>
                    </tr>
                    <tr>
                        <td>Wilfred Johnson</td>
                        <td>9125642225</td>
                        <td>Germany</td>
                        <td>25/5/2024</td>
                        <td>TKN_905_MX_03</td>
                        <td>0xM9D...f3247</td>
                        <td>15</td>
                        <td>0x8s...7055</td>
                        <td>0x5e...271f</td>
                        <td style={{ color: "Red", fontWeight: "500" }}><span class="material-symbols-outlined" style={{ fontSize: "40px" }}>
                            cancel
                        </span></td>
                        <td><span class="material-symbols-outlined" style={{ textAlign: "center", padding: "10px", justifyContent: "center", fontSize: "30px", color: "#540676", fontWeight: "800", cursor: "pointer" }}>
                            visibility
                        </span></td>
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
    )
}

export default Admin