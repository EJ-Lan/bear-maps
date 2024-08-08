import reactLogo from "../assets/react.svg";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  //content within the search bar
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = () => {
    console.log(searchItem);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img className="logo" src={reactLogo} alt="Maps" />
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
