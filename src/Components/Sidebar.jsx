import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div>
      <aside>
        <div className="top">
          <div className="logo">
            <h2 className="kiya">
              KIYA <span className="danger">CARBON EXCHANGE(C&T) </span>
            </h2>
          </div>
          <div className="close">
            <span className="material-symbols-outlined"> Close </span>
          </div>
        </div>
        <div className="sidebar">
          <Link to="/" className={splitLocation[1] === "" ? "active" : ""}>
            <span className="material-symbols-sharp"> Grid_View </span>
            <h3>DASHBOARD</h3>
          </Link>
          <Link
            to="/marketplace"
            className={splitLocation[1] === "marketplace" ? "active" : ""}
          >
            <span className="material-symbols-outlined"> store </span>
            <h3>MARKETPLACE</h3>
          </Link>
          <Link
            to="/carbon-products"
            className={splitLocation[1] === "carbon-products" ? "active" : ""}
          >
            <span className="material-symbols-sharp"> receipt_long </span>
            <h3>CARBON PRODUCTS</h3>
          </Link>
          <Link
            to="/carbon-products-list"
            className={
              splitLocation[1] === "carbon-products-list" ? "active" : ""
            }
          >
            <span className="material-symbols-sharp"> add </span>
            <h3>LIST CARBON CREDITS</h3>
          </Link>
          <Link
            to="/companies"
            className={splitLocation[1] === "companies" ? "active" : ""}
          >
            <span className="material-symbols-outlined"> apartment </span>
            <h3>COMPANIES</h3>
          </Link>
          <Link
            to="/analytics"
            className={splitLocation[1] === "analytics" ? "active" : ""}
          >
            <span className="material-symbols-sharp"> insights </span>
            <h3>ANALYTICS</h3>
          </Link>
          <Link
            to="/interoperability"
            className={splitLocation[1] === "interoperability" ? "active" : ""}
          >
            <span className="material-symbols-outlined">
              {" "}
              connecting_airports{" "}
            </span>
            <h3>INTERCHAIN TRANSFER</h3>
          </Link>
          <Link
            to="/explorer"
            className={splitLocation[1] === "explorer" ? "active" : ""}
          >
            <span className="material-symbols-outlined">
              {" "}
              data_exploration{" "}
            </span>
            <h3>TRANS. EXPLORER</h3>
          </Link>
          <Link
            to="/reports"
            className={splitLocation[1] === "reports" ? "active" : ""}
          >
            <span className="material-symbols-sharp"> report </span>
            <h3>REPORTS</h3>
          </Link>
          <Link
            to="/carbon-calculator"
            className={splitLocation[1] === "carbon-calculator" ? "active" : ""}
          >
            <span className="material-symbols-outlined"> calculate </span>
            <h3>CARBON CALCULATOR</h3>
          </Link>
          <Link
            to="/node-details"
            className={splitLocation[1] === "node-details" ? "active" : ""}
          >
            <span className="material-symbols-outlined"> orbit </span>
            <h3>NODE DETAILS</h3>
          </Link>
          <Link
            to="/settings"
            className={splitLocation[1] === "settings" ? "active" : ""}
          >
            <span className="material-symbols-sharp"> settings </span>
            <h3>SETTINGS</h3>
          </Link>
          <Link
            to="/admin"
            className={splitLocation[1] === "admin" ? "active" : ""}
          >
            <span className="material-symbols-outlined"> shield_person </span>
            <h3>ADMIN</h3>
          </Link>
          <Link
            to="/faqs"
            className={splitLocation[1] === "faqs" ? "active" : ""}
          >
            <span class="material-symbols-outlined">contact_support</span>
            <h3>FAQs</h3>
          </Link>
          <Link
            to="/logout"
            className={splitLocation[1] === "logout" ? "active" : ""}
          >
            <span className="material-symbols-sharp"> logout </span>
            <h3>LOGOUT</h3>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
