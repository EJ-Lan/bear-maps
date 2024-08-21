import Logo from "../assets/bearmaps_logo.png";
import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  //content within the search bar
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = () => {
    console.log(searchItem);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <div className="logo">
          <img src={Logo} alt="Maps" width={556} height={293} />
        </div>
        <h1 className="title">BearMaps</h1>
      </div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search Anything..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );
}

export default Navbar;
