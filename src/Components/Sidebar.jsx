import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = (props) => {
  console.log("isClicked ", props.clickEvent);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [closeClicked, setCloseClicked] = useState(false);
  const [sideBarClicked, setSideBarClicked] = useState(true);
  console.log("sideBarClicked ", sideBarClicked);
  return (
    <div>
      <aside>
        <div className="top">
          <div className="logo">
            <h2 className="kiya">
              KIYA's <span className="primary">CARBON EXCHANGE(C&T) </span>
            </h2>
          </div>
        </div>
        <div
          className="sidebar"
          style={{
            width: closeClicked && "4%",
            transition: !closeClicked && "all 1s ease-in",
          }}
        >
          <div className="close" onClick={() => setCloseClicked(!closeClicked)}>
            {!closeClicked ? (
              <span
                className="material-symbols-outlined"
                style={{
                  marginLeft: "10px",
                  transition: closeClicked && "all 1s ease-in",
                }}
                onClick={() =>setSideBarClicked(!sideBarClicked)}
              >
                {" "}
                arrow_back_ios{" "}
              </span>
            ) : (
              <span
                class="material-symbols-outlined"
                style={{
                  float: closeClicked && "left",
                  marginLeft: "10px",
                  transition: closeClicked && "all 1s ease-in",
                }}
                onClick={() =>setSideBarClicked(!sideBarClicked)}
              >
                deployed_code
              </span>
            )}
          </div>
          <Link
            to="/"
            className={!closeClicked && splitLocation[1] === "" ? "active" : ""}
          >
            <span className="material-symbols-sharp"> Grid_View </span>
            {!closeClicked && <h3>DASHBOARD</h3>}
          </Link>
          <Link
            to="/marketplace"
            className={
              !closeClicked && splitLocation[1] === "marketplace" ? "active" : ""
            }
          >
            <span className="material-symbols-outlined"> store </span>
            {!closeClicked && <h3>COMPLIANCE MARKETPLACE</h3>}
          </Link>
          <Link
            to="/secondary-marketplace"
            className={
              !closeClicked && splitLocation[1] === "secondary-marketplace"
                ? "active"
                : ""
            }
          >
            <span class="material-symbols-outlined">matter</span>
            {!closeClicked && <h3>VOLUNTARY MARKETPLACE</h3>}
          </Link>
          <Link
            to="/carbon-products"
            className={
              !closeClicked && splitLocation[1] === "carbon-products"
                ? "active"
                : ""
            }
          >
            <span className="material-symbols-sharp"> receipt_long </span>
            {!closeClicked && <h3>CARBON POOLS</h3>}
          </Link>
          <Link
            to="/reports"
            className={
              !closeClicked && splitLocation[1] === "reports" ? "active" : ""
            }
          >
            <span className="material-symbols-sharp"> report </span>
            {!closeClicked && <h3>CARBON REPORTS</h3>}
          </Link>
          <Link
            to="/carbon-products-list"
            className={
              !closeClicked && splitLocation[1] === "carbon-products-list"
                ? "active"
                : ""
            }
          >
            <span className="material-symbols-sharp"> add </span>
            {!closeClicked && <h3>LIST NEW CARBON POOL</h3>}
          </Link>
          <Link
            to="/companies"
            className={
              !closeClicked && splitLocation[1] === "companies" ? "active" : ""
            }
          >
            <span className="material-symbols-outlined"> apartment </span>
            {!closeClicked && <h3>COMPANIES</h3>}
          </Link>
          <Link
            to="/analytics"
            className={
              !closeClicked && splitLocation[1] === "analytics" ? "active" : ""
            }
          >
            <span className="material-symbols-sharp"> insights </span>
            {!closeClicked && <h3>ANALYTICS</h3>}
          </Link>
          <Link
            to="/interoperability"
            className={
              !closeClicked && splitLocation[1] === "interoperability"
                ? "active"
                : ""
            }
          >
            <span className="material-symbols-outlined">
              {" "}
              connecting_airports{" "}
            </span>
            {!closeClicked && <h3>INTERCHAIN TRANSFER</h3>}
          </Link>
          <Link
            to="/explorer"
            className={
              !closeClicked && splitLocation[1] === "explorer" ? "active" : ""
            }
          >
            <span className="material-symbols-outlined">
              {" "}
              data_exploration{" "}
            </span>
            {!closeClicked && <h3>TRANS. EXPLORER</h3>}
          </Link>
          <Link
            to="/carbon-calculator"
            className={
              !closeClicked && splitLocation[1] === "carbon-calculator"
                ? "active"
                : ""
            }
          >
            <span className="material-symbols-outlined"> calculate </span>
            {!closeClicked && <h3>CARBON CALCULATOR</h3>}
          </Link>
          <Link
            to="/node-details"
            className={
              !closeClicked && splitLocation[1] === "node-details"
                ? "active"
                : ""
            }
          >
            <span className="material-symbols-outlined"> orbit </span>
            {!closeClicked && <h3>NODE DETAILS</h3>}
          </Link>
          <Link
            to="/settings"
            className={
              !closeClicked && splitLocation[1] === "settings" ? "active" : ""
            }
          >
            <span className="material-symbols-sharp"> settings </span>
            {!closeClicked && <h3>SETTINGS</h3>}
          </Link>
          <Link
            to="/admin"
            className={
              !closeClicked && splitLocation[1] === "admin" ? "active" : ""
            }
          >
            <span className="material-symbols-outlined"> shield_person </span>
            {!closeClicked && <h3>ADMIN</h3>}
          </Link>
          <Link
            to="/faqs"
            className={
              !closeClicked && splitLocation[1] === "faqs" ? "active" : ""
            }
          >
            <span class="material-symbols-outlined">contact_support</span>
            {!closeClicked && <h3>FAQs</h3>}
          </Link>
          <Link
            to="/logout"
            className={
              !closeClicked && splitLocation[1] === "logout" ? "active" : ""
            }
          >
            <span className="material-symbols-sharp"> logout </span>
            {!closeClicked && <h3>LOGOUT</h3>}
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
