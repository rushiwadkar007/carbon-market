import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Marketplace from "./Components/Marketplace.jsx";
import SecMarketplace  from "./Components/SecMarketplace.jsx";
import Navbar from "./Components/Navbar.jsx";
import CarbonListing from "./Components/CarbonListing.jsx";
import Admin from "./Components/Admin.jsx";
import { useState } from "react";
function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <BrowserRouter basename="">
      <div className="container" onClick={()=> setIsClicked(!isClicked)}>
        <Sidebar clickEvent={isClicked} />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard clickEvent={isClicked}/>} />
          <Route path="/marketplace" element={<Marketplace clickEvent={isClicked}/>} />
          <Route path="/secondary-marketplace" element={<SecMarketplace clickEvent={isClicked}/>}/>
          <Route path="/carbon-products-list" element={<CarbonListing clickEvent={isClicked}/>}/>
          <Route path="/admin" element={<Admin clickEvent={isClicked}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
