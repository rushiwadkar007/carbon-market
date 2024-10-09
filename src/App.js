import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Marketplace from "./Components/Marketplace.jsx";
import SecMarketplace  from "./Components/SecMarketplace.jsx";
import Navbar from "./Components/Navbar.jsx";
import CarbonListing from "./Components/CarbonListing.jsx";
function App() {
  return (
    <BrowserRouter basename="">
      <div className="container">
        <Sidebar/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/secondary-marketplace" element={<SecMarketplace />}/>
          <Route path="/carbon-products-list" element={<CarbonListing />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
