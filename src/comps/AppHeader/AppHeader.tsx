import { useState } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import './AppHeader.css';

const AppHeader = () => {
  const [isNavbarVisible, toggleNavbarVisibility] = useState(false);

  return (
  <div className="App-header">
    <button
      style={{ visibility: isNavbarVisible ? 'hidden' : 'visible' }}
      className="App-header-toggle-side-nav-btn"
      onClick={() => toggleNavbarVisibility(!isNavbarVisible)}
    />
    <SideNavBar isVisible={isNavbarVisible} toggleVisibility={toggleNavbarVisibility} />
    <h3>
      Products management system
    </h3>
  </div>
  )
};

export default AppHeader;