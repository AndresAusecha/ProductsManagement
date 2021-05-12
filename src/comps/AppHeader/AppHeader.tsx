import { useState } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";

const AppHeader = () => {
  const [isNavbarVisible, toggleNavbarVisibility] = useState(false);

  return (
  <div className="App-header">
    <button onClick={() => {
      toggleNavbarVisibility(!isNavbarVisible);
    }}>
      {isNavbarVisible ? 'Hide' : 'See'} navbar
    </button>
    <SideNavBar isVisible={isNavbarVisible} toggleVisibility={toggleNavbarVisibility} />
    <h3>
      Products management system
    </h3>
  </div>
  )
};

export default AppHeader;